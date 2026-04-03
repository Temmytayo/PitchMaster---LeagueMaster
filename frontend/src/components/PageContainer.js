import React from 'react';

export default function PageContainer({ children, narrow = false }) {
  return <div className={`site-container ${narrow ? 'site-container--narrow' : ''}`}>{children}</div>;
}
