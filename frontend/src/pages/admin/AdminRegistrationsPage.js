import React, { useEffect, useMemo, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

const statuses = ['New', 'Under Review', 'Approved', 'Waitlisted', 'Rejected', 'Deposit Pending', 'Confirmed'];

export default function AdminRegistrationsPage() {
  const [teamRegs, setTeamRegs] = useState([]);
  const [playerRegs, setPlayerRegs] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    api.getTeamRegistrations().then(setTeamRegs).catch(() => setTeamRegs([]));
    api.getPlayerRegistrations().then(setPlayerRegs).catch(() => setPlayerRegs([]));
  }, []);

  const filtered = useMemo(() => teamRegs.filter((r) => filter === 'All' || (r.status || 'New') === filter), [teamRegs, filter]);

  return (
    <AdminShell title="Team Registrations">
      <div className="actions-row"><select value={filter} onChange={(e) => setFilter(e.target.value)}><option>All</option>{statuses.map((s) => <option key={s}>{s}</option>)}</select></div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Team</th><th>Manager</th><th>Email</th><th>Division Pref</th><th>Status</th></tr></thead>
          <tbody>{filtered.map((r) => <tr key={r.id}><td>{r.teamName}</td><td>{r.managerName}</td><td>{r.managerEmail}</td><td>{r.divisionPreference}</td><td>{r.status || 'New'}</td></tr>)}</tbody>
        </table>
      </div>
      <h3>Player / Free Agent Signups</h3>
      <ul>{playerRegs.map((r) => <li key={r.id}>{r.firstName} {r.lastName} • {r.teamSelection}</li>)}</ul>
    </AdminShell>
  );
}
