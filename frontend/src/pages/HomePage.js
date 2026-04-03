import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import StatStrip from '../components/StatStrip';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import MatchCard from '../components/MatchCard';
import StandingsTable from '../components/StandingsTable';
import { api } from '../services/api';

export default function HomePage() {
  const [content, setContent] = useState({});
  const [schedule, setSchedule] = useState([]);
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    api.getSiteContent().then((data) => {
      const map = {};
      data.forEach((x) => { map[x.key] = x.value; });
      setContent(map);
    }).catch(() => setContent({}));

    api.getMatches().then(setSchedule).catch(() => setSchedule([]));
    api.getStandings().then(setStandings).catch(() => setStandings([]));
  }, []);

  const stats = useMemo(() => ([
    { icon: '🏟️', value: '3', label: 'Divisions' },
    { icon: '👥', value: '24+', label: 'Active Teams' },
    { icon: '📅', value: '10', label: 'Game Season' },
    { icon: '🧑‍⚖️', value: 'USSF', label: 'Certified Refs' }
  ]), []);

  return (
    <>
      <PageHero
        label={content['hero.label'] || 'FALL 2026 REGISTRATION OPEN'}
        title={content['hero.title1'] || 'STILL GOT IT?'}
        emphasis={content['hero.title2'] || 'PROVE IT.'}
        description={content['hero.text'] || 'Houston’s premier adult 35+ competitive 11v11 soccer league built for players who still train hard and compete with intent.'}
        actions={
          <>
            <Link className="btn" to={content['hero.primaryCtaLink'] || '/team-registration'}>{content['hero.primaryCtaText'] || 'REGISTER YOUR TEAM'}</Link>
            <Link className="btn btn-secondary" to={content['hero.secondaryCtaLink'] || '/player-registration'}>{content['hero.secondaryCtaText'] || 'JOIN AS FREE AGENT'}</Link>
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

      <StatStrip items={stats} />

      <section className="section-band light">
        <PageContainer>
          <SectionHeader label="Latest Action" title="Matchweek Snapshot" subtitle="Upcoming fixtures and current division leaders, with a clear view of who is in form and where the table battle is tightening." />
          <div className="latest-grid">
            <div className="panel-card">
              <div className="panel-head"><h3>Upcoming Matches</h3></div>
              <div className="panel-body">
                {schedule.slice(0, 2).map((m, i) => <MatchCard key={i} match={{ ...m, home: m.homeTeamName || `Team ${m.homeTeamId}`, away: m.awayTeamName || `Team ${m.awayTeamId}`, division: m.divisionName || 'Division', date: new Date(m.matchDateUtc).toLocaleDateString(), field: m.location }} />)}
                <Link className="text-link" to="/schedule">View Full Schedule →</Link>
              </div>
            </div>
            <div className="panel-card">
              <div className="panel-head"><h3>Division Leaders</h3></div>
              <div className="panel-body">
                <StandingsTable rows={standings.slice(0, 4).map((s) => ({ ...s, team: s.teamName || `Team ${s.teamId}`, gf: s.goalsFor, ga: s.goalsAgainst }))} title="Leaders" season="Summer 2026" />
                <Link className="text-link" to="/standings">Full Standings →</Link>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
