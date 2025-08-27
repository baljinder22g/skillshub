import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-700 text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="SkillsHub" className="h-8 w-8" />
          <span className="text-lg sm:text-xl font-bold">SkillsHub @ GSS Phase 1</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/courses" className={navLinkClass}>Courses</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
