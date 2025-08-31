import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-700 text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="SkillsHub" className="h-8 w-8" />
          <span className="text-lg sm:text-xl font-bold">SkillsHub @ GSS Phase 1</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
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
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/courses" className={navLinkClass} onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  )
}