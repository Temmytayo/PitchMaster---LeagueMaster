import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminTeamsPage() {
  const [teams, setTeams] = useState([]);
  useEffect(() => { api.getTeams().then(setTeams).catch(() => setTeams([])); }, []);
  return <AdminShell title="Teams"><ul>{teams.map((t) => <li key={t.id}>{t.name}</li>)}</ul></AdminShell>;
}
