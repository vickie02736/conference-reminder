"""Build a resumable semantic-review queue from current checks, not old run totals."""
import json
from datetime import date, timedelta
from pathlib import Path


def build_queue(catalog, state, today):
    end = today + timedelta(days=30)
    queue = []
    active = {u for e in catalog['events'] + catalog['watchlist'] for u in e['sources'] + [e['url']]}
    transport = []
    for url in sorted(active):
        source = state['sources'].get(url, {})
        if source.get('lifecycle') == 'historical_replaced':
            continue
        if source.get('status') in {'failed', 'unverifiable'}:
            transport.append({'source': url, 'status': source['status'], 'reason': source.get('message')})
        for event in catalog['events'] + catalog['watchlist']:
            if url not in event['sources'] + [event['url']]:
                continue
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
            'historical_addresses': [{'source': u, 'replacement': s.get('replacement')}
                                     for u, s in state['sources'].items() if s.get('lifecycle') == 'historical_replaced']}


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
    print(f"Remaining semantic reviews: {result['remaining_count']} across {result['remaining_source_count']} sources")
