import React from 'react';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <p className="empty-state">Admin login placeholder: authentication coming soon.</p>;
  }
  return children;
}
