import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminPlayersPage() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => { api.getPlayerRegistrations().then(setPlayers).catch(() => setPlayers([])); }, []);

  const filtered = players.filter((p) => `${p.firstName} ${p.lastName}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminShell title="Players / Free Agents">
      <input placeholder="Search players" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="table-wrap">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>DOB</th><th>Position</th><th>Free Agent</th><th>Status</th></tr></thead>
          <tbody>{filtered.map((p) => <tr key={p.id}><td>{p.firstName} {p.lastName}</td><td>{p.email}</td><td>{p.dateOfBirth ? new Date(p.dateOfBirth).toLocaleDateString() : ''}</td><td>{p.preferredPosition || '-'}</td><td>{p.teamSelection === 'Free Agent' ? 'Yes' : 'No'}</td><td>{p.status || 'New'}</td></tr>)}</tbody>
        </table>
      </div>
    </AdminShell>
  );
}
