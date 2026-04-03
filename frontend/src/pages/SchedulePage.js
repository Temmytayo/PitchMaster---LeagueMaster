import React, { useMemo, useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import MatchCard from '../components/MatchCard';
import { schedule } from '../utils/sampleData';

const recent = [
  { date: 'APR 01', time: 'FT', division: 'Premier 35+', home: 'Bayou United 35+', away: 'Heights Veterans FC', score: '2 - 1', field: 'Houston Sports Park' },
  { date: 'MAR 30', time: 'FT', division: 'Championship 35+', home: 'Katy Strikers 35', away: 'Pearland Athletic 35+', score: '1 - 1', field: 'Bear Creek Complex' }
];

export default function SchedulePage() {
  const [division, setDivision] = useState('All');
  const filtered = useMemo(() => schedule.filter((m) => division === 'All' || m.division === division), [division]);

  return (
    <section className="section-band light">
      <PageContainer>
        <div className="page-top-row">
          <SectionHeader label="Match Center" title="League Schedule" subtitle="Upcoming matches and recent results across Houston divisions, with clear visibility for managers, players, and league staff planning weekly operations." />
          <div className="filters-row">
            <select value={division} onChange={(e) => setDivision(e.target.value)}>
              <option>All</option><option>Premier 35+</option><option>Championship 35+</option>
            </select>
          </div>
        </div>

        <div className="panel-card">
          <div className="panel-head"><h3>Upcoming Matches</h3></div>
          <div className="panel-body stack-md">
            {filtered.map((m, i) => <MatchCard key={i} match={m} />)}
          </div>
        </div>

        <div className="panel-card">
          <div className="panel-head"><h3>Recent Results</h3></div>
          <div className="panel-body stack-md">
            {recent.map((m, i) => <MatchCard key={i} match={m} result />)}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
