import React from 'react';
import PageContainer from './PageContainer';

export default function PageHero({ label, title, emphasis, description, actions, children }) {
  return (
    <section className="hero-band">
      <PageContainer>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">{label}</p>
            <h1>{title} <span>{emphasis}</span></h1>
            <p className="hero-copy">{description}</p>
            <div className="actions-row">{actions}</div>
          </div>
          {children && <div>{children}</div>}
        </div>
      </PageContainer>
    </section>
  );
}
