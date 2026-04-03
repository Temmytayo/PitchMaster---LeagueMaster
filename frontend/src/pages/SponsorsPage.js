import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import { api } from '../services/api';

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => { api.getSponsors().then(setSponsors).catch(() => setSponsors([])); }, []);

  return (
    <section className="section-band light">
      <PageContainer>
        <SectionHeader label="Partners" title="Sponsors" subtitle="Community and business partners supporting Houston 35+ league competition." />
        <div className="card-grid">{sponsors.map((s) => <article key={s.id} className="card"><h3>{s.name}</h3><p>{s.tier}</p><p>{s.contactEmail}</p></article>)}</div>
      </PageContainer>
    </section>
  );
}
