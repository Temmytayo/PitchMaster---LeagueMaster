import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">{children}</main>
      <Footer />
    </div>
  );
}
