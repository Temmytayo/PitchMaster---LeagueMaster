import React from 'react';
import { standings } from '../utils/sampleData';

export default function StandingsPage() {
  return (
    <section className="section">
      <h2>Standings</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Team</th><th>Played</th><th>Wins</th><th>Draws</th><th>Losses</th><th>GF</th><th>GA</th><th>GD</th><th>Points</th></tr></thead>
          <tbody>
            {standings.map((s) => <tr key={s.team}><td>{s.team}</td><td>{s.played}</td><td>{s.wins}</td><td>{s.draws}</td><td>{s.losses}</td><td>{s.gf}</td><td>{s.ga}</td><td>{s.gd}</td><td>{s.points}</td></tr>)}
          </tbody>
        </table>
      </div>
      <p className="callout">Tiebreakers: points, head-to-head, goal difference, goals for, discipline record.</p>
    </section>
  );
}
