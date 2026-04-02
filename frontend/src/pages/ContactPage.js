import React, { useState } from 'react';
import { api } from '../services/api';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    await api.submitContact(form);
    setSubmitted(true);
  };

  return (
    <section className="section">
      <h2>Contact Old Takers Soccer League</h2>
      <p>Houston-area inquiries: general, manager, sponsor, and league operations.</p>
      <form className="form-grid" onSubmit={onSubmit}>
        <input placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <select onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}><option>General</option><option>Manager Inquiry</option><option>Sponsor Inquiry</option></select>
        <textarea placeholder="Message" required onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="btn" type="submit">Send</button>
      </form>
      {submitted && <p>Thanks for contacting us.</p>}
    </section>
  );
}
