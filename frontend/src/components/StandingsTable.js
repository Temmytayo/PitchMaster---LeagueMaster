import React from 'react';

export default function StandingsTable({ rows, title = 'Division Standings', season = 'Fall 2026' }) {
  return (
    <div className="table-card">
      <div className="table-card-head">
        <h3>🏆 {title}</h3>
        <span>{season}</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Pos</th><th>Club</th><th>GP</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>PTS</th></tr></thead>
          <tbody>
            {rows.map((s, i) => {
              const gd = s.gd ?? ((s.gf ?? s.goalsFor) - (s.ga ?? s.goalsAgainst));
              return (
                <tr key={s.team || s.club || i} className={i === 0 ? 'leader-row' : ''}>
                  <td>{i + 1}</td><td>{s.team || s.club}</td><td>{s.played || s.gp}</td><td>{s.wins || s.w}</td><td>{s.draws || s.d}</td><td>{s.losses || s.l}</td><td>{s.gf ?? s.goalsFor}</td><td>{s.ga ?? s.goalsAgainst}</td><td>{gd}</td><td><strong>{s.points || s.pts}</strong></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
