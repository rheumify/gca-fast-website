export default function About() {
  return (
    <main className="main">
      <h1 className="page-title">About Us</h1>
      <p className="page-intro">Meet the physicians caring for patients with giant cell arteritis at the UW Fast Track Clinic.</p>

      <div className="team-grid">
        <div className="team-member">
          <h3><a href="https://rheumatology.uw.edu/people/faculty/alison-bays" target="_blank" rel="noopener noreferrer">Alison Bays, MD</a></h3>
          <p>
            Dr. Bays earned her medical degree at Tulane University (2005-2010). She completed internal medicine
            residency at the University of Washington (2010-2013) and rheumatology fellowship at University of
            California, San Francisco (2013-2015). Her primary site of work is at Harborview Medical Center. She helps
            coordinate the Fast Track Clinic.
          </p>
        </div>

        <div className="team-member">
          <h3><a href="https://rheumatology.uw.edu/people/faculty/clinical/ingeborg-sacksen" target="_blank" rel="noopener noreferrer">Ingeborg Sacksen, MD, FACP</a></h3>
          <p>
            Dr. Sacksen obtained her medical degree at Dartmouth Medical School, Hanover, NH (1991) and completed
            internal medicine residency at the University of Washington, Seattle, WA (1991-1994) and rheumatology
            fellowship at the University of Washington, Seattle, WA (2011-2013). Her primary clinical site is Roosevelt
            Clinic where she is the section head. She is certified in MSK Ultrasound and co-runs the ultrasound program
            for rheumatology fellows.
          </p>
        </div>

        <div className="team-member">
          <h3><a href="https://rheumatology.uw.edu/people/faculty/emeritus/p-scott-pollock" target="_blank" rel="noopener noreferrer">Scott Pollock, MD</a></h3>
          <p>
            Dr. Pollock attended the University of California Los Angeles, Los Angeles, CA (1971). He completed his
            residency at the University of Washington, Seattle, WA (1975-1978) and rheumatology fellowship at the
            University of Washington, Seattle, WA (1978-1980). He is certified in MSK Ultrasound and co-runs the
            fellowship ultrasound program for rheumatology fellows.
          </p>
        </div>
      </div>
    </main>
  );
}
