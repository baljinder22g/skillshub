import { useLang } from '../../components/LanguageContext.jsx'

const labels = {
  en: {
    title: 'Financial Details',
    desc: 'View and update financial records here.',
  },
  pa: {
    title: 'ਵਿੱਤੀ ਵੇਰਵੇ',
    desc: 'ਵਿੱਤੀ ਰਿਕਾਰਡ ਇੱਥੇ ਵੇਖੋ ਅਤੇ ਅੱਪਡੇਟ ਕਰੋ।',
  }
}

export default function AdminFinance() {
  const { lang } = useLang()
  const t = labels[lang]
  return (
    <div>
      <h3 className="text-xl font-semibold text-brand-700 mb-4">{t.title}</h3>
      <p>{t.desc}</p>
      {/* Add financial management UI here */}
    </div>
  )
}