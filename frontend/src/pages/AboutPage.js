import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';

export default function AboutPage() {
  return (
    <section className="section-band light">
      <PageContainer>
        <SectionHeader label="League Overview" title="About Old Takers" subtitle="Old Takers Soccer League is a Houston-area adult 35+ competitive community built for players and managers who want a credible, organized, and high-effort league experience." />
        <div className="section">
          <p>Our league focuses on structured competition, reliable scheduling, fair officiating, and a strong code of respect for teammates, opponents, and referees. We serve players who still value the grind, the tactical side of the game, and the camaraderie that comes from competing through a full season with purpose.</p>
          <p>Old Takers is designed for the Houston soccer community: neighborhood clubs, returning veterans, free agents looking for the right fit, and managers building serious squads. We believe competition and community are not opposites. The strongest leagues cultivate both.</p>
          <p>Core values: sportsmanship, fitness, competition, fellowship, and local community impact through sponsors, partnerships, and sustainable season-to-season league growth.</p>
        </div>
      </PageContainer>
    </section>
  );
}
