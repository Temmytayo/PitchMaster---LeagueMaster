import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminMatchesPage() {
  const [matches, setMatches] = useState([]);
  const [form, setForm] = useState({ seasonId: 1, divisionId: 1, homeTeamId: 1, awayTeamId: 2, matchDateUtc: '', location: '', status: 'Scheduled' });

  const load = () => api.getMatches().then(setMatches).catch(() => setMatches([]));
  useEffect(load, []);

  const submit = async (e) => {
    e.preventDefault();
    await api.createMatch(form);
    setForm({ ...form, location: '', matchDateUtc: '' });
    load();
  };

  return (
    <AdminShell title="Schedule & Matches">
      <form className="form-grid" onSubmit={submit}>
        <input type="number" placeholder="Season Id" value={form.seasonId} onChange={(e) => setForm({ ...form, seasonId: Number(e.target.value) })} />
        <input type="number" placeholder="Division Id" value={form.divisionId} onChange={(e) => setForm({ ...form, divisionId: Number(e.target.value) })} />
        <input type="number" placeholder="Home Team Id" value={form.homeTeamId} onChange={(e) => setForm({ ...form, homeTeamId: Number(e.target.value) })} />
        <input type="number" placeholder="Away Team Id" value={form.awayTeamId} onChange={(e) => setForm({ ...form, awayTeamId: Number(e.target.value) })} />
        <input type="datetime-local" value={form.matchDateUtc} onChange={(e) => setForm({ ...form, matchDateUtc: e.target.value })} />
        <input placeholder="Venue" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}><option>Scheduled</option><option>Final</option><option>Postponed</option><option>Canceled</option><option>Forfeit</option></select>
        <button className="btn" type="submit">Add Match</button>
      </form>
      <div className="table-wrap"><table><thead><tr><th>Date</th><th>Location</th><th>Status</th></tr></thead><tbody>{matches.map((m) => <tr key={m.id}><td>{new Date(m.matchDateUtc).toLocaleString()}</td><td>{m.location}</td><td>{m.status}</td></tr>)}</tbody></table></div>
    </AdminShell>
  );
}
