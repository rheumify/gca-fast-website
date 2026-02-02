export default function VascularUltrasound() {
  return (
    <main className="main">
      <h1 className="page-title">Vascular Ultrasound</h1>

      <section className="section">
        <h2 className="section-title">Use of Vascular Ultrasound for GCA</h2>
        <p>
          Though vascular ultrasound is widely used and recommended as first line for diagnosis of GCA in the EULAR
          guidelines, it is not yet currently recommended in the ACR guidelines due to lack of experience of
          rheumatologists with vascular ultrasound. The University of Washington has pioneered the introduction of
          vascular ultrasound for diagnosis and monitoring of GCA, starting in 2017. Now over 400 vascular ultrasound
          exams have been performed. Please review the guidelines and literature below.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The University of Washington holds the only North American based conference on vascular ultrasound for GCA.
        </p>
      </section>

      <section className="section">
        <h2 className="subsection-title">Clinical Practice Guidelines for GCA</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="https://www.rheumatology.org/Practice-Quality/Clinical-Support/Clinical-Practice-Guidelines/Giant-Cell-Arteritis" target="_blank" rel="noopener noreferrer">
              American College of Rheumatology
            </a>
          </li>
          <li>
            <a href="https://ard.bmj.com/content/77/5/636" target="_blank" rel="noopener noreferrer">
              EULAR
            </a>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="subsection-title">Publications</h2>

        <div style={{ marginBottom: '2rem' }}>
          <p className="publication-category">UW publications on vascular ultrasound for GCA</p>
          <p className="publication">
            Oshinsky C, Bays AM, Sacksen I, Jernberg E, Zierler RE, Diamantopoulos AP, Liew JW, Chung SH, Pollock PS.
            Vascular Ultrasound for Giant Cell Arteritis: Establishing a Protocol Using Vascular Sonographers in a
            Fast-Track Clinic in the United States. ACR Open Rheumatol. 2022 Jan;4(1):13-18. doi: 10.1002/acr2.11346.
            Epub 2021 Oct 14. PMID: 34647696; PMCID: PMC8754016.
          </p>
          <p className="publication">
            Oshinsky C, Bays AM, Sacksen I, Jernberg E, Zierler RE, Pollock PS. The Usefullness of Subclavian Artery
            Ultrasound Assessment in Giant Cell Arteritis Evaluation. J Clin Rheumatol. 2023 Jan 1;29(1):43-46. doi:
            10.1097/RHU.0000000000001909. Epub 2022 Sep 20. PMID: 36126267.
          </p>
        </div>

        <div>
          <p className="publication-category">Other publications on vascular ultrasound for GCA</p>
          <p className="publication">
            Dejaco C, Ramiro S, Duftner C, et al. EULAR recommendations for the use of imaging in large vessel
            vasculitis in clinical practice. Annals of the Rheumatic Diseases 2018;77:636-643.
          </p>
        </div>
      </section>
    </main>
  );
}
