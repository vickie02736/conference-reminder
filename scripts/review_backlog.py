"""Build a resumable semantic-review queue from current checks, not old run totals.

Three narrow exclusions keep the queue focused on work that can still change a reminder:

* Finished events (end date before today) have no future milestones, so their sources are
  listed in ``finished_skipped`` instead of being queued or reported as transport issues.
* ``lifecycle: duplicate_mirror`` marks a regional or alternate URL whose fingerprint is
  identical to its ``canonical`` source. It is skipped only while the two hashes still
  match; as soon as they diverge the mirror is queued normally again.
* ``lifecycle: covered_by_alternative`` marks an address the daily runner cannot fetch
  (for example a bot-blocked page) whose facts are served by an official alternative from
  the same publisher's data source (``alternative``). Its fetch failure moves to
  ``covered_transport_issues`` only while that alternative is itself readable; otherwise it
  is an active transport issue again. Content reviews for the address are never hidden.
"""
import json
from datetime import date, timedelta
from pathlib import Path

READABLE = {'checked', 'review_required'}


def _skip_reason(url, source, sources):
    """Return why ``url`` should be left out of the queue, or None."""
    lifecycle = source.get('lifecycle')
    if lifecycle == 'historical_replaced':
        return 'historical'
    if lifecycle == 'duplicate_mirror':
        canonical = sources.get(source.get('canonical'), {})
        if source.get('hash') and source.get('hash') == canonical.get('hash'):
            return 'mirror'
    return None


def _covered(source, sources):
    if source.get('lifecycle') != 'covered_by_alternative':
        return False
    alternative = sources.get(source.get('alternative'), {})
    return alternative.get('status') in READABLE and alternative.get('lifecycle') is None


def build_queue(catalog, state, today):
    end = today + timedelta(days=30)
    sources = state['sources']
    events = catalog['events'] + catalog['watchlist']
    finished = {e['id'] for e in events if e.get('end') and e['end'] < today.isoformat()}
    queue, transport, covered, mirrors, finished_skipped = [], [], [], [], []
    active = {u for e in events for u in e['sources'] + [e['url']]}
    for url in sorted(active):
        source = sources.get(url, {})
        skip = _skip_reason(url, source, sources)
        if skip == 'historical':
            continue
        if skip == 'mirror':
            mirrors.append({'source': url, 'canonical': source.get('canonical')})
            continue
        owners = [e for e in events if url in e['sources'] + [e['url']]]
        live_owners = [e for e in owners if e['id'] not in finished]
        if not live_owners:
            finished_skipped.append({'source': url, 'event_ids': sorted(e['id'] for e in owners)})
            continue
        if source.get('status') in {'failed', 'unverifiable'}:
            issue = {'source': url, 'status': source['status'], 'reason': source.get('message')}
            if _covered(source, sources):
                covered.append({**issue, 'alternative': source.get('alternative')})
            else:
                transport.append(issue)
        for event in live_owners:
            check = source.get('checks', {}).get(event['id'], {})
            conflicts = [m for m in event['milestones'] if m.get('status') == 'conflict']
            near = sorted(m['date'] for m in event['milestones'] if m.get('date')
                          and today.isoformat() <= m['date'] <= end.isoformat()
                          and m['kind'] not in {'conference_start', 'conference_end'})
            if check.get('review_required'):
                queue.append({'source': url, 'event_id': event['id'], 'reason': check.get('reason'),
                              'message': check.get('message'), 'content_hash': source.get('hash'),
                              'priority': 0 if conflicts or check.get('reason') == 'content_conflict' else 1 if near else 2,
                              'next_deadline': near[0] if near else None,
                              'remaining_fields': check.get('remaining_fields', ['dates', 'times', 'timezones', 'people_roles_affiliations'])})
    queue.sort(key=lambda r: (r['priority'], r['next_deadline'] or '9999', r['event_id'], r['source']))
    return {'as_of': today.isoformat(), 'remaining_count': len(queue), 'remaining_source_count': len({r['source'] for r in queue}),
            'queue': queue, 'active_transport_issues': transport,
            'covered_transport_issues': covered,
            'mirror_addresses': mirrors,
            'finished_skipped': finished_skipped,
            'historical_addresses': [{'source': u, 'replacement': s.get('replacement')}
                                     for u, s in sources.items() if s.get('lifecycle') == 'historical_replaced']}


if __name__ == '__main__':
    root = Path(__file__).resolve().parents[1]
    result = build_queue(json.loads((root/'data/conferences.json').read_text()),
                         json.loads((root/'data/source-checks.json').read_text()), date.today())
    previous_path = root/'data/review-progress.json'
    if previous_path.exists():
        previous = json.loads(previous_path.read_text())
        if 'latest_batch' in previous:
            result['latest_batch'] = previous['latest_batch']
    (root/'data/review-progress.json').write_text(json.dumps(result, ensure_ascii=False, indent=2)+'\n')
    print(f"Remaining semantic reviews: {result['remaining_count']} across {result['remaining_source_count']} sources; "
          f"{len(result['active_transport_issues'])} active and {len(result['covered_transport_issues'])} covered transport issues; "
          f"{len(result['finished_skipped'])} finished-event sources skipped")
