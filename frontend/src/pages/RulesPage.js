import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import RulesAccordion from '../components/RulesAccordion';

const ruleItems = [
  { title: 'Age Eligibility & Verification', content: 'All participants must be 35+ by season start. League ID verification is required before first appearance.' },
  { title: 'Rosters & Player Registration', content: 'Managers submit active rosters by deadline. Late adds require approval and pass validation.' },
  { title: 'Match Format & Equipment', content: '11v11 format, 40-minute halves, proper shin guards, matching kits, and referee authority are mandatory.' },
  { title: 'Substitutions', content: 'Rolling substitutions allowed with referee acknowledgment from technical area.' },
  { title: 'Discipline & Suspensions', content: 'Card accumulation, straight reds, and referee abuse trigger suspensions and potential review board action.' },
  { title: 'Forfeits, Reschedules & Weather', content: '7-player minimum, 15-minute grace period, lightning delay protocol, and league-managed reschedule process.' },
  { title: 'Code of Conduct', content: 'Players, managers, and spectators must maintain competitive respect and community standards.' },
  { title: 'League Authority & Protests', content: 'Formal protests submitted within 48 hours. League office decisions are final after review.' }
];

export default function RulesPage() {
  return (
    <section className="section-band light">
      <PageContainer>
        <div className="page-top-row">
          <SectionHeader label="Official Document" title="League Rules & Policies" subtitle="Clear standards for fair competition, player safety, referee respect, and community accountability across the Houston area." />
          <button className="btn">Download PDF</button>
        </div>
        <div className="panel-card">
          <div className="panel-head"><h3>General Regulations</h3></div>
          <div className="panel-body"><RulesAccordion items={ruleItems} /></div>
        </div>
      </PageContainer>
    </section>
  );
}
