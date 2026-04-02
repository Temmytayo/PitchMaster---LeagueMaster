import React from 'react';

export default function SectionHeader({ label, title, subtitle, centered = false }) {
  return (
    <header className={`section-header ${centered ? 'section-header--centered' : ''}`}>
      {label && <p className="eyebrow">{label}</p>}
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
