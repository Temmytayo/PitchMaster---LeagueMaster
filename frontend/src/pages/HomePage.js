import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { highlights, sponsors } from '../utils/sampleData';

export default function HomePage() {
  return (
    <>
      <section className="hero sports-hero">
        <div>
          <p className="kicker">Houston Adult 35+ Competitive Community League</p>
          <h1>Old Takers Soccer League</h1>
          <p>Organized, credible, and community-focused match play for over-35 athletes across Houston.</p>
          <div className="cta-row">
            <Link to="/team-registration" className="btn">Register a Team</Link>
            <Link to="/player-registration" className="btn">Player Sign-Up</Link>
            <Link to="/schedule" className="btn btn-outline">View Schedule</Link>
            <Link to="/standings" className="btn btn-outline">View Standings</Link>
          </div>
        </div>
        <div className="hero-stat-grid">
          <article><strong>10+</strong><span>Houston Venues</span></article>
          <article><strong>35+</strong><span>Age Verified</span></article>
          <article><strong>2</strong><span>Competitive Divisions</span></article>
          <article><strong>1</strong><span>Community Mission</span></article>
        </div>
      </section>

      <Section title="Mission Statement">
        <p>Our mission is to grow the Houston area soccer community through high-level over-35 competition, strong sportsmanship, and fellowship.</p>
      </Section>

      <Section title="Season Highlights">
        <ul>{highlights.map((h) => <li key={h}>{h}</li>)}</ul>
      </Section>

      <Section title="Featured Sponsors">
        <div className="card-grid">{sponsors.map((s) => <div key={s.name} className="card"><strong>{s.name}</strong><p>{s.tier} Sponsor</p></div>)}</div>
      </Section>

      <Section title="Latest Updates">
        <div className="card-grid">
          <article className="card"><h3>Team Deadline</h3><p>Team entries close May 20.</p></article>
          <article className="card"><h3>Season Kickoff</h3><p>First matches begin June 2.</p></article>
          <article className="card"><h3>Manager Briefing</h3><p>Preseason logistics and referee standards shared online.</p></article>
        </div>
      </Section>
    </>
  );
}
