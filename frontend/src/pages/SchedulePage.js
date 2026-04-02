import React, { useState } from 'react';
import { schedule } from '../utils/sampleData';

export default function SchedulePage() {
  const [division, setDivision] = useState('All');
  const filtered = schedule.filter((m) => division === 'All' || m.division === division);
  return (
    <section className="section">
      <h2>Season Schedule</h2>
      <select onChange={(e) => setDivision(e.target.value)}>
        <option>All</option>
        <option>Premier 35+</option>
        <option>Championship 35+</option>
      </select>
      <div className="card-grid">
        {filtered.map((m, i) => (
          <article className="card" key={i}><h3>Week {m.week}: {m.home} vs {m.away}</h3><p>{m.date} • {m.time} • {m.field}</p><p>{m.division} • {m.status}</p></article>
        ))}
      </div>
    </section>
  );
}
