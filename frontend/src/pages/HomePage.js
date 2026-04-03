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
        description="Houston’s premier adult 35+ competitive 11v11 soccer league built for players who still train hard, compete with intent, and value organized matchday standards. Old Takers delivers premium field access, certified officiating, reliable scheduling, clear standings, and a strong community culture where serious athletes can keep the game at a high level season after season."
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
            <li>Competitive adult 35+ match environment with clear league standards.</li>
            <li>Organized schedule, weekly communication, standings integrity, and referee consistency.</li>
            <li>Houston-wide community partnerships, sponsor support, and long-term league growth planning.</li>
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
          <SectionHeader label="Latest Action" title="Matchweek Snapshot" subtitle="Upcoming fixtures and current division leaders, with a clear view of who is in form and where the table battle is tightening." />
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
