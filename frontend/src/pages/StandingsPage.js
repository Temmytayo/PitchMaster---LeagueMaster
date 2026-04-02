import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { standings as fallback } from '../utils/sampleData';

export default function StandingsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getStandings().then((data) => setRows(data || [])).catch(() => setRows(fallback)).finally(() => setLoading(false));
  }, []);

  return (
    <section className="section">
      <h2>Standings</h2>
      {loading && <p>Loading standings...</p>}
      {!loading && rows.length === 0 && <p className="empty-state">No standings published yet.</p>}
      {!!rows.length && <div className="table-wrap">
        <table>
          <thead><tr><th>Team</th><th>Played</th><th>Wins</th><th>Draws</th><th>Losses</th><th>GF</th><th>GA</th><th>GD</th><th>Points</th></tr></thead>
          <tbody>
            {rows.map((s, idx) => {
              const gd = (s.gd ?? s.goalDifference ?? ((s.goalsFor ?? s.gf) - (s.goalsAgainst ?? s.ga)));
              return <tr key={idx}><td>{s.team || s.teamName || `Team ${idx + 1}`}</td><td>{s.played}</td><td>{s.wins}</td><td>{s.draws}</td><td>{s.losses}</td><td>{s.gf ?? s.goalsFor}</td><td>{s.ga ?? s.goalsAgainst}</td><td>{gd}</td><td>{s.points}</td></tr>;
            })}
          </tbody>
        </table>
      </div>}
      <p className="callout">Tiebreakers: points, head-to-head, goal difference, goals for, fair play.</p>
    </section>
  );
}
