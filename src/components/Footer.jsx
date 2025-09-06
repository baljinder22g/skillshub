import { useLang } from './LanguageContext.jsx'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="bg-brand-700 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        {lang === 'en'
          ? '© 2025 SkillsHub @ Gurudwara Singh Sabha, Phase 1. All rights reserved.'
          : '© 2025 SkillsHub @ ਗੁਰਦੁਆਰਾ ਸਿੰਘ ਸਭਾ, ਫੇਜ਼ 1. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।'}
      </div>
    </footer>
  )
}