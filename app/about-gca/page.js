export const metadata = {
  title: 'About GCA | UW Giant Cell Arteritis Fast Track Clinic',
  description: 'A plain-language guide to giant cell arteritis (GCA): what it is, warning signs, why it is urgent, how it is diagnosed, and how it is treated.',
};

export default function AboutGCA() {
  return (
    <main className="main">
      <h1 className="page-title">Understanding Giant Cell Arteritis (GCA)</h1>
      <p className="page-intro">
        A plain-language guide for patients and families. If you think you may have GCA, contact your
        primary care doctor or rheumatologist &mdash; and if you have sudden vision changes, treat it as an
        emergency.
      </p>

      <div className="callout callout-emergency">
        <span className="callout-icon" aria-hidden="true">&#9888;&#65039;</span>
        <div>
          <p className="callout-title">Sudden vision loss is an emergency</p>
          <p>If you have sudden vision loss or changes and are concerned about GCA, go to the nearest emergency room right away. Early treatment can protect your sight.</p>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">What is GCA?</h2>
        <p>
          Giant cell arteritis (GCA) is a condition in which the body&rsquo;s immune system causes
          inflammation (swelling) in the walls of medium and large arteries &mdash; most often the arteries
          around the temples and scalp, and sometimes larger arteries like the aorta. GCA is a type of
          vasculitis, which means &ldquo;inflammation of blood vessels.&rdquo; It almost always occurs in people
          age 50 and older.
        </p>
        <p style={{ marginTop: '1rem' }}>
          When these arteries become inflamed, blood cannot flow through them normally. If the arteries
          that supply the eyes are affected, GCA can cause sudden, permanent vision loss. The good news is
          that when GCA is found and treated early, vision loss can usually be prevented.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Warning signs and symptoms</h2>
        <p>GCA can cause one or more of the following. Symptoms can come on gradually or suddenly:</p>
        <ul className="fact-list">
          <li><strong>New headache</strong> &mdash; often over the temples, and different from past headaches</li>
          <li><strong>Scalp tenderness</strong> &mdash; soreness when brushing your hair or touching your scalp</li>
          <li><strong>Jaw pain with chewing</strong> &mdash; aching or fatigue in the jaw while eating</li>
          <li><strong>Vision changes</strong> &mdash; blurring, double vision, or loss of vision in one or both eyes</li>
          <li><strong>Fevers, night sweats, or weight loss</strong></li>
          <li><strong>Shoulder and hip stiffness</strong> &mdash; especially in the morning (a related condition called polymyalgia rheumatica)</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Why fast diagnosis matters</h2>
        <p>
          The most feared complication of GCA is sudden, permanent vision loss, which can happen with
          little warning. Because treatment is most effective at protecting vision when it is started
          quickly, GCA is considered a medical urgency. This is the reason our Fast Track Clinic exists:
          to evaluate people with suspected GCA rapidly so treatment is not delayed.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">How GCA is diagnosed</h2>
        <p>Doctors use a combination of tools to diagnose GCA:</p>
        <ul className="fact-list">
          <li><strong>Your story and exam</strong> &mdash; your symptoms and a physical examination</li>
          <li><strong>Blood tests</strong> &mdash; markers of inflammation such as ESR and CRP (note: these can occasionally be normal in GCA)</li>
          <li><strong>Vascular ultrasound</strong> &mdash; a painless scan that can show inflammation in the artery walls</li>
          <li><strong>Temporal artery biopsy</strong> &mdash; a small sample of the temporal artery, used in some cases to confirm the diagnosis</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">How GCA is treated</h2>
        <p>
          Treatment is usually started quickly &mdash; often before every test is complete &mdash; to protect
          your vision. The mainstay of treatment is corticosteroids (such as prednisone) to calm the
          inflammation. Many patients also take a steroid-sparing medication, such as tocilizumab, which can
          help control the disease and reduce the amount of steroids needed over time. Steroids are lowered
          slowly over months under your doctor&rsquo;s guidance. Because long-term steroids can affect the
          bones, your care team will also help protect your bone health.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">What to expect at the Fast Track Clinic</h2>
        <p>
          If your doctor refers you, you will be contacted for a prompt evaluation that typically includes
          a vascular ultrasound and an assessment by a rheumatologist. Our goal is to reach a diagnosis
          quickly so that the right treatment can begin without delay. Please note that referrals come
          through your doctor &mdash; patients should not contact the clinic directly.
        </p>
      </section>

      <div className="callout callout-info">
        <span className="callout-icon" aria-hidden="true">&#128218;</span>
        <div>
          <p className="callout-title">Want a trusted patient resource?</p>
          <p>
            The American College of Rheumatology maintains a patient guide to GCA:{' '}
            <a href="https://rheumatology.org/patients/giant-cell-arteritis" target="_blank" rel="noopener noreferrer">rheumatology.org/patients/giant-cell-arteritis</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
