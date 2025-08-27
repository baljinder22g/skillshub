export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center">
        <img src="/assets/images/hero-banner.svg" alt="Community Learning"
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow">ਸਿੱਖਿਆ ਸਭ ਲਈ • Education for All</h1>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Free Computer & Digital Skills for Youth and Seniors at Gurudwara Singh Sabha, Phase 1 (Mohali)
          </p>
          <a href="/courses" className="inline-block mt-6 bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg">
            Explore Courses
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Free & Community-Driven', text: 'Volunteer-led classes at the Gurudwara Sahib.' },
          { title: 'Beginner Friendly', text: 'No prior experience required. ਸਾਦਾ ਤੇ ਆਸਾਨ ਸਿਲੇਬਸ।' },
          { title: 'Job-Ready Skills', text: 'MS Office, Internet Safety, Digital Payments & more.' },
        ].map(card => (
          <div key={card.title} className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-brand-700">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
