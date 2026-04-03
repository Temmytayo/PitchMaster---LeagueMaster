import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminDashboardPage() {
  const [summary, setSummary] = useState(null);

  useEffect(() => { api.getAdminSummary().then(setSummary).catch(() => setSummary(null)); }, []);

  const cards = summary ? [
    ['Active Season', summary.activeSeason],
    ['Open Team Registrations', summary.openTeamRegistrations],
    ['Player Signups', summary.playerSignups],
    ['Upcoming Matches (7d)', summary.upcomingMatchesThisWeek],
    ['Unread Contact', summary.unreadContactMessages],
    ['Published News', summary.publishedNewsPosts],
    ['Active Sponsors', summary.activeSponsors]
  ] : [];

  return (
    <AdminShell title="Dashboard">
      <div className="card-grid">{cards.map(([k, v]) => <article key={k} className="card"><h3>{k}</h3><p>{v}</p></article>)}</div>
      <h3>Quick Actions</h3>
      <div className="actions-row">
        <Link className="btn" to="/admin/matches">Add Match</Link>
        <Link className="btn" to="/admin/news">Post News</Link>
        <Link className="btn" to="/admin/sponsors">Add Sponsor</Link>
        <Link className="btn" to="/admin/standings">Update Standings</Link>
        <Link className="btn" to="/admin/site-content">Edit Homepage Hero</Link>
      </div>
    </AdminShell>
  );
}
