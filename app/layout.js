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
    return pathname === path || pathname.startsWith(path + '/');
  };

  const close = () => setMenuOpen(false);

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
            <Link href="/" className="logo" onClick={close}>
              UW Giant Cell Arteritis Fast Track Clinic
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
              <Link href="/" onClick={close} className={isActive('/') ? 'active' : ''}>Home</Link>
              <Link href="/about-gca" onClick={close} className={isActive('/about-gca') ? 'active' : ''}>About GCA</Link>
              <Link href="/resources" onClick={close} className={isActive('/resources') ? 'active' : ''}>Resources</Link>
              <Link href="/fast-track-clinic" onClick={close} className={isActive('/fast-track-clinic') ? 'active' : ''}>Fast Track Clinic</Link>
              <Link href="/vascular-ultrasound" onClick={close} className={isActive('/vascular-ultrasound') ? 'active' : ''}>Vascular Ultrasound</Link>
              <Link href="/research" onClick={close} className={isActive('/research') ? 'active' : ''}>Research</Link>
              <Link href="/faqs" onClick={close} className={isActive('/faqs') ? 'active' : ''}>FAQs</Link>
              <Link href="/about" onClick={close} className={isActive('/about') ? 'active' : ''}>About Us</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} University of Washington Giant Cell Arteritis Fast Track Clinic. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
