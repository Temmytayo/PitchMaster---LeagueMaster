import React from 'react';

export default function StepProgress({ steps, currentStep }) {
  return (
    <ol className="step-progress">
      {steps.map((step, index) => (
        <li key={step} className={index <= currentStep ? 'active' : ''}>
          <span>{index + 1}</span>
          <small>{step}</small>
        </li>
      ))}
    </ol>
  );
}
