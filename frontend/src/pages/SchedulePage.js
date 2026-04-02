import React, { useEffect, useMemo, useState } from 'react';
import { api } from '../services/api';
import { schedule as fallback } from '../utils/sampleData';

export default function SchedulePage() {
  const [division, setDivision] = useState('All');
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getMatches().then((data) => setMatches(data || [])).catch(() => setMatches(fallback)).finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => matches.filter((m) => division === 'All' || m.division === division || m.divisionName === division), [matches, division]);

  return (
    <section className="section">
      <h2>Season Schedule</h2>
      <select onChange={(e) => setDivision(e.target.value)} value={division}>
        <option>All</option><option>Premier 35+</option><option>Championship 35+</option>
      </select>
      {loading && <p>Loading schedule...</p>}
      {!loading && filtered.length === 0 && <p className="empty-state">No matches available.</p>}
      <div className="card-grid">
        {filtered.map((m, i) => (
          <article className="card" key={i}>
            <h3>{m.home || m.homeTeamName || 'Home'} vs {m.away || m.awayTeamName || 'Away'}</h3>
            <p>{m.date || new Date(m.matchDateUtc).toLocaleDateString()} • {m.time || 'TBD'} • {m.field || m.location}</p>
            <p>{m.division || m.divisionName || 'Division TBD'} • {m.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
