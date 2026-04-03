import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminSponsorsPage() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => { api.getSponsors().then(setSponsors).catch(() => setSponsors([])); }, []);
  return <AdminShell title="Sponsor Management"><ul>{sponsors.map((s) => <li key={s.id}>{s.name} ({s.tier})</li>)}</ul></AdminShell>;
}
