import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminMatchesPage() {
  const [matches, setMatches] = useState([]);
  useEffect(() => { api.getMatches().then(setMatches).catch(() => setMatches([])); }, []);
  return <AdminShell title="Schedule Management"><ul>{matches.map((m) => <li key={m.id}>{new Date(m.matchDateUtc).toLocaleString()} - {m.location}</li>)}</ul></AdminShell>;
}
