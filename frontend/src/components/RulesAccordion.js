import React, { useState } from 'react';

export default function RulesAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="rules-accordion">
      {items.map((item, idx) => (
        <article key={item.title} className="accordion-item">
          <button className={`accordion-trigger ${open === idx ? 'active' : ''}`} onClick={() => setOpen(open === idx ? -1 : idx)}>
            <span>{idx + 1}. {item.title}</span>
            <span>{open === idx ? '−' : '+'}</span>
          </button>
          {open === idx && <div className="accordion-body"><p>{item.content}</p></div>}
        </article>
      ))}
    </div>
  );
}
