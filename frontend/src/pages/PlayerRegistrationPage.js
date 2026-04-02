import React, { useState } from 'react';
import { calculateAge, validateRequired } from '../utils/validation';
import { api } from '../services/api';

export default function PlayerRegistrationPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ paymentStatus: 'Pending' });
  const [error, setError] = useState('');
  const steps = ['Player Information', 'Eligibility', 'Team/Free Agent', 'Emergency Contact', 'Waivers', 'Payment', 'Confirmation'];

  const onContinue = async () => {
    const requiredFields = ['firstName', 'lastName', 'dob', 'email', 'phone'];
    const errs = validateRequired(form, step < 2 ? requiredFields : []);
    if (Object.keys(errs).length) return setError('Please complete required fields.');
    if (step === 1 && calculateAge(form.dob) < 35) return setError('Player must be at least 35.');
    if (step === 5) await api.submitPlayerRegistration({ ...form, age: calculateAge(form.dob) });
    setError('');
    setStep((s) => s + 1);
  };

  if (step > 5) return <section className="section"><h2>Player Registration Confirmed</h2><p>Reference: OTSL-PLAYER-PLACEHOLDER</p></section>;

  return (
    <section className="section">
      <h2>Player Registration Workflow</h2>
      <p>Step {step + 1} of 7: {steps[step]}</p>
      <div className="form-grid">
        <input placeholder="First Name" onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
        <input placeholder="Last Name" onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        <input type="date" onChange={(e) => setForm({ ...form, dob: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input placeholder="Preferred Position" onChange={(e) => setForm({ ...form, preferredPosition: e.target.value })} />
        <input placeholder="Team Name or Free Agent" onChange={(e) => setForm({ ...form, teamSelection: e.target.value })} />
        <input placeholder="Emergency Contact Name" onChange={(e) => setForm({ ...form, emergencyContactName: e.target.value })} />
        <input placeholder="Emergency Contact Phone" onChange={(e) => setForm({ ...form, emergencyContactPhone: e.target.value })} />
        <textarea placeholder="Medical Notes" onChange={(e) => setForm({ ...form, medicalNotes: e.target.value })} />
      </div>
      <label><input type="checkbox" onChange={(e) => setForm({ ...form, waiverAccepted: e.target.checked })} /> Waiver acceptance</label>
      <label><input type="checkbox" onChange={(e) => setForm({ ...form, conductAccepted: e.target.checked })} /> Code of conduct acceptance</label>
      {error && <p className="error">{error}</p>}
      <button className="btn" onClick={onContinue}>Continue</button>
    </section>
  );
}
