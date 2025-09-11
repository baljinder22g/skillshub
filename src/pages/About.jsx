import { useLang } from '../components/LanguageContext.jsx'

const labels = {
  en: {
    title: 'About Us',
    desc: 'SkillsHub is a community initiative at Gurudwara Singh Sabha, Phase 1, Mohali. Our goal is to empower youth and seniors with digital literacy and job-ready computer skills, free of cost.',
    points: [
      'Volunteer-run classes',
      'Focus on practical skills',
      'Inclusive for all ages',
      'Special sessions for job seekers'
    ],
    pdfDesc: 'Download our detailed Project Plan (PDF):',
    pdf: 'Download Project Plan (PDF)'
  },
  pa: {
    title: 'ਸਾਡੇ ਬਾਰੇ',
    desc: 'SkillsHub ਗੁਰਦੁਆਰਾ ਸਿੰਘ ਸਭਾ, ਫੇਜ਼ 1, ਮੋਹਾਲੀ ਵਿੱਚ ਇੱਕ ਸਮੁਦਾਇਕ ਪਹਲ ਹੈ। ਸਾਡਾ ਮਕਸਦ ਯੁਵਾਂ ਅਤੇ ਵੱਡਿਆਂ ਨੂੰ ਮੁਫ਼ਤ ਡਿਜ਼ੀਟਲ ਸਿੱਖਿਆ ਅਤੇ ਨੌਕਰੀ-ਯੋਗ ਕੰਪਿਊਟਰ ਹੁਨਰ ਦੇਣਾ ਹੈ।',
    points: [
      'ਸੇਵਾਦਾਰਾਂ ਵੱਲੋਂ ਚਲਾਈਆਂ ਕਲਾਸਾਂ',
      'ਅਮਲੀ ਹੁਨਰ ਤੇ ਧਿਆਨ',
      'ਹਰ ਉਮਰ ਲਈ ਖੁੱਲ੍ਹਾ',
      'ਨੌਕਰੀ ਲੱਭਣ ਵਾਲਿਆਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਸੈਸ਼ਨ'
    ],
    pdfDesc: 'ਸਾਡੀ ਵਿਸਥਾਰਤ ਪ੍ਰੋਜੈਕਟ ਯੋਜਨਾ (PDF) ਡਾਊਨਲੋਡ ਕਰੋ:',
    pdf: 'ਪ੍ਰੋਜੈਕਟ ਯੋਜਨਾ (PDF) ਡਾਊਨਲੋਡ ਕਰੋ'
  }
}
const pdfUrl = '/SkillsHub_Brochure.pdf'

export default function About() {
  const { lang } = useLang()
  const t = labels[lang]
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700 mb-4">{t.title}</h2>
      <p className="mb-6 text-gray-700">{t.desc}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
        {t.points.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
        <div className="mb-4 text-gray-700 font-medium">{t.pdfDesc}</div>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg mb-8"
      >
        {t.pdf}
      </a>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-brand-700 mb-2">
          {lang === 'en' ? 'Location Map' : 'ਟਿਕਾਣਾ ਨਕਸ਼ਾ'}
        </h3>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789!2d76.722345!3d30.704649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedc123456789%3A0xabcdef123456789!2sGurudwara%20Singh%20Sabha%20Phase%201%2C%20Mohali!5e0!3m2!1sen!2sin!4v1694091234567!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gurudwara Singh Sabha Phase 1 Map"
          ></iframe>
        </div>
      </div>
    </section>
  )
}