import React, { useEffect, useState } from 'react';
import AdminShell from '../../components/admin/AdminShell';
import { api } from '../../services/api';

export default function AdminSettingsPage() {
  const [form, setForm] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => { api.getSettings().then(setForm).catch(() => setForm({})); }, []);

  const save = async (e) => {
    e.preventDefault();
    await api.updateSettings(form);
    setSaved(true);
  };

  return (
    <AdminShell title="Settings">
      <form className="form-grid" onSubmit={save}>
        <input placeholder="League Name" value={form.leagueName || ''} onChange={(e) => setForm({ ...form, leagueName: e.target.value })} />
        <input placeholder="Public Email" value={form.publicEmail || ''} onChange={(e) => setForm({ ...form, publicEmail: e.target.value })} />
        <input placeholder="Public Phone" value={form.publicPhone || ''} onChange={(e) => setForm({ ...form, publicPhone: e.target.value })} />
        <input placeholder="Public Location" value={form.publicLocation || ''} onChange={(e) => setForm({ ...form, publicLocation: e.target.value })} />
        <input placeholder="Registration Fee" type="number" value={form.registrationFee || 0} onChange={(e) => setForm({ ...form, registrationFee: Number(e.target.value) })} />
        <input placeholder="Team Deposit" type="number" value={form.teamDeposit || 0} onChange={(e) => setForm({ ...form, teamDeposit: Number(e.target.value) })} />
        <button className="btn" type="submit">Save Settings</button>
      </form>
      {saved && <p className="success">Settings updated.</p>}
    </AdminShell>
  );
}
