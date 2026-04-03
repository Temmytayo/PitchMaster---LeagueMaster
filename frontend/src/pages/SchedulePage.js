import React, { useEffect, useMemo, useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import MatchCard from '../components/MatchCard';
import { api } from '../services/api';

export default function SchedulePage() {
  const [division, setDivision] = useState('All');
  const [matches, setMatches] = useState([]);

  useEffect(() => { api.getMatches().then(setMatches).catch(() => setMatches([])); }, []);

  const mapped = matches.map((m) => ({
    ...m,
    division: m.divisionName || `Division ${m.divisionId}`,
    home: m.homeTeamName || `Team ${m.homeTeamId}`,
    away: m.awayTeamName || `Team ${m.awayTeamId}`,
    date: new Date(m.matchDateUtc).toLocaleDateString(),
    time: new Date(m.matchDateUtc).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    field: m.location,
    score: `${m.scoreHome ?? 0} - ${m.scoreAway ?? 0}`
  }));

  const upcoming = useMemo(() => mapped.filter((m) => (division === 'All' || m.division === division) && m.status !== 'Final'), [mapped, division]);
  const recent = useMemo(() => mapped.filter((m) => m.status === 'Final').slice(0, 5), [mapped]);

  return (
    <section className="section-band light">
      <PageContainer>
        <div className="page-top-row">
          <SectionHeader label="Match Center" title="League Schedule" subtitle="Upcoming matches and recent results across Houston divisions, with clear visibility for managers, players, and league staff planning weekly operations." />
          <div className="filters-row"><select value={division} onChange={(e) => setDivision(e.target.value)}><option>All</option>{[...new Set(mapped.map((m) => m.division))].map((d) => <option key={d}>{d}</option>)}</select></div>
        </div>

        <div className="panel-card"><div className="panel-head"><h3>Upcoming Matches</h3></div><div className="panel-body stack-md">{upcoming.map((m, i) => <MatchCard key={i} match={m} />)}</div></div>
        <div className="panel-card"><div className="panel-head"><h3>Recent Results</h3></div><div className="panel-body stack-md">{recent.map((m, i) => <MatchCard key={i} match={m} result />)}</div></div>
      </PageContainer>
    </section>
  );
}
