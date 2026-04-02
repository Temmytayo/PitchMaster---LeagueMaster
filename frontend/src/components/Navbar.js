import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PageContainer from './PageContainer';

const links = [
  ['/', 'Home'],
  ['/schedule', 'Schedule'],
  ['/standings', 'Standings'],
  ['/rules', 'League Rules'],
  ['/team-registration', 'Register Team']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <PageContainer>
        <div className="navbar-inner">
          <Link to="/" className="brand-lockup">
            <div className="brand-icon">🏆</div>
            <div>
              <strong>OLD TAKERS 35+</strong>
              <small>COMPETITIVE SOCCER LEAGUE</small>
            </div>
          </Link>

          <button className="mobile-toggle" onClick={() => setOpen(!open)}>☰</button>

          <nav className={`main-nav ${open ? 'open' : ''}`}>
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {label}
              </NavLink>
            ))}
            <NavLink to="/player-registration" className="btn nav-cta" onClick={() => setOpen(false)}>Player Sign Up</NavLink>
          </nav>
        </div>
      </PageContainer>
    </header>
  );
}
