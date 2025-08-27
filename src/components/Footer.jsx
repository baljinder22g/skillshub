export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-3 gap-6">
        <div>
          <h4 className="text-white font-semibold">SkillsHub • Gurudwara Singh Sabha</h4>
          <p className="text-sm mt-2">ਸਿੱਖਿਆ • ਸੇਵਾ • ਸਫਲਤਾ — Education for All.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Timings</h5>
          <p className="text-sm mt-2">EveryDay 04:00 PM – 08:00 PM</p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Contact</h5>
          <p className="text-sm mt-2">Email: info@skillshub.co.in</p>
        </div>
      </div>
      <div className="text-center text-xs py-3 border-t border-white/10">
        © {new Date().getFullYear()} SkillsHub • Work in Progress
      </div>
    </footer>
  )
}
