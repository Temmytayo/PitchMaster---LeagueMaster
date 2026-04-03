import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from './PageContainer';
import { api } from '../services/api';

export default function Footer() {
  const [content, setContent] = useState({});
  const [settings, setSettings] = useState({});

  useEffect(() => {
    api.getSiteContent().then((data) => {
      const map = {};
      data.forEach((x) => { map[x.key] = x.value; });
      setContent(map);
    }).catch(() => setContent({}));

    api.getSettings().then(setSettings).catch(() => setSettings({}));
  }, []);

  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-grid">
          <div>
            <h4>{settings.leagueName || 'Old Takers Soccer League'}</h4>
            <p>{content['footer.description'] || 'Houston’s adult 35+ competitive community league built for serious athletes.'}</p>
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
            <Link to="/admin">Admin Dashboards</Link>
          </div>
          <div>
            <h5>Contact</h5>
            <p>{content['footer.email'] || settings.publicEmail || 'league@oldtakerssoccer.com'}</p>
            <p>{content['footer.location'] || settings.publicLocation || 'Houston, Texas'}</p>
            <p>IG • FB • X</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {settings.leagueName || 'Old Takers Soccer League'}</span>
          <span>Privacy Policy • Terms</span>
        </div>
      </PageContainer>
    </footer>
  );
}
