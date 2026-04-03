import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import FormSection from '../components/FormSection';

export default function TeamRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-band light">
      <PageContainer narrow>
        <SectionHeader centered label="Summer 2026 Team Entry" title="Team Registration" subtitle="Apply for Old Takers Houston 35+ competitive division placement with complete manager, roster, and competition details for league approval." />
        <div className="panel-card">
          <div className="panel-head"><h3>Team Application Form</h3><p>All fields support admin review and payment tracking placeholders.</p></div>
          <form className="panel-body" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <FormSection title="Team Information">
              <input placeholder="Team Name" required />
              <select><option>Preferred Division</option><option>Premier 35+</option><option>Championship 35+</option></select>
              <input placeholder="Team Home Area" required />
              <input placeholder="Estimated Roster Size" type="number" />
              <input placeholder="Jersey Primary Color" />
              <input placeholder="Jersey Secondary Color" />
            </FormSection>

            <FormSection title="Manager Information">
              <input placeholder="Manager Name" required />
              <input placeholder="Manager Email" required />
              <input placeholder="Manager Phone" required />
              <input placeholder="Assistant Manager" />
            </FormSection>

            <FormSection title="Additional Details">
              <textarea placeholder="Competitive experience and recent history" />
              <textarea placeholder="Roster upload placeholder / comments" />
            </FormSection>

            <div className="agreement-box">
              <label><input type="checkbox" required /> We agree to league rules, waiver requirements, and manager code of conduct.</label>
            </div>

            <button type="submit" className="btn btn-block">Submit Team Application</button>
            {submitted && <p className="success">Application submitted. Ref: OTSL-TEAM-2026</p>}
          </form>
        </div>
      </PageContainer>
    </section>
  );
}
