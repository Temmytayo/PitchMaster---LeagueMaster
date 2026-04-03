import React, { useEffect, useMemo, useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import StandingsTable from '../components/StandingsTable';
import { api } from '../services/api';

export default function StandingsPage() {
  const [division, setDivision] = useState('All');
  const [rows, setRows] = useState([]);

  useEffect(() => { api.getStandings().then(setRows).catch(() => setRows([])); }, []);
  const divisions = useMemo(() => ['All', ...new Set(rows.map((r) => r.divisionName || `Division ${r.divisionId || ''}`))], [rows]);
  const filtered = useMemo(() => rows.filter((r) => division === 'All' || (r.divisionName || `Division ${r.divisionId || ''}`) === division).map((r) => ({ ...r, team: r.teamName || `Team ${r.teamId}`, gf: r.goalsFor, ga: r.goalsAgainst })), [rows, division]);

  return (
    <section className="section-band light">
      <PageContainer>
        <SectionHeader centered label="Competition Table" title="League Table" subtitle="Track position, form, and points across each Old Takers division with a transparent league table format that is easy to review on desktop and mobile." />
        <div className="tabs-row">{divisions.map((tab) => <button key={tab} className={`tab-pill ${division === tab ? 'active' : ''}`} onClick={() => setDivision(tab)}>{tab}</button>)}</div>
        <StandingsTable rows={filtered} title={`${division} Standings`} season="Fall 2026" />
      </PageContainer>
    </section>
  );
}
