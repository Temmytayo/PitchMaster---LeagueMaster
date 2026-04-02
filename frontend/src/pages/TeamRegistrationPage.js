import React, { useMemo, useState } from 'react';
import { api } from '../services/api';
import StepProgress from '../components/StepProgress';

const steps = ['Team Interest', 'Manager Details', 'Team Details', 'Roster Submission', 'Waivers', 'Payment', 'Confirmation'];

const initialForm = {
  teamName: '',
  managerName: '',
  managerPhone: '',
  managerEmail: '',
  assistantManager: '',
  teamHomeArea: '',
  divisionPreference: 'Premier 35+',
  competitiveExperience: '',
  isReturningTeam: false,
  jerseyPrimaryColor: '',
  jerseySecondaryColor: '',
  estimatedRosterSize: 18,
  comments: '',
  waiverAccepted: false,
  paymentStatus: 'Pending',
  registrationFee: 850,
  paymentReference: '',
  adminNotes: ''
};

export default function TeamRegistrationPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const requiredMap = useMemo(() => ({
    0: ['teamName'],
    1: ['managerName', 'managerPhone', 'managerEmail'],
    2: ['teamHomeArea', 'divisionPreference', 'estimatedRosterSize'],
    4: ['waiverAccepted']
  }), []);

  const validateStep = () => {
    const required = requiredMap[step] || [];
    for (const field of required) {
      if (!form[field]) {
        setError('Please complete all required fields in this step.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const next = async () => {
    if (!validateStep()) return;

    if (step === 5) {
      try {
        setSubmitting(true);
        await api.submitTeamRegistration(form);
      } catch {
        setError('Submission failed. Please try again.');
        return;
      } finally {
        setSubmitting(false);
      }
    }

    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const setValue = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  if (step === 6) {
    return <section className="section"><h2>Team Registration Confirmed</h2><p>Reference: OTSL-TEAM-PLACEHOLDER</p></section>;
  }

  return (
    <section className="section">
      <h2>Team Registration Workflow</h2>
      <StepProgress steps={steps} currentStep={step} />

      {step === 0 && <div className="form-grid"><input placeholder="Team Name*" value={form.teamName} onChange={(e) => setValue('teamName', e.target.value)} /></div>}
      {step === 1 && <div className="form-grid">
        <input placeholder="Manager Name*" value={form.managerName} onChange={(e) => setValue('managerName', e.target.value)} />
        <input placeholder="Manager Phone*" value={form.managerPhone} onChange={(e) => setValue('managerPhone', e.target.value)} />
        <input placeholder="Manager Email*" value={form.managerEmail} onChange={(e) => setValue('managerEmail', e.target.value)} />
        <input placeholder="Assistant Manager" value={form.assistantManager} onChange={(e) => setValue('assistantManager', e.target.value)} />
      </div>}
      {step === 2 && <div className="form-grid">
        <input placeholder="Team Home Area*" value={form.teamHomeArea} onChange={(e) => setValue('teamHomeArea', e.target.value)} />
        <select value={form.divisionPreference} onChange={(e) => setValue('divisionPreference', e.target.value)}><option>Premier 35+</option><option>Championship 35+</option></select>
        <input type="number" placeholder="Estimated Roster Size*" value={form.estimatedRosterSize} onChange={(e) => setValue('estimatedRosterSize', Number(e.target.value))} />
        <input placeholder="Competitive Experience" value={form.competitiveExperience} onChange={(e) => setValue('competitiveExperience', e.target.value)} />
        <label><input type="checkbox" checked={form.isReturningTeam} onChange={(e) => setValue('isReturningTeam', e.target.checked)} /> Returning team</label>
      </div>}
      {step === 3 && <div className="form-grid">
        <input placeholder="Jersey Primary Color" value={form.jerseyPrimaryColor} onChange={(e) => setValue('jerseyPrimaryColor', e.target.value)} />
        <input placeholder="Jersey Secondary Color" value={form.jerseySecondaryColor} onChange={(e) => setValue('jerseySecondaryColor', e.target.value)} />
        <textarea placeholder="Roster Upload Placeholder / Special Requests" value={form.comments} onChange={(e) => setValue('comments', e.target.value)} />
      </div>}
      {step === 4 && <label><input type="checkbox" checked={form.waiverAccepted} onChange={(e) => setValue('waiverAccepted', e.target.checked)} /> I acknowledge team waivers and league agreements*</label>}
      {step === 5 && <div className="form-grid">
        <input value={form.registrationFee} readOnly />
        <select value={form.paymentStatus} onChange={(e) => setValue('paymentStatus', e.target.value)}><option>Pending</option><option>Unpaid</option><option>Paid</option></select>
        <input placeholder="Payment Reference" value={form.paymentReference} onChange={(e) => setValue('paymentReference', e.target.value)} />
        <textarea placeholder="Admin Notes" value={form.adminNotes} onChange={(e) => setValue('adminNotes', e.target.value)} />
      </div>}

      {error && <p className="error">{error}</p>}
      <div className="actions-row">
        {step > 0 && <button className="btn btn-muted" onClick={prev}>Back</button>}
        <button className="btn" onClick={next} disabled={submitting}>{submitting ? 'Submitting...' : 'Continue'}</button>
      </div>
    </section>
  );
}
