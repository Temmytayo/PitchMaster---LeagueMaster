import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminContactsPage() {
  const [messages, setMessages] = useState([]);
  useEffect(() => { api.getContactMessages().then(setMessages).catch(() => setMessages([])); }, []);
  return <AdminShell title="Contact Submissions"><ul>{messages.map((m) => <li key={m.id}>{m.name} • {m.inquiryType}</li>)}</ul></AdminShell>;
}
