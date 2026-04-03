import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import FormSection from '../components/FormSection';

export default function PlayerRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-band light">
      <PageContainer narrow>
        <SectionHeader centered label="Free Agent & Player Pool" title="Player Sign Up" subtitle="Join Houston’s adult 35+ competitive player network and enter the organized free-agent and team placement pipeline used by league managers." />
        <div className="panel-card">
          <div className="panel-head"><h3>Player Intake Form</h3><p>Structured for manager scouting, eligibility checks, and payment placeholders.</p></div>
          <form className="panel-body" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <FormSection title="Player Profile">
              <input placeholder="First Name" required />
              <input placeholder="Last Name" required />
              <input type="date" required />
              <input placeholder="Email" required />
              <input placeholder="Phone" required />
              <select><option>Preferred Position</option><option>GK</option><option>Defender</option><option>Midfielder</option><option>Forward</option></select>
            </FormSection>

            <FormSection title="Team Interest">
              <input placeholder="Preferred Team (optional)" />
              <label><input type="checkbox" /> Mark me as Free Agent</label>
              <input placeholder="Emergency Contact Name" />
              <input placeholder="Emergency Contact Phone" />
            </FormSection>

            <FormSection title="Medical & Conduct">
              <textarea placeholder="Medical notes (optional)" />
              <select><option>Payment Status</option><option>Pending</option><option>Unpaid</option><option>Paid</option></select>
            </FormSection>

            <div className="agreement-box">
              <label><input type="checkbox" required /> I accept the waiver and code of conduct.</label>
            </div>

            <button type="submit" className="btn btn-block">Submit Player Application</button>
            {submitted && <p className="success">Application submitted. Ref: OTSL-PLAYER-2026</p>}
          </form>
        </div>
      </PageContainer>
    </section>
  );
}
