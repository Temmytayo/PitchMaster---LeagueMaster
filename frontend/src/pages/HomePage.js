import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { highlights, sponsors } from '../utils/sampleData';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Old Takers Soccer League</h1>
        <p>Adult over 35 league • Competitive • Houston area • Community</p>
        <div className="cta-row">
          <Link to="/team-registration" className="btn">Register a Team</Link>
          <Link to="/player-registration" className="btn">Player Sign-Up</Link>
          <Link to="/schedule" className="btn btn-outline">View Schedule</Link>
          <Link to="/standings" className="btn btn-outline">View Standings</Link>
        </div>
      </section>
      <Section title="Mission & Season Overview">
        <p>We deliver a credible, organized, community-focused, and competitive soccer experience for Houston-area adult athletes 35+.</p>
        <ul>{highlights.map((h) => <li key={h}>{h}</li>)}</ul>
      </Section>
      <Section title="Why Join">
        <div className="card-grid">
          <article className="card">Competitive but respectful match play.</article>
          <article className="card">Fitness, fellowship, and team camaraderie.</article>
          <article className="card">Reliable scheduling, standings, and league communication.</article>
        </div>
      </Section>
      <Section title="Featured Sponsors">
        <div className="card-grid">{sponsors.map((s) => <div key={s.name} className="card"><strong>{s.name}</strong><p>{s.tier} Sponsor</p></div>)}</div>
      </Section>
      <Section title="Latest News & Contact">
        <p>Registration deadline: May 20. Season opens June 2. Questions? Visit Contact.</p>
      </Section>
    </>
  );
}
