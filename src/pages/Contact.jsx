export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700">Contact & Location</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-brand-700">Reach Us</h3>
          <p className="mt-2 text-gray-700">
            📍 Gurudwara Singh Sabha, Phase 1, Mohali<br/>
            📧 info@skillshub.co.in
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Everyone is welcome. ਸਵਾਗਤ ਹੈ!
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <iframe
            title="Gurudwara Singh Sabha Phase 1 Map"
            src="https://www.google.com/maps?q=30.7276554,76.7170392&hl=en&z=16&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
