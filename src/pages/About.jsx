export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700">About the Skill Center</h2>
      <p className="mt-3 text-gray-700">
        The Skill Center operates within <strong>Gurudwara Singh Sabha, Phase 1 (Mohali)</strong> as a seva-driven initiative.
        Our volunteers teach free digital literacy to youth and senior citizens.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-brand-700">Our Values</h3>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            <li>Seva (ਸੇਵਾ): Serve the community through education</li>
            <li>Simplicity: Beginner-first teaching approach</li>
            <li>Safety: Strong focus on digital safety & fraud awareness</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-brand-700">Timings & Venue</h3>
          <p className="mt-3 text-gray-700">
            EveryDay • 04:00 PM – 08:00 PM<br/>
            Venue: Gurudwara Singh Sabha, Phase 1, Mohali
          </p>
        </div>
      </div>
    </section>
  )
}
