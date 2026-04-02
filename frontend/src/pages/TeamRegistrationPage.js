import React, { useState } from 'react';
import { validateRequired } from '../utils/validation';
import { api } from '../services/api';

const steps = ['Team Interest', 'Manager Details', 'Team Details', 'Roster Submission', 'Waivers', 'Payment', 'Confirmation'];

export default function TeamRegistrationPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ paymentStatus: 'Pending', registrationFee: 850 });
  const [errors, setErrors] = useState({});

  const required = {
    0: ['teamName'], 1: ['managerName', 'managerPhone', 'managerEmail'], 2: ['teamHomeArea', 'divisionPreference', 'rosterSize'], 4: ['waiverAccepted'], 5: ['paymentStatus']
  };

  const next = async () => {
    const e = validateRequired(form, required[step] || []);
    setErrors(e);
    if (Object.keys(e).length) return;
    if (step === 5) {
      await api.submitTeamRegistration(form);
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  if (step === 6) return <section className="section"><h2>Team Registration Confirmed</h2><p>Reference: OTSL-TEAM-PLACEHOLDER</p></section>;

  return (
    <section className="section">
      <h2>Team Registration Workflow</h2>
      <p>Step {step + 1} of 7: {steps[step]}</p>
      <div className="form-grid">
        <input placeholder="Team Name" onChange={(e) => setForm({ ...form, teamName: e.target.value })} />
        <input placeholder="Manager Name" onChange={(e) => setForm({ ...form, managerName: e.target.value })} />
        <input placeholder="Manager Phone" onChange={(e) => setForm({ ...form, managerPhone: e.target.value })} />
        <input placeholder="Manager Email" onChange={(e) => setForm({ ...form, managerEmail: e.target.value })} />
        <input placeholder="Assistant Manager" onChange={(e) => setForm({ ...form, assistantManager: e.target.value })} />
        <input placeholder="Team Home Area" onChange={(e) => setForm({ ...form, teamHomeArea: e.target.value })} />
        <input placeholder="Division Preference" onChange={(e) => setForm({ ...form, divisionPreference: e.target.value })} />
        <input placeholder="Competitive Experience" onChange={(e) => setForm({ ...form, competitiveExperience: e.target.value })} />
        <input placeholder="Jersey Primary Color" onChange={(e) => setForm({ ...form, jerseyPrimaryColor: e.target.value })} />
        <input placeholder="Jersey Secondary Color" onChange={(e) => setForm({ ...form, jerseySecondaryColor: e.target.value })} />
        <input placeholder="Estimated Roster Size" type="number" onChange={(e) => setForm({ ...form, rosterSize: e.target.value })} />
        <textarea placeholder="Comments / Special Requests" onChange={(e) => setForm({ ...form, comments: e.target.value })} />
      </div>
      <label><input type="checkbox" onChange={(e) => setForm({ ...form, waiverAccepted: e.target.checked })} /> Waiver acknowledgment</label>
      {Object.keys(errors).length > 0 && <p className="error">Please complete required fields for this step.</p>}
      <button className="btn" onClick={next}>Continue</button>
    </section>
  );
}
