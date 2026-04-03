import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    Promise.all([
      api.getTeams(), api.getPlayers(), api.getTeamRegistrations(), api.getPlayerRegistrations(), api.getMatches(), api.getStandings(), api.getNews(), api.getSponsors(), api.getContactMessages()
    ]).then(([teams, players, tr, pr, matches, standings, news, sponsors, contacts]) => {
      setStats({ teams: teams.length, players: players.length, registrations: tr.length + pr.length, matches: matches.length, standings: standings.length, news: news.length, sponsors: sponsors.length, contacts: contacts.length });
    }).catch(() => setStats({}));
  }, []);

  return (
    <AdminShell title="Dashboard">
      <div className="card-grid">
        {Object.entries(stats).map(([k, v]) => <article key={k} className="card"><h3>{k.toUpperCase()}</h3><p>{v}</p></article>)}
      </div>
    </AdminShell>
  );
}
