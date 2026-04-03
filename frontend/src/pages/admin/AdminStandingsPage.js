import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminStandingsPage() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({ teamId: 1, played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, points: 0 });

  const load = () => api.getStandings().then(setRows).catch(() => setRows([]));
  useEffect(load, []);

  const submit = async (e) => {
    e.preventDefault();
    await api.createStanding(form);
    load();
  };

  return (
    <AdminShell title="Standings">
      <form className="form-grid" onSubmit={submit}>
        {Object.keys(form).map((k) => <input key={k} type="number" placeholder={k} value={form[k]} onChange={(e) => setForm({ ...form, [k]: Number(e.target.value) })} />)}
        <button className="btn" type="submit">Add Standing Row</button>
      </form>
      <div className="table-wrap"><table><thead><tr><th>TeamId</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>Pts</th></tr></thead><tbody>{rows.map((r) => <tr key={r.id}><td>{r.teamId}</td><td>{r.played}</td><td>{r.wins}</td><td>{r.draws}</td><td>{r.losses}</td><td>{r.goalsFor}</td><td>{r.goalsAgainst}</td><td>{r.points}</td></tr>)}</tbody></table></div>
    </AdminShell>
  );
}
