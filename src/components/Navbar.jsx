import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from './LanguageContext.jsx'

const navLabels = {
  en: {
    home: 'Home',
    courses: 'Courses',
    about: 'About',
    contact: 'Contact',
    admin: 'Admin',
    switch: 'ਪੰਜਾਬੀ',
  },
  pa: {
    home: 'ਮੁੱਖ ਪੰਨਾ',
    courses: 'ਕੋਰਸ',
    about: 'ਬਾਰੇ',
    contact: 'ਸੰਪਰਕ',
    admin: 'ਐਡਮਿਨ',
    switch: 'English',
  }
}

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang } = useLang()
  const labels = navLabels[lang]

  return (
    <header className="sticky top-0 z-50 bg-brand-700 text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="logo.svg" alt="SkillsHub Logo" className="h-10 w-10 rounded-lg shadow" />
          <span className="text-lg sm:text-xl font-bold">
            {lang === 'en' ? 'SkillsHub @ GSS Phase 1' : 'ਸਕਿਲਸਹੱਬ @ ਜੀਐੱਸਐੱਸ ਫੇਜ਼ 1'}
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>{labels.home}</NavLink>
          <NavLink to="/courses" className={navLinkClass}>{labels.courses}</NavLink>
          <NavLink to="/about" className={navLinkClass}>{labels.about}</NavLink>
          <NavLink to="/contact" className={navLinkClass}>{labels.contact}</NavLink>
          <NavLink to="/admin" className={navLinkClass}>{labels.admin}</NavLink>

          <button
            className="ml-4 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold"
            onClick={toggleLang}
          >
            {labels.switch}
          </button>
        </nav>
        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-lg hover:bg-white/10"
          aria-label="Open menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9h16M6 15h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="sm:hidden bg-brand-700 px-4 pb-3 flex flex-col gap-1">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>{labels.home}</NavLink>
          <NavLink to="/courses" className={navLinkClass} onClick={() => setMenuOpen(false)}>{labels.courses}</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>{labels.about}</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>{labels.contact}</NavLink>
          <NavLink to="/admin" className={navLinkClass} onClick={() => setMenuOpen(false)}>{labels.admin}</NavLink>
          <button
            className="mt-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold"
            onClick={() => { toggleLang(); setMenuOpen(false); }}
          >
            {labels.switch}
          </button>
        </nav>
      )}
    </header>
  )
}