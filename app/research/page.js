export const metadata = {
  title: 'Research & Publications | UW Giant Cell Arteritis Fast Track Clinic',
  description: 'Peer-reviewed publications from the University of Washington GCA Fast Track Clinic, each with a plain-language summary.',
};

const publications = [
  {
    year: '2025',
    title: 'Diagnostic and prognostic utility of CBC-derived ratios in giant cell arteritis: a retrospective Fast Track Clinic cohort study',
    journal: 'Rheumatology International',
    pmid: '41269356',
    summary:
      'We tested whether simple ratios calculated from a routine blood count (the complete blood count, or CBC) can help support a GCA diagnosis and predict outcomes — a low-cost, widely available tool to aid evaluation.',
  },
  {
    year: '2025',
    title: 'Normal inflammatory markers in giant cell arteritis: a diagnostic blind spot',
    journal: 'Rheumatology International',
    pmid: '40682608',
    summary:
      'Most people with GCA have elevated inflammation blood tests (ESR and CRP), but some do not. We describe this group to raise awareness that normal markers do not rule out GCA and can lead to missed or delayed diagnoses.',
  },
  {
    year: '2025',
    title: 'Delays in tocilizumab therapy for patients with giant cell arteritis in the United States',
    journal: 'The Journal of Rheumatology',
    pmid: '40089304',
    summary:
      'Tocilizumab is an important medication for GCA. We measured how long patients waited to start it and found that insurance prior-authorization requirements contributed to meaningful treatment delays.',
  },
  {
    year: '2024',
    title: 'Characteristics associated with anterior ischemic optic neuropathy (AION) in giant cell arteritis',
    journal: 'Clinical Rheumatology',
    pmid: '39427049',
    summary:
      'AION is the main cause of GCA-related vision loss. We identified clinical features that were more common in patients who developed AION, which may help flag those at higher risk.',
  },
  {
    year: '2024',
    title: 'The common carotid artery in the ultrasound evaluation of giant cell arteritis',
    journal: 'Journal of Clinical Rheumatology',
    pmid: '38787805',
    summary:
      'We examined whether including the common carotid artery in the vascular ultrasound exam adds useful information when evaluating patients for GCA.',
  },
  {
    year: '2023',
    title: 'The usefulness of subclavian artery ultrasound assessment in giant cell arteritis evaluation',
    journal: 'Journal of Clinical Rheumatology',
    pmid: '36126267',
    summary:
      'We showed that scanning the subclavian arteries during the ultrasound exam can add valuable diagnostic information in GCA, beyond examining the temporal arteries alone.',
  },
  {
    year: '2022',
    title: 'Vascular ultrasound for giant cell arteritis: establishing a protocol using vascular sonographers in a fast-track clinic in the United States',
    journal: 'ACR Open Rheumatology',
    pmid: '34647696',
    summary:
      'Our foundational paper describing how we built one of the first U.S. fast-track vascular-ultrasound protocols for GCA, performed by trained vascular sonographers.',
  },
];

export default function Research() {
  return (
    <main className="main">
      <h1 className="page-title">Research &amp; Publications</h1>
      <p className="page-intro">
        The University of Washington has helped pioneer the use of vascular ultrasound for giant cell
        arteritis and studies the care of GCA patients through our Fast Track Clinic. Below are our
        peer-reviewed publications, each with a plain-language summary of what we found.
      </p>

      <div className="pub-grid">
        {publications.map((p) => (
          <article className="pub-card" key={p.pmid}>
            <span className="pub-year">{p.year}</span>
            <h2 className="pub-title">{p.title}</h2>
            <p className="pub-journal">{p.journal}</p>
            <p className="pub-summary">{p.summary}</p>
            <a className="pub-link" href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`} target="_blank" rel="noopener noreferrer">
              Read on PubMed &rarr;
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
