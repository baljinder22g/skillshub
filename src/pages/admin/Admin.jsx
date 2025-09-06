import { Link, Outlet } from 'react-router-dom'
import { useLang } from '../../components/LanguageContext.jsx'

const labels = {
  en: {
    title: 'Admin Dashboard',
    assets: 'Assets',
    finance: 'Financial Details',
    community: 'Community Thread',
    other: 'Other',
  },
  pa: {
    title: 'ਐਡਮਿਨ ਡੈਸ਼ਬੋਰਡ',
    assets: 'ਸੈਂਟਰ ਦੇ ਆਸੈਟ',
    finance: 'ਵਿੱਤੀ ਵੇਰਵੇ',
    community: 'ਕਮਿਊਨਿਟੀ ਥ੍ਰੈੱਡ',
    other: 'ਹੋਰ',
  }
}

export default function Admin() {
  const { lang } = useLang()
  const t = labels[lang]
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700 mb-6">{t.title}</h2>
      <nav className="mb-8 flex gap-4">
        <Link to="assets" className="px-4 py-2 bg-brand-700 text-white rounded-lg">{t.assets}</Link>
        <Link to="finance" className="px-4 py-2 bg-brand-700 text-white rounded-lg">{t.finance}</Link>
        <Link to="community" className="px-4 py-2 bg-brand-700 text-white rounded-lg">{t.community}</Link>
        <Link to="placeholder" className="px-4 py-2 bg-brand-700 text-white rounded-lg">{t.other}</Link>
      </nav>
      <Outlet />
    </section>
  )
}