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
