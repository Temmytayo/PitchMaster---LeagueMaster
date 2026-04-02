import React from 'react';

const cards = ['Team Registrations', 'Player Registrations', 'Teams', 'Players', 'Matches', 'Standings', 'Sponsors', 'News', 'Contact Messages'];

export default function AdminDashboardPage() {
  return (
    <section className="section">
      <h2>Admin Dashboard</h2>
      <p>Admin-ready structure for league operations and future authentication.</p>
      <div className="card-grid">{cards.map((c) => <article className="card" key={c}><h3>{c}</h3><p>Manage records (placeholder CRUD).</p></article>)}</div>
    </section>
  );
}
