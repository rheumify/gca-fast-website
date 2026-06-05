import Link from 'next/link';

function Icon({ name }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'book':
      return (<svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>);
    case 'clipboard':
      return (<svg {...common}><path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z" /><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 12h6M9 16h4" /></svg>);
    case 'activity':
      return (<svg {...common}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>);
    case 'document':
      return (<svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>);
    case 'help':
      return (<svg {...common}><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12" y2="17" /></svg>);
    case 'users':
      return (<svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
    default:
      return null;
  }
}

const cards = [
  { href: '/about-gca', icon: 'book', tint: 'sage', title: 'About GCA', text: 'What giant cell arteritis is, the warning signs, and why fast diagnosis matters.' },
  { href: '/fast-track-clinic', icon: 'clipboard', tint: 'lavender', title: 'Fast Track Clinic', text: 'How rheumatologists and providers refer a patient for urgent evaluation.' },
  { href: '/vascular-ultrasound', icon: 'activity', tint: 'lagoon', title: 'Vascular Ultrasound', text: 'How we use ultrasound to diagnose and monitor GCA.' },
  { href: '/research', icon: 'document', tint: 'pink', title: 'Research & Publications', text: 'Our published GCA studies, with plain-language summaries.' },
  { href: '/faqs', icon: 'help', tint: 'sage', title: 'FAQs', text: 'Common questions from patients and providers.' },
  { href: '/about', icon: 'users', tint: 'lavender', title: 'About Us', text: 'Meet the physicians behind the Fast Track Clinic.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>University of Washington Giant Cell Arteritis Fast Track Clinic</h1>
          <p>Using vascular ultrasound to diagnose GCA quickly and help prevent vision loss.</p>
          <div className="hero-actions">
            <Link href="/fast-track-clinic" className="referral-button">Refer a Patient</Link>
            <Link href="/about-gca" className="btn-secondary">Learn About GCA</Link>
          </div>
        </div>
      </section>

      <main className="main">
        <p className="lead">
          The GCA Fast Track Clinic provides rapid evaluation for patients with suspected giant cell
          arteritis (GCA). Early diagnosis and treatment are critical to prevent serious complications,
          including permanent vision loss.
        </p>

        <div className="callout callout-emergency">
          <span className="callout-icon" aria-hidden="true">&#9888;&#65039;</span>
          <div>
            <p className="callout-title">Sudden vision loss or change?</p>
            <p>This can be an emergency. Go to the nearest emergency room right away for evaluation by ophthalmology.</p>
          </div>
        </div>

        <div className="link-card-grid">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="link-card">
              <div className={`icon-circle ${c.tint}`}><Icon name={c.icon} /></div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="arrow">Learn more &rarr;</div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
