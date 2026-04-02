import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminStandingsPage() {
  const [rows, setRows] = useState([]);
  useEffect(() => { api.getStandings().then(setRows).catch(() => setRows([])); }, []);
  return <AdminShell title="Standings Management"><ul>{rows.map((r) => <li key={r.id}>Team #{r.teamId}: {r.points} pts</li>)}</ul></AdminShell>;
}
