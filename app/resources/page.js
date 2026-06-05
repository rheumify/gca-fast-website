export const metadata = {
  title: 'Patient Resources | UW Giant Cell Arteritis Fast Track Clinic',
  description: 'Trusted resources for patients with giant cell arteritis (GCA): the Vasculitis Foundation, plain-language education, medications and bone-health information, financial assistance, questions to ask your doctor, and a glossary.',
};

const trusted = [
  { href: 'https://rheumatology.org/patients/giant-cell-arteritis', title: 'American College of Rheumatology — GCA', desc: 'Patient overview from the leading U.S. rheumatology society.' },
  { href: 'https://rheumatology.org/patients/polymyalgia-rheumatica', title: 'American College of Rheumatology — Polymyalgia Rheumatica', desc: 'About PMR, a condition closely related to GCA.' },
  { href: 'https://medlineplus.gov/giantcellarteritis.html', title: 'MedlinePlus (NIH) — Giant Cell Arteritis', desc: 'Clear, plain-language information from the National Library of Medicine.' },
  { href: 'https://rarediseases.org/rare-diseases/arteritis-giant-cell/', title: 'NORD — Giant Cell Arteritis', desc: 'Detailed overview from the National Organization for Rare Disorders.' },
];

const glossary = [
  { term: 'Giant cell arteritis (GCA)', def: 'Inflammation of medium and large arteries, most often around the temples and scalp.' },
  { term: 'Vasculitis', def: 'Inflammation of blood vessels.' },
  { term: 'Temporal artery biopsy', def: 'A small sample of the temple artery, used in some cases to confirm GCA.' },
  { term: 'Vascular ultrasound', def: 'A painless scan that can show inflammation in the artery walls (the "halo sign").' },
  { term: 'ESR and CRP', def: 'Blood tests that measure inflammation. They can occasionally be normal in GCA.' },
  { term: 'AION', def: 'Anterior ischemic optic neuropathy — the main cause of GCA-related vision loss.' },
  { term: 'Polymyalgia rheumatica (PMR)', def: 'A related condition causing shoulder and hip stiffness, especially in the morning.' },
  { term: 'Corticosteroids (prednisone)', def: 'The main initial treatment, used to calm the inflammation quickly.' },
  { term: 'Tocilizumab (Actemra)', def: 'A steroid-sparing biologic medicine (an IL-6 inhibitor) given by injection to help control GCA.' },
  { term: 'Upadacitinib (Rinvoq)', def: 'An oral JAK-inhibitor medicine, FDA-approved for GCA in 2025, used to help control the disease and reduce steroids.' },
  { term: 'JAK inhibitor', def: 'A type of medicine taken by mouth that lowers immune-system activity; upadacitinib is one example.' },
  { term: 'Flare', def: 'A return of disease activity after improvement.' },
];

export default function Resources() {
  return (
    <main className="main">
      <h1 className="page-title">Patient Resources &amp; Learning</h1>
      <p className="page-intro">
        Trusted resources to help you understand giant cell arteritis (GCA), find support, and get help
        with treatment. These links go to outside organizations and are provided for your convenience.
        Always talk with your own care team about your diagnosis and treatment.
      </p>

      <div className="callout callout-emergency">
        <span className="callout-icon" aria-hidden="true">&#9888;&#65039;</span>
        <div>
          <p className="callout-title">Sudden vision loss or change is an emergency</p>
          <p>Go to the nearest emergency room right away. Early treatment can protect your sight.</p>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Vasculitis Foundation</h2>
        <div className="card">
          <p style={{ marginBottom: '1rem' }}>
            The Vasculitis Foundation is the leading patient organization for vasculitis, including GCA. It
            offers education, webinars, support groups, and opportunities to take part in research.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
            <li><a href="https://vasculitisfoundation.org/education/vasculitis-types/giant-cell-arteritis/" target="_blank" rel="noopener noreferrer">Giant Cell Arteritis — patient overview</a></li>
            <li><a href="https://vasculitisfoundation.org/resources/video-library/" target="_blank" rel="noopener noreferrer">Video library &amp; educational webinars</a></li>
            <li><a href="https://www.vasculitisfoundation.org/mcm_resources/youtube-education-videos/" target="_blank" rel="noopener noreferrer">YouTube education channel</a></li>
            <li><a href="https://vasculitisfoundation.org/wp-content/uploads/2024/03/2024-VF_GCA-Brochure.pdf" target="_blank" rel="noopener noreferrer">GCA patient brochure (PDF)</a></li>
            <li><a href="https://vasculitisfoundation.org/treatments-research/patient-powered-research/vpprn-community-dashboard/giant-cell-temporal-arteritis-gca-vpprn/" target="_blank" rel="noopener noreferrer">Join GCA patient-powered research (VPPRN)</a></li>
            <li><a href="https://vasculitisfoundation.org/resources/faqs/" target="_blank" rel="noopener noreferrer">Frequently asked questions</a></li>
            <li><a href="https://vasculitisfoundation.org/" target="_blank" rel="noopener noreferrer">Support groups &amp; community</a></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Learn more about GCA</h2>
        <ul className="fact-list">
          {trusted.map((r) => (
            <li key={r.href}>
              <a href={r.href} target="_blank" rel="noopener noreferrer"><strong>{r.title}</strong></a>
              <div style={{ marginTop: '0.25rem' }}>{r.desc}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Medications for GCA</h2>
        <p>
          Treatment usually begins with corticosteroids (such as prednisone) to calm inflammation quickly
          and protect vision. Many patients also take a steroid-sparing medicine to control the disease and
          lower the total amount of steroids needed. Two medicines are FDA-approved specifically for GCA:
        </p>
        <ul className="fact-list" style={{ marginTop: '1.25rem' }}>
          <li>
            <strong>Tocilizumab (Actemra)</strong>
            <div style={{ marginTop: '0.25rem' }}>An interleukin-6 (IL-6) inhibitor given by injection. It can help control GCA and reduce steroid exposure.</div>
          </li>
          <li>
            <a href="https://www.rinvoq.com/" target="_blank" rel="noopener noreferrer"><strong>Upadacitinib (Rinvoq)</strong></a>
            <div style={{ marginTop: '0.25rem' }}>An oral JAK inhibitor, FDA-approved for GCA in 2025 based on the SELECT-GCA trial.</div>
          </li>
        </ul>
        <div className="callout callout-info" style={{ marginTop: '1.5rem' }}>
          <span className="callout-icon" aria-hidden="true">&#8505;&#65039;</span>
          <div>
            <p className="callout-title">A note about JAK inhibitors (like upadacitinib)</p>
            <p>
              JAK inhibitors carry the FDA&rsquo;s strongest (&ldquo;boxed&rdquo;) warning for serious
              infections, blood clots, certain cancers, and major cardiovascular events such as heart attack
              and stroke, as well as a higher risk of death. These risks come largely from a study of a
              different JAK inhibitor in people with rheumatoid arthritis who had heart-disease risk factors;
              in the giant cell arteritis trial, these cardiovascular events were not seen, but the warnings
              still apply to this class of medicines. Your rheumatologist will weigh these risks with you,
              especially if you have heart-disease risk factors, a history of blood clots or cancer, or you
              smoke. <a href="https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-warnings-about-increased-risk-serious-heart-related-events-cancer-blood-clots-and-death" target="_blank" rel="noopener noreferrer">Read the FDA&rsquo;s JAK-inhibitor warning</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Living with treatment: steroids &amp; bone health</h2>
        <p>
          GCA is usually treated with corticosteroids (such as prednisone), sometimes for many months. Over
          time, steroids can weaken the bones, so it is worth asking your care team about protecting your
          bone health &mdash; including calcium and vitamin D, a bone-density (DEXA) scan, and whether a
          bone-protecting medication is right for you.
        </p>
        <ul className="fact-list" style={{ marginTop: '1.25rem' }}>
          <li>
            <a href="https://www.bonehealthandosteoporosis.org/" target="_blank" rel="noopener noreferrer"><strong>Bone Health &amp; Osteoporosis Foundation</strong></a>
            <div style={{ marginTop: '0.25rem' }}>Patient information on protecting your bones, including during long-term steroid use.</div>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Help paying for medication</h2>
        <p>
          If you are prescribed tocilizumab or upadacitinib and are worried about cost, the manufacturers run
          programs that may help with out-of-pocket expenses or provide the medicine at no cost for those who
          qualify. These are listed for your convenience and are not an endorsement &mdash; your care team and
          insurance plan can help you find the best option.
        </p>
        <ul className="fact-list" style={{ marginTop: '1.25rem' }}>
          <li>
            <a href="https://www.genentech-access.com/patient/brands/actemra.html" target="_blank" rel="noopener noreferrer"><strong>Tocilizumab (Actemra) Access Solutions</strong></a>
            <div style={{ marginTop: '0.25rem' }}>Patient support for coverage, co-pay assistance, and the Genentech Patient Foundation (free medicine for those who qualify).</div>
          </li>
          <li>
            <a href="https://www.rinvoq.com/resources/rinvoq-complete" target="_blank" rel="noopener noreferrer"><strong>Upadacitinib (Rinvoq) Complete</strong></a>
            <div style={{ marginTop: '0.25rem' }}>Co-pay savings for eligible commercially insured patients, plus myAbbVie Assist for those without coverage who qualify.</div>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Questions to ask your doctor</h2>

        <h3 className="subsection-title">If you&rsquo;re being evaluated for GCA</h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.9 }}>
          <li>Could my symptoms be giant cell arteritis?</li>
          <li>Do I need treatment right away to protect my vision?</li>
          <li>What tests will I need &mdash; blood tests, vascular ultrasound, or a biopsy?</li>
          <li>If a test is negative, could I still have GCA?</li>
          <li>What should I do if I notice vision changes while we are sorting this out?</li>
        </ul>

        <h3 className="subsection-title" style={{ marginTop: '1.75rem' }}>If you&rsquo;ve been diagnosed with GCA</h3>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.9 }}>
          <li>What are the side effects of steroids, and how will we protect my bones?</li>
          <li>Is a steroid-sparing medicine (such as tocilizumab or upadacitinib) right for me?</li>
          <li>What are the risks and benefits of each treatment option?</li>
          <li>How long will I be on treatment, and how will we lower the steroids over time?</li>
          <li>What signs mean my disease might be flaring?</li>
          <li>Do I need monitoring for medication side effects, such as lab tests, infection risk, or heart-disease risk?</li>
          <li>What should I do if I notice any vision changes?</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">What to expect at your vascular ultrasound</h2>
        <p>
          A vascular ultrasound is painless and uses sound waves &mdash; there are no needles and no
          radiation. A trained sonographer applies a little gel and gently moves a small probe over the
          arteries at your temples, and sometimes your arms and neck, to look for signs of inflammation.
          The exam typically takes under an hour. Your care team will give you any specific instructions
          before your visit.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Common terms</h2>
        <ul className="fact-list">
          {glossary.map((g) => (
            <li key={g.term}>
              <strong>{g.term}</strong>
              <div style={{ marginTop: '0.25rem' }}>{g.def}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">En espa&ntilde;ol</h2>
        <ul className="fact-list">
          <li>
            <a href="https://medlineplus.gov/spanish/giantcellarteritis.html" target="_blank" rel="noopener noreferrer"><strong>MedlinePlus en espa&ntilde;ol — Arteritis de c&eacute;lulas gigantes</strong></a>
            <div style={{ marginTop: '0.25rem' }}>Informaci&oacute;n clara y confiable de la Biblioteca Nacional de Medicina.</div>
          </li>
          <li>
            <a href="https://vasculitisfoundation.org/" target="_blank" rel="noopener noreferrer"><strong>Vasculitis Foundation</strong></a>
            <div style={{ marginTop: '0.25rem' }}>Ofrece materiales educativos seleccionados en espa&ntilde;ol.</div>
          </li>
        </ul>
      </section>
    </main>
  );
}
