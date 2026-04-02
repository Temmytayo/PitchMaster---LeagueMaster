import React, { useState } from 'react';
import { sponsors } from '../utils/sampleData';

export default function SponsorsPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section">
      <h2>Sponsors & Community Partners</h2>
      <div className="card-grid">{sponsors.map((s) => <article key={s.name} className="card"><h3>{s.name}</h3><p>{s.tier} Tier</p></article>)}</div>
      <h3>Become a Sponsor</h3>
      <p>Support Houston-area community soccer and connect with engaged adult athletes and families.</p>
      <button className="btn" onClick={() => setSent(true)}>Send Sponsor Inquiry (Placeholder)</button>
      {sent && <p>Inquiry submitted.</p>}
    </section>
  );
}
