import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminPlayersPage() {
  const [players, setPlayers] = useState([]);
  useEffect(() => { api.getPlayers().then(setPlayers).catch(() => setPlayers([])); }, []);
  return <AdminShell title="Players"><ul>{players.map((p) => <li key={p.id}>{p.firstName} {p.lastName}</li>)}</ul></AdminShell>;
}
