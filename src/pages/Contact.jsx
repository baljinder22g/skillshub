import { useLang } from '../components/LanguageContext.jsx'

const labels = {
  en: {
    title: 'Contact Us',
    desc: 'For queries, suggestions, or volunteering, reach out to us:',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    addressText: 'Gurudwara Singh Sabha, Phase 1, Mohali, Punjab'
  },
  pa: {
    title: 'ਸੰਪਰਕ ਕਰੋ',
    desc: 'ਸਵਾਲ, ਸੁਝਾਵ ਜਾਂ ਸੇਵਾ ਲਈ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ:',
    email: 'ਈਮੇਲ',
    phone: 'ਫ਼ੋਨ',
    address: 'ਪਤਾ',
    addressText: 'ਗੁਰਦੁਆਰਾ ਸਿੰਘ ਸਭਾ, ਫੇਜ਼ 1, ਮੋਹਾਲੀ, ਪੰਜਾਬ'
  }
}

export default function Contact() {
  const { lang } = useLang()
  const t = labels[lang]
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700 mb-4">{t.title}</h2>
      <p className="mb-6 text-gray-700">{t.desc}</p>
      <ul className="space-y-2 text-gray-700">
        <li><strong>{t.email}:</strong> <a href="mailto:info@skillshub.co.in" className="underline text-brand-700">info@skillshub.co.in</a></li>
        <li><strong>{t.phone}:</strong> <a href="tel:+91 9855340340" className="underline text-brand-700">+91-9876543210</a></li>
        <li><strong>{t.address}:</strong> {t.addressText}</li>
      </ul>
    </section>
  )
}