import { useLang } from '../components/LanguageContext.jsx'

const labels = {
  en: {
    title: 'Digital Fraud Session Tutor',
    name: 'Mr. Amanpreet Singh',
    desc: 'Cybersecurity Enthusiast & Volunteer\n5+ years experience in digital safety education',
    contact: 'Reach out for queries'
  },
  pa: {
    title: 'ਡਿਜ਼ੀਟਲ ਧੋਖਾਧੜੀ ਸੈਸ਼ਨ ਟਿਊਟਰ',
    name: 'ਸ਼੍ਰੀ ਅਮਨਪ੍ਰੀਤ ਸਿੰਘ',
    desc: 'ਸਾਈਬਰਸੁਰੱਖਿਆ ਉਤਸ਼ਾਹੀ & ਸੇਵਾਦਾਰ\n5+ ਸਾਲ ਦਾ ਤਜਰਬਾ ਡਿਜ਼ੀਟਲ ਸੁਰੱਖਿਆ ਸਿੱਖਿਆ ਵਿੱਚ',
    contact: 'ਸਵਾਲਾਂ ਲਈ ਸੰਪਰਕ ਕਰੋ'
  }
}

export default function DigitalFraudTutor() {
  const { lang } = useLang()
  const t = labels[lang]
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700">{t.title}</h2>
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <h3 className="text-xl font-semibold text-brand-700">{t.name}</h3>
        <p className="mt-3 text-gray-700" style={{ whiteSpace: 'pre-line' }}>{t.desc}</p>
        <p className="mt-4 text-gray-600">
          {t.contact}: <a href="mailto:info@skillshub.co.in" className="underline text-brand-700">info@skillshub.co.in</a>
        </p>
      </div>
    </section>
  )
}