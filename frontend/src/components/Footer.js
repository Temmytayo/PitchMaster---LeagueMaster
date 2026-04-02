import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from './PageContainer';

export default function Footer() {
  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-grid">
          <div>
            <h4>Old Takers Soccer League</h4>
            <p>Houston’s adult 35+ competitive community league built for serious athletes, respectful play, and local fellowship.</p>
          </div>
          <div>
            <h5>League Info</h5>
            <Link to="/about">About</Link>
            <Link to="/rules">League Rules</Link>
            <Link to="/news">News</Link>
          </div>
          <div>
            <h5>Action</h5>
            <Link to="/team-registration">Register Team</Link>
            <Link to="/player-registration">Player Sign Up</Link>
            <Link to="/standings">Standings</Link>
          </div>
          <div>
            <h5>Contact</h5>
            <p>league@oldtakerssoccer.com</p>
            <p>Houston, Texas</p>
            <p>IG • FB • X</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Old Takers Soccer League</span>
          <span>Privacy Policy • Terms</span>
        </div>
      </PageContainer>
    </footer>
  );
}
