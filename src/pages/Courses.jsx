export default function Courses() {
  const modules = [
    {
      title: 'Module 1: Computer Basics (ਕੰਪਿਊਟਰ ਬੁਨਿਆਦ)',
      items: [
        'What is a computer? Hardware vs Software',
        'Using mouse & keyboard, files & folders',
        'Windows desktop, taskbar, settings',
      ]
    },
    {
      title: 'Module 2: Internet & Email (ਇੰਟਰਨੈੱਟ ਤੇ ਈਮੇਲ)',
      items: [
        'Safe browsing, search basics, downloads',
        'Create & use email, attachments, etiquette',
        'YouTube for learning, Social media hygiene',
      ]
    },
    {
      title: 'Module 3: MS Office Essentials',
      items: [
        'Microsoft Word: typing, formatting, saving, printing',
        'Excel basics: rows, columns, simple formulas, sorting',
        'PowerPoint: simple slides, themes, share as PDF',
      ]
    },
    {
      title: 'Module 4: Digital Payments & Safety',
      items: [
        'UPI (BHIM, PhonePe, Paytm), QR codes',
        'Recognize scams: phishing, OTP safety, reporting fraud',
        'Strong passwords, 2FA, device updates & backups',
      ]
    },
    {
      title: 'Module 5: Career Readiness',
      items: [
        'Typing practice, resume creation, basic email writing',
        'Intro to LinkedIn & job portals',
        'Optional: intro to coding (HTML) & AI awareness talk',
      ]
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700">💻 Basic Computer Education for Beginners</h2>
      <p className="mt-3 text-gray-700">
        Course duration: 6–8 weeks • Batches on Sundays • Certificate of participation.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {modules.map((m) => (
          <div key={m.title} className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-brand-700">{m.title}</h3>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
              {m.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-brand-700 text-white rounded-2xl text-center">
        <h3 className="text-xl font-semibold">Register your interest (ਦਿਲਚਸਪੀ ਦਰਜ ਕਰੋ)</h3>
        <p className="mt-1 text-sm opacity-90">Fill a quick Google Form so we can schedule your batch.</p>
        <a href="https://forms.gle/WAmZgnTbMznav3vt5" target="_blank" rel="noreferrer"
           className="inline-block mt-4 bg-white text-brand-700 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg">
          Open Registration Form
        </a>
      </div>
    </section>
  )
}
