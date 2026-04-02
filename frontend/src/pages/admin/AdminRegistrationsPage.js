import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminRegistrationsPage() {
  const [teamRegs, setTeamRegs] = useState([]);
  const [playerRegs, setPlayerRegs] = useState([]);
  useEffect(() => {
    api.getTeamRegistrations().then(setTeamRegs).catch(() => setTeamRegs([]));
    api.getPlayerRegistrations().then(setPlayerRegs).catch(() => setPlayerRegs([]));
  }, []);
  return (
    <AdminShell title="Registrations">
      <h3>Team Registrations</h3><ul>{teamRegs.map((r) => <li key={r.id}>{r.teamName} - {r.managerName}</li>)}</ul>
      <h3>Player Registrations</h3><ul>{playerRegs.map((r) => <li key={r.id}>{r.firstName} {r.lastName}</li>)}</ul>
    </AdminShell>
  );
}
