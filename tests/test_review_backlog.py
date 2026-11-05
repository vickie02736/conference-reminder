import sys
import unittest
from datetime import date
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]/'scripts'))
from review_backlog import build_queue


class ReviewQueueTests(unittest.TestCase):
    def test_priorities_resolved_entries_and_changed_content(self):
        events = [{'id': k, 'url': 'https://example.org/'+k, 'sources': [], 'milestones': nodes}
                  for k, nodes in [('later', []), ('urgent', [{'kind':'abstract', 'date':'2026-11-03'}]),
                                   ('conflict', [{'status':'conflict','date':None}]), ('done', [])]]
        sources = {e['url']: {'hash':'reviewed', 'status':'checked', 'checks': {e['id']: {'review_required':e['id']!='done'}}} for e in events}
        catalog = {'events': events, 'watchlist': []}
        result = build_queue(catalog, {'sources':sources}, date(2026,11,2))
        self.assertEqual([r['event_id'] for r in result['queue']], ['conflict','urgent','later'])
        sources[events[-1]['url']].update(hash='new-content', checks={'done':{'review_required':True,'reason':'content_changed'}})
        self.assertEqual(build_queue(catalog, {'sources':sources}, date(2026,11,2))['remaining_count'],4)

    def test_retired_404_is_history_not_active_failure(self):
        url='https://example.org/old'
        result=build_queue({'events':[{'id':'e','url':url,'sources':[],'milestones':[]}],'watchlist':[]},
                           {'sources':{url:{'status':'failed','lifecycle':'historical_replaced','replacement':'https://example.org/new'}}}, date(2026,11,2))
        self.assertEqual(result['queue'],[])
        self.assertEqual(result['active_transport_issues'],[])
        self.assertEqual(len(result['historical_addresses']),1)

    def test_finished_events_are_skipped_but_shared_live_events_are_not(self):
        shared = 'https://example.org/shared'
        events = [{'id': 'past', 'url': 'https://example.org/past', 'sources': [shared], 'end': '2026-11-03', 'milestones': []},
                  {'id': 'live', 'url': shared, 'sources': [], 'end': '2026-12-01', 'milestones': []}]
        sources = {'https://example.org/past': {'status': 'failed', 'checks': {'past': {'review_required': True}}},
                   shared: {'status': 'checked', 'checks': {'past': {'review_required': True}, 'live': {'review_required': True}}}}
        result = build_queue({'events': events, 'watchlist': []}, {'sources': sources}, date(2026, 11, 5))
        self.assertEqual([(r['event_id'], r['source']) for r in result['queue']], [('live', shared)])
        self.assertEqual(result['active_transport_issues'], [])
        self.assertEqual(result['finished_skipped'], [{'source': 'https://example.org/past', 'event_ids': ['past']}])

    def test_mirror_is_skipped_only_while_identical_to_canonical(self):
        main, mirror = 'https://example.org/en-gb', 'https://example.org/en-in'
        event = {'id': 'e', 'url': main, 'sources': [mirror], 'milestones': []}
        sources = {main: {'status': 'checked', 'hash': 'h1', 'checks': {'e': {'review_required': True}}},
                   mirror: {'status': 'checked', 'hash': 'h1', 'lifecycle': 'duplicate_mirror', 'canonical': main,
                            'checks': {'e': {'review_required': True}}}}
        catalog = {'events': [event], 'watchlist': []}
        result = build_queue(catalog, {'sources': sources}, date(2026, 11, 5))
        self.assertEqual([r['source'] for r in result['queue']], [main])
        self.assertEqual(result['mirror_addresses'], [{'source': mirror, 'canonical': main}])
        sources[mirror]['hash'] = 'diverged'
        result = build_queue(catalog, {'sources': sources}, date(2026, 11, 5))
        self.assertEqual(sorted(r['source'] for r in result['queue']), sorted([main, mirror]))
        self.assertEqual(result['mirror_addresses'], [])

    def test_blocked_address_is_covered_only_while_alternative_is_readable(self):
        blocked, api = 'https://example.org/event/', 'https://example.org/wp-json/event/1'
        event = {'id': 'e', 'url': blocked, 'sources': [api], 'milestones': []}
        sources = {blocked: {'status': 'unverifiable', 'message': 'reset', 'lifecycle': 'covered_by_alternative', 'alternative': api},
                   api: {'status': 'checked', 'hash': 'h'}}
        catalog = {'events': [event], 'watchlist': []}
        result = build_queue(catalog, {'sources': sources}, date(2026, 11, 5))
        self.assertEqual(result['active_transport_issues'], [])
        self.assertEqual([c['source'] for c in result['covered_transport_issues']], [blocked])
        sources[api]['status'] = 'failed'
        result = build_queue(catalog, {'sources': sources}, date(2026, 11, 5))
        self.assertEqual(sorted(t['source'] for t in result['active_transport_issues']), sorted([blocked, api]))
        self.assertEqual(result['covered_transport_issues'], [])
