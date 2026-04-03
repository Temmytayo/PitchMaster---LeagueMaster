import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import StandingsTable from '../components/StandingsTable';
import { standings } from '../utils/sampleData';

export default function StandingsPage() {
  const [division, setDivision] = useState('Premier 35+');

  return (
    <section className="section-band light">
      <PageContainer>
        <SectionHeader
          centered
          label="Competition Table"
          title="League Table"
          subtitle="Track position, form, and points across each Old Takers division with a transparent league table format that is easy to review on desktop and mobile."
        />

        <div className="tabs-row">
          {['Premier 35+', 'Championship 35+', 'Masters 40+'].map((tab) => (
            <button key={tab} className={`tab-pill ${division === tab ? 'active' : ''}`} onClick={() => setDivision(tab)}>{tab}</button>
          ))}
        </div>

        <StandingsTable rows={standings} title={`${division} Standings`} season="Fall 2026" />
      </PageContainer>
    </section>
  );
}
