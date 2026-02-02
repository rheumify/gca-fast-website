export default function FastTrackClinic() {
    return (
          <main className="main">
            <h1 className="page-title">GCA Fast Track Clinic Services</h1>

      <div className="card-grid">
              <div className="card">
                <h2 className="card-title">Rheumatologists</h2>
            <p>
                  If you have a patient with possible new onset GCA or GCA flare, please contact us.
                  Your patient will be contacted between the hours of 8am-5pm Monday through Friday.
      </p>
            <p className="card-note">
                  This service is for rheumatologists only.
      </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            For patients with concern for visual changes, please send them to the emergency room for evaluation by
            ophthalmology and consideration of IV steroids.
              </p>
              </div>

        <div className="card">
                        <h2 className="card-title">Providers (Non-Rheumatologists)</h2>
          <p>
                          If you suspect new onset GCA, please call the UW Operator at 206-744-3000 and ask for the fast track clinic
            rheumatology fellow on call. This service is currently available 24/7.
              </p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            For patients with concern for visual changes, please send them to the emergency room for evaluation by
            ophthalmology and consideration of IV steroids.
              </p>
              </div>
              </div>

      <div className="card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h2 className="card-title">Patients</h2>
        <p>
                        If you suspect you have giant cell arteritis, please contact your primary care doctor or rheumatologist and if
          appropriate, they can contact us for evaluation. Please do not contact the Fast Track Clinic directly.
            </p>
        <p style={{ marginTop: '1rem' }}>
          If you have vision changes/loss and are concerned for Giant Cell Arteritis, please contact your primary care
          doctor or ophthalmology and consider going to the emergency room.
            </p>
            </div>
            </main>
  );
}
