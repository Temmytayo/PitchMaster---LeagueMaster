import React from 'react';
import PageContainer from './PageContainer';

export default function StatStrip({ items }) {
  return (
    <section className="stat-strip">
      <PageContainer>
        <div className="stat-strip-grid">
          {items.map((item) => (
            <article key={item.label} className="stat-item">
              <p className="stat-icon">{item.icon}</p>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
