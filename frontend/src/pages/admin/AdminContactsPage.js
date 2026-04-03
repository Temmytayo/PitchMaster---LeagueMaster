import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

const statuses = ['New', 'Read', 'In Progress', 'Closed'];

export default function AdminContactsPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => { api.getContactMessages().then(setMessages).catch(() => setMessages([])); }, []);

  const setStatus = (id, status) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
  };

  return (
    <AdminShell title="Contact Messages">
      <div className="table-wrap">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Type</th><th>Message</th><th>Status</th></tr></thead>
          <tbody>
            {messages.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.inquiryType}</td>
                <td>{m.message}</td>
                <td>
                  <select value={m.status || 'New'} onChange={(e) => setStatus(m.id, e.target.value)}>
                    {statuses.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
