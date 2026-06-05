export default function FAQs() {
  const REDCAP_URL = "https://redcap.iths.org/surveys/?s=R7M39DNCNJ48DPMF";

  return (
    <main className="main">
      <h1 className="page-title">Frequently Asked Questions</h1>

      <section className="section">
        <h2 className="section-title">FAQs for Patients</h2>

        <div className="faq-item">
          <h3 className="faq-question">What is Giant Cell Arteritis (GCA)?</h3>
          <p className="faq-answer">
            GCA is one type of vasculitis, characterized by inflammation in the blood vessels.{' '}
            <a href="https://rheumatology.org/patients/giant-cell-arteritis" target="_blank" rel="noopener noreferrer">Learn more about GCA here</a>.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What symptoms should make me concerned for GCA?</h3>
          <p className="faq-answer">
            GCA only occurs in patients 50 years and older. New headaches are common and patients may have pain or
            swelling in the blood vessels around their ears. Other symptoms include face or jaw pain when chewing. Some
            have tenderness over the scalp, night sweats, weight loss, and/or{' '}
            <a href="https://rheumatology.org/patients/polymyalgia-rheumatica" target="_blank" rel="noopener noreferrer">polymyalgia rheumatica</a>.
            Blood tests often show signs of inflammation with an elevated erythrocyte sedimentation rate (ESR) and/or
            C reactive protein (CRP). Vision loss is a feared complication and may be irreversible.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What does the GCA Fast Track Clinic do?</h3>
          <p className="faq-answer">
            The Fast Track Clinic is a service offered by the University of Washington for patients with a high
            likelihood of new onset GCA. Doctors can refer their patients by contacting us. Urgent evaluation includes
            vascular ultrasound and rheumatology evaluation. Some people may require a temporal artery biopsy as well.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How can I be referred to the GCA Fast Track Clinic?</h3>
          <p className="faq-answer">
            Please contact your primary care doctor for referral. If you have vision changes and are concerned about
            GCA, please go to the emergency room for urgent evaluation.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">FAQs for Providers</h2>

        <div className="faq-item">
          <h3 className="faq-question">What should I do for patients with new onset GCA?</h3>
          <p className="faq-answer">
            If you are a rheumatologist, please fill out{' '}
            <a href={REDCAP_URL} target="_blank" rel="noopener noreferrer">this form</a>{' '}
            and your patient will be contacted shortly between the hours of 8am and 5pm, Monday through Friday, excluding
            holidays. Vascular ultrasounds are primarily performed at the University of Washington in the{' '}
            <a href="https://www.uwmedicine.org/locations/vascular-laboratory-uwmc" target="_blank" rel="noopener noreferrer">vascular lab</a>.
            Results will be communicated directly to you. If you are not a rheumatologist, please call the operator at
            206-744-3000 and ask for the rheumatology fellow on call for the Fast Track Clinic.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">What should I do if my patient has new onset vision loss?</h3>
          <p className="faq-answer">
            Please send them immediately to the emergency room for evaluation by ophthalmology. They may require IV
            steroids. If the patient is local, please ask them to go to Harborview ER due to availability of
            ophthalmology.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">Does a negative vascular ultrasound rule out GCA?</h3>
          <p className="faq-answer">
            A negative vascular ultrasound cannot completely rule out GCA. If a patient has classic signs/symptoms, they
            likely should receive a temporal artery biopsy. Steroids may reduce the changes seen on vascular ultrasound.
          </p>
        </div>
      </section>
    </main>
  );
}
