import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/rules', 'Rules'],
  ['/team-registration', 'Team Registration'],
  ['/player-registration', 'Player Registration'],
  ['/schedule', 'Schedule'],
  ['/standings', 'Standings'],
  ['/sponsors', 'Sponsors'],
  ['/news', 'News'],
  ['/contact', 'Contact']
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">⚽ Old Takers Soccer League</div>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
