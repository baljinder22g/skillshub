import { useLang } from '../components/LanguageContext.jsx'

export default function Home() {
  const { lang } = useLang()
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-brand-700">
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow text-accent-orange">
            {lang === 'en' ? 'Education for All' : 'ਸਿੱਖਿਆ ਸਭ ਲਈ'}
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Computer & Digital Skills for Youth and Seniors at Gurudwara Singh Sabha, Phase 1 (Mohali)'
              : 'ਯੁਵਾਂ ਅਤੇ ਵੱਡਿਆਂ ਲਈ ਮੁਫ਼ਤ ਕੰਪਿਊਟਰ ਅਤੇ ਡਿਜ਼ੀਟਲ ਹੁਨਰ, ਗੁਰਦੁਆਰਾ ਸਿੰਘ ਸਭਾ, ਫੇਜ਼ 1 (ਮੋਹਾਲੀ)'}
          </p>
          <a href="/courses" className="inline-block mt-6 bg-accent-orange text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-brand-600">
            {lang === 'en' ? 'Explore Courses' : 'ਕੋਰਸ ਵੇਖੋ'}
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[
          {
            title: lang === 'en' ? 'Free & Community-Driven' : 'ਮੁਫ਼ਤ ਅਤੇ ਸਮੁਦਾਇਕ',
            text: lang === 'en'
              ? 'Volunteer-led classes at the Gurudwara Sahib.'
              : 'ਗੁਰਦੁਆਰਾ ਸਾਹਿਬ ਵਿੱਚ ਸੇਵਾਦਾਰਾਂ ਵੱਲੋਂ ਕਲਾਸਾਂ।'
          },
          {
            title: lang === 'en' ? 'Beginner Friendly' : 'ਸ਼ੁਰੂਆਤੀ ਲਈ ਆਸਾਨ',
            text: lang === 'en'
              ? 'No prior experience required. Simple syllabus.'
              : 'ਕੋਈ ਪੁਰਾਣਾ ਤਜਰਬਾ ਲੋੜੀਂਦਾ ਨਹੀਂ। ਸਾਦਾ ਸਿਲੇਬਸ।'
          },
          {
            title: lang === 'en' ? 'Job-Ready Skills' : 'ਨੌਕਰੀ ਲਈ ਹੁਨਰ',
            text: lang === 'en'
              ? 'MS Office, Internet Safety, Digital Payments & more.'
              : 'MS Office, ਇੰਟਰਨੈੱਟ ਸੁਰੱਖਿਆ, ਡਿਜ਼ੀਟਲ ਭੁਗਤਾਨ ਆਦਿ।'
          },
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