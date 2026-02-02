import Link from 'next/link';

export default function Home() {
    return (
          <>
            <section className="hero">
              <h1>University of Washington<br />Giant Cell Arteritis<br />Fast Track Clinic</h1>
          <p>Using vascular ultrasound to diagnose GCA and prevent blindness</p>
      </section>

      <main className="main">
              <section className="section">
                <h2 className="section-title">Fast Track Clinic</h2>
            <p style={{ marginBottom: '1rem' }}>
            Our Fast Track Clinic provides rapid evaluation for patients with suspected giant cell arteritis (GCA).
                          Early diagnosis and treatment are critical to prevent serious complications, including vision loss.
              </p>
          <Link href="/fast-track-clinic">Learn more about how to refer to the GCA Fast Track Clinic →</Link>
              </section>

        <section className="section">
                        <h2 className="section-title">Vascular Ultrasound</h2>
          <p style={{ marginBottom: '1rem' }}>
            The University of Washington has pioneered the use of vascular ultrasound for GCA diagnosis and monitoring.
                          Our team has performed over 400 vascular ultrasound exams since 2017.
              </p>
          <Link href="/vascular-ultrasound">Using vascular ultrasound to diagnose and manage GCA →</Link>
              </section>

        <section className="section">
                        <h2 className="section-title">Frequently Asked Questions</h2>
          <p style={{ marginBottom: '1rem' }}>
            Find answers to common questions about GCA, our Fast Track Clinic, and vascular ultrasound evaluation.
              </p>
          <Link href="/faqs">Frequently asked questions →</Link>
              </section>

        <section className="section">
                        <h2 className="section-title">About Us</h2>
          <p style={{ marginBottom: '1rem' }}>
            Meet our team of physicians dedicated to caring for patients with GCA.
              </p>
          <Link href="/about">Learn more about our physicians →</Link>
              </section>
              </main>
              </>
  );
}
