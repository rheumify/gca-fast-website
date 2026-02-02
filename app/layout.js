'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
  };

  return (
        <html lang="en">
          <head>
            <title>UW Giant Cell Arteritis Fast Track Clinic</title>
          <meta name="description" content="University of Washington Giant Cell Arteritis Fast Track Clinic - Using vascular ultrasound to diagnose GCA and prevent blindness" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
    </head>
        <body>
            <header className="header">
              <div className="header-content">
                <Link href="/" className="logo">
                  UW GIANT CELL ARTERITIS FAST TRACK CLINIC
    </Link>

            <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                  </button>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                  Home
  </Link>
              <Link href="/fast-track-clinic" className={isActive('/fast-track-clinic') ? 'active' : ''}>
                Fast Track Clinic
                  </Link>
              <Link href="/vascular-ultrasound" className={isActive('/vascular-ultrasound') ? 'active' : ''}>
                Vascular Ultrasound
                  </Link>
              <Link href="/faqs" className={isActive('/faqs') ? 'active' : ''}>
                FAQs
                  </Link>
              <Link href="/about" className={isActive('/about') ? 'active' : ''}>
                About Us
                  </Link>
                  </nav>
                  </div>
                  </header>

{children}

        <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Giant Cell Arteritis Fast Track Clinic - All Rights Reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>University of Washington</p>
          </footer>
          </body>
          </html>
  );
}
