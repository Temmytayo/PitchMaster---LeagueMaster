import React from 'react';

const sections = [
  ['eligibility', 'Eligibility & Age Requirements', 'Players must be 35+ before season start. Houston area and surrounding regions welcome. Registration and proof of identity required.'],
  ['rosters', 'Registration, Rosters & Player Passes', 'Roster lock date applies. Team managers submit rosters and player pass/ID placeholders before kickoff.'],
  ['match', 'Match Format', '11v11, 40-minute halves, FIFA-based laws with league adjustments, and regulated substitutions.'],
  ['discipline', 'Discipline & Misconduct', 'Yellow/red cards tracked. Referee abuse, fighting, and abusive language result in suspensions and possible expulsion.'],
  ['forfeits', 'Forfeits & Late Arrival Policy', 'Minimum 7 players required at kickoff. 15-minute grace period. Forfeit score and fee penalties apply.'],
  ['weather', 'Inclement Weather (Houston Policy)', 'Heat, lightning, and heavy rain protocols apply. Lightning delay minimum 30 minutes after last strike.'],
  ['appeals', 'Protests & Appeals', 'Formal protests filed within 48 hours with supporting evidence and fee placeholder.'],
  ['conduct', 'Code of Conduct', 'Managers, players, and spectators must uphold respectful behavior and league community standards.'],
  ['authority', 'League Authority & Disclaimers', 'League authority is final on competition matters. Injury disclaimer, waiver reference, and rule amendment language included.']
];

export default function RulesPage() {
  return (
    <div className="rules-layout">
      <aside>
        <h3>Rule Navigation</h3>
        {sections.map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}
      </aside>
      <div>
        <div className="callout">Printable league rules layout enabled from browser print mode.</div>
        {sections.map(([id, title, content]) => (
          <section key={id} id={id} className="section">
            <h2>{title}</h2>
            <p>{content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
