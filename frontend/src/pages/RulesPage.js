import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionHeader from '../components/SectionHeader';
import RulesAccordion from '../components/RulesAccordion';
import { api } from '../services/api';

export default function RulesPage() {
  const [ruleItems, setRuleItems] = useState([]);

  useEffect(() => {
    api.getRules().then((data) => setRuleItems(data.map((x) => ({ title: x.title, content: x.content })))).catch(() => setRuleItems([]));
  }, []);

  return (
    <section className="section-band light">
      <PageContainer>
        <div className="page-top-row">
          <SectionHeader label="Official Document" title="League Rules & Policies" subtitle="Clear standards for fair competition, player safety, referee respect, and community accountability across the Houston area." />
          <button className="btn">Download PDF</button>
        </div>
        <div className="panel-card">
          <div className="panel-head"><h3>General Regulations</h3></div>
          <div className="panel-body"><RulesAccordion items={ruleItems} /></div>
        </div>
      </PageContainer>
    </section>
  );
}
