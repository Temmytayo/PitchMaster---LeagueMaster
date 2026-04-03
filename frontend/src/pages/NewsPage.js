import React from 'react';

const posts = [
  { title: 'Registration Window Open', body: 'Team and player registration closes May 20.' },
  { title: 'Season Kickoff Announced', body: 'Opening week starts June 2 across Houston venues.' },
  { title: 'Sponsor Spotlight', body: 'Bayou Sports Medicine expands injury-prevention support.' }
];

export default function NewsPage() {
  return (
    <section className="section">
      <h2>News & Updates</h2>
      <div className="card-grid">{posts.map((p) => <article key={p.title} className="card"><h3>{p.title}</h3><p>{p.body}</p></article>)}</div>
    </section>
  );
}
