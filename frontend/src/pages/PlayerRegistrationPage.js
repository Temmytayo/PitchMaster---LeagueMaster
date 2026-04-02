import React, { useState } from 'react';
import { api } from '../services/api';
import { calculateAge } from '../utils/validation';
import StepProgress from '../components/StepProgress';

const steps = ['Player Information', 'Eligibility', 'Team or Free Agent', 'Emergency Contact', 'Waiver & Conduct', 'Payment', 'Confirmation'];

const initialForm = {
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  phone: '',
  address: '',
  preferredPosition: '',
  teamSelection: '',
  isFreeAgent: false,
  emergencyContactName: '',
  emergencyContactPhone: '',
  medicalNotes: '',
  waiverAccepted: false,
  conductAccepted: false,
  paymentStatus: 'Pending',
  registrationFee: 115,
  paymentReference: '',
  adminNotes: ''
};

export default function PlayerRegistrationPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const setValue = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const next = async () => {
    if (step === 0 && (!form.firstName || !form.lastName || !form.email || !form.phone)) return setError('Please complete player profile fields.');
    if (step === 1 && calculateAge(form.dob) < 35) return setError('Player must be age 35+ by season start.');
    if (step === 2 && !form.teamSelection && !form.isFreeAgent) return setError('Select a team or mark free agent.');
    if (step === 4 && (!form.waiverAccepted || !form.conductAccepted)) return setError('Accept waiver and code of conduct.');

    if (step === 5) {
      try {
        await api.submitPlayerRegistration({ ...form, dateOfBirth: form.dob, teamSelection: form.isFreeAgent ? 'Free Agent' : form.teamSelection });
      } catch {
        return setError('Unable to submit right now. Please try again.');
      }
    }

    setError('');
    setStep((s) => s + 1);
  };

  if (step > 5) return <section className="section"><h2>Player Registration Confirmed</h2><p>Reference: OTSL-PLAYER-PLACEHOLDER</p></section>;

  return (
    <section className="section">
      <h2>Player Registration Workflow</h2>
      <StepProgress steps={steps} currentStep={step} />

      {step === 0 && <div className="form-grid">
        <input placeholder="First Name*" value={form.firstName} onChange={(e) => setValue('firstName', e.target.value)} />
        <input placeholder="Last Name*" value={form.lastName} onChange={(e) => setValue('lastName', e.target.value)} />
        <input placeholder="Email*" value={form.email} onChange={(e) => setValue('email', e.target.value)} />
        <input placeholder="Phone*" value={form.phone} onChange={(e) => setValue('phone', e.target.value)} />
        <input placeholder="Address (placeholder)" value={form.address} onChange={(e) => setValue('address', e.target.value)} />
      </div>}

      {step === 1 && <div className="form-grid"><input type="date" value={form.dob} onChange={(e) => setValue('dob', e.target.value)} /><input readOnly value={form.dob ? `Calculated Age: ${calculateAge(form.dob)}` : 'Calculated Age'} /></div>}

      {step === 2 && <div className="form-grid">
        <input placeholder="Team Name" value={form.teamSelection} onChange={(e) => setValue('teamSelection', e.target.value)} disabled={form.isFreeAgent} />
        <input placeholder="Preferred Position" value={form.preferredPosition} onChange={(e) => setValue('preferredPosition', e.target.value)} />
        <label><input type="checkbox" checked={form.isFreeAgent} onChange={(e) => setValue('isFreeAgent', e.target.checked)} /> I am a free agent</label>
      </div>}

      {step === 3 && <div className="form-grid"><input placeholder="Emergency Contact Name" value={form.emergencyContactName} onChange={(e) => setValue('emergencyContactName', e.target.value)} /><input placeholder="Emergency Contact Phone" value={form.emergencyContactPhone} onChange={(e) => setValue('emergencyContactPhone', e.target.value)} /><textarea placeholder="Medical Notes" value={form.medicalNotes} onChange={(e) => setValue('medicalNotes', e.target.value)} /></div>}

      {step === 4 && <div><label><input type="checkbox" checked={form.waiverAccepted} onChange={(e) => setValue('waiverAccepted', e.target.checked)} /> Waiver acceptance</label><label><input type="checkbox" checked={form.conductAccepted} onChange={(e) => setValue('conductAccepted', e.target.checked)} /> Code of conduct acceptance</label></div>}

      {step === 5 && <div className="form-grid">
        <input readOnly value={form.registrationFee} />
        <select value={form.paymentStatus} onChange={(e) => setValue('paymentStatus', e.target.value)}><option>Pending</option><option>Unpaid</option><option>Paid</option></select>
        <input placeholder="Payment Reference" value={form.paymentReference} onChange={(e) => setValue('paymentReference', e.target.value)} />
      </div>}

      {error && <p className="error">{error}</p>}
      <div className="actions-row">
        {step > 0 && <button className="btn btn-muted" onClick={() => setStep((s) => s - 1)}>Back</button>}
        <button className="btn" onClick={next}>Continue</button>
      </div>
    </section>
  );
}
