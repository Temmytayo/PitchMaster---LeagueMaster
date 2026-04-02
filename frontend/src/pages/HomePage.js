import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import StatStrip from '../components/StatStrip';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import MatchCard from '../components/MatchCard';
import StandingsTable from '../components/StandingsTable';
import { schedule, standings } from '../utils/sampleData';

export default function HomePage() {
  return (
    <>
      <PageHero
        label="Fall 2026 Registration Open"
        title="Still Got It?"
        emphasis="Prove It."
        description="Houston’s premium adult over 35 competitive soccer league. Structured schedule. Verified divisions. Real matchday intensity with community respect."
        actions={
          <>
            <Link className="btn" to="/team-registration">Register Your Team</Link>
            <Link className="btn btn-secondary" to="/player-registration">Join as Free Agent</Link>
          </>
        }
      >
        <div className="hero-panel">
          <h3>Why Old Takers?</h3>
          <ul>
            <li>Competitive adult 35+ match environment</li>
            <li>Organized schedule, standings, and officiating</li>
            <li>Houston community partnerships and sponsors</li>
          </ul>
        </div>
      </PageHero>

      <StatStrip items={[
        { icon: '🏟️', value: '3', label: 'Divisions' },
        { icon: '👥', value: '24+', label: 'Active Teams' },
        { icon: '📅', value: '10', label: 'Game Season' },
        { icon: '🧑‍⚖️', value: 'USSF', label: 'Certified Refs' }
      ]} />

      <section className="section-band light">
        <PageContainer>
          <SectionHeader label="Latest Action" title="Matchweek Snapshot" subtitle="Upcoming fixtures and current division leaders." />
          <div className="latest-grid">
            <div className="panel-card">
              <div className="panel-head"><h3>Upcoming Matches</h3></div>
              <div className="panel-body">
                {schedule.slice(0, 2).map((m, i) => <MatchCard key={i} match={m} />)}
                <Link className="text-link" to="/schedule">View Full Schedule →</Link>
              </div>
            </div>
            <div className="panel-card">
              <div className="panel-head"><h3>Division Leaders</h3></div>
              <div className="panel-body">
                <StandingsTable rows={standings.slice(0, 4)} title="Leaders" season="Summer 2026" />
                <Link className="text-link" to="/standings">Full Standings →</Link>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
