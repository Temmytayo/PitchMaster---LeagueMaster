import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { api } from '../../services/api';
import { auth } from '../../services/auth';

export default function AdminLoginPage() {
  const [form, setForm] = useState({ username: 'admin', password: 'admin123' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.adminLogin(form);
      auth.login(res);
      navigate(location.state?.from || '/admin/dashboard');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <section className="section-band light">
      <PageContainer narrow>
        <div className="panel-card">
          <div className="panel-head"><h3>Admin Login</h3></div>
          <form className="panel-body form-grid" onSubmit={submit}>
            <input placeholder="Username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
            <input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button className="btn" type="submit">Sign In</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </PageContainer>
    </section>
  );
}
