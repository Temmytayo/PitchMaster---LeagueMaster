import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminNewsPage() {
  const [news, setNews] = useState([]);
  useEffect(() => { api.getNews().then(setNews).catch(() => setNews([])); }, []);
  return <AdminShell title="News Management"><ul>{news.map((n) => <li key={n.id}>{n.title}</li>)}</ul></AdminShell>;
}
