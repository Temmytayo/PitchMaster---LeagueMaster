import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PageContainer from '../PageContainer';
import { auth } from '../../services/auth';

const links = [
  ['/admin/dashboard', 'Dashboard'],
  ['/admin/site-content', 'Site Content'],
  ['/admin/seasons', 'Seasons'],
  ['/admin/divisions', 'Divisions'],
  ['/admin/teams', 'Teams'],
  ['/admin/team-registrations', 'Team Registrations'],
  ['/admin/players', 'Players / Free Agents'],
  ['/admin/matches', 'Schedule & Matches'],
  ['/admin/standings', 'Standings'],
  ['/admin/rules', 'League Rules'],
  ['/admin/sponsors', 'Sponsors'],
  ['/admin/news', 'News & Updates'],
  ['/admin/contact-messages', 'Contact Messages'],
  ['/admin/settings', 'Settings']
];

export default function AdminShell({ title, children }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    navigate('/admin/login');
  };

  return (
    <section className="section-band light admin-shell">
      <aside className={`admin-sidebar ${open ? 'open' : ''}`}>
        <h3>Old Takers Admin</h3>
        {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
      </aside>
      <div className="admin-main">
        <PageContainer>
          <div className="admin-topbar">
            <button className="btn btn-muted" onClick={() => setOpen(!open)}>Menu</button>
            <div><strong>{auth.getUser() || 'Admin'}</strong> <button className="btn" onClick={logout}>Logout</button></div>
          </div>
          <h1 className="admin-title">{title}</h1>
          <div className="panel-card"><div className="panel-body">{children}</div></div>
        </PageContainer>
      </div>
    </section>
  );
}
