import React from 'react';
import { NavLink } from 'react-router-dom';
import PageContainer from '../PageContainer';

const links = [
  ['/admin', 'Dashboard'],
  ['/admin/teams', 'Teams'],
  ['/admin/players', 'Players'],
  ['/admin/registrations', 'Registrations'],
  ['/admin/matches', 'Schedule'],
  ['/admin/standings', 'Standings'],
  ['/admin/news', 'News'],
  ['/admin/sponsors', 'Sponsors'],
  ['/admin/contacts', 'Contacts']
];

export default function AdminShell({ title, children }) {
  return (
    <section className="section-band light">
      <PageContainer>
        <h1 className="admin-title">Admin • {title}</h1>
        <div className="admin-nav">{links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</div>
        <div className="panel-card"><div className="panel-body">{children}</div></div>
      </PageContainer>
    </section>
  );
}
