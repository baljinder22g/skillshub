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
    ]
  },
  pa: {
    title: 'ਸਾਡੇ ਬਾਰੇ',
    desc: 'SkillsHub ਗੁਰਦੁਆਰਾ ਸਿੰਘ ਸਭਾ, ਫੇਜ਼ 1, ਮੋਹਾਲੀ ਵਿੱਚ ਇੱਕ ਸਮੁਦਾਇਕ ਪਹਲ ਹੈ। ਸਾਡਾ ਮਕਸਦ ਯੁਵਾਂ ਅਤੇ ਵੱਡਿਆਂ ਨੂੰ ਮੁਫ਼ਤ ਡਿਜ਼ੀਟਲ ਸਿੱਖਿਆ ਅਤੇ ਨੌਕਰੀ-ਯੋਗ ਕੰਪਿਊਟਰ ਹੁਨਰ ਦੇਣਾ ਹੈ।',
    points: [
      'ਸੇਵਾਦਾਰਾਂ ਵੱਲੋਂ ਚਲਾਈਆਂ ਕਲਾਸਾਂ',
      'ਅਮਲੀ ਹੁਨਰ ਤੇ ਧਿਆਨ',
      'ਹਰ ਉਮਰ ਲਈ ਖੁੱਲ੍ਹਾ',
      'ਨੌਕਰੀ ਲੱਭਣ ਵਾਲਿਆਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਸੈਸ਼ਨ'
    ]
  }
}

export default function About() {
  const { lang } = useLang()
  const t = labels[lang]
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700 mb-4">{t.title}</h2>
      <p className="mb-6 text-gray-700">{t.desc}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {t.points.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  )
}