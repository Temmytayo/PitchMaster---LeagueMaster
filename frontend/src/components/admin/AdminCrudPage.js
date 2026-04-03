import React, { useEffect, useState } from 'react';
import AdminShell from './AdminShell';

export default function AdminCrudPage({ title, fields, fetchItems, createItem, updateItem, deleteItem }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  const load = () => fetchItems().then(setItems).catch(() => setError('Unable to load data.'));
  useEffect(load, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) await updateItem(editingId, form);
      else await createItem(form);
      setForm({});
      setEditingId(null);
      setError('');
      load();
    } catch {
      setError('Save failed.');
    }
  };

  const onEdit = (item) => {
    setEditingId(item.id);
    setForm(item);
  };

  const onDelete = async (id) => {
    if (!window.confirm('Delete this record?')) return;
    await deleteItem(id);
    load();
  };

  return (
    <AdminShell title={title}>
      <form className="form-grid" onSubmit={onSubmit}>
        {fields.map((f) => <input key={f.key} type={f.type || 'text'} placeholder={f.label} value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />)}
        <button className="btn" type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="table-wrap">
        <table>
          <thead><tr>{fields.map((f) => <th key={f.key}>{f.label}</th>)}<th>Actions</th></tr></thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {fields.map((f) => <td key={f.key}>{String(item[f.key] ?? '')}</td>)}
                <td><button className="btn btn-muted" onClick={() => onEdit(item)}>Edit</button> <button className="btn" onClick={() => onDelete(item.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
