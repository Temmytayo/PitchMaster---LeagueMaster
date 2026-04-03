import React from 'react';

export default function MatchCard({ match, result = false }) {
  return (
    <article className="match-card">
      <div className="match-date">
        <strong>{match.dateLabel || match.date || 'TBD'}</strong>
        <span>{match.time || 'TBD'}</span>
      </div>
      <div className="match-main">
        <p className="division-chip">{match.division || 'Division'}</p>
        <h3>{match.home} <span className="vs-badge">VS</span> {match.away}</h3>
        {result && <p className="score-badge">{match.score || '0 - 0'}</p>}
      </div>
      <div className="match-side">
        <p>{match.field || match.location}</p>
        <a href="/schedule">Details</a>
      </div>
    </article>
  );
}
