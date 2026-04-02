import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>Old Takers Soccer League</h4>
        <p>Adult over 35 league • Competitive • Houston area • Community</p>
      </div>
      <div className="footer-links">
        <Link to="/growth-strategy">Growth Strategy</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      <div>
        <p>Follow: Instagram | Facebook | X (placeholders)</p>
      </div>
    </footer>
  );
}
