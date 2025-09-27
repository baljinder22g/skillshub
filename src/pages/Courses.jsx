import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../components/LanguageContext.jsx'

const labels = {
  en: {
    title: 'Courses Offered',
    basic: 'Basic Computer Education',
    fraud: 'Digital Fraud Awareness',
    genai: 'Introduction to GenAI & AgenticAI',
    professional: 'Professional IT Courses',
    registerBasic: 'Register for Basic Computer Education',
    registerFraud: 'Register for Digital Fraud Session',
    registerGenai: 'Register for GenAI & AgenticAI Course',
    registerProfessional: 'Register for Professional IT Courses',
    meetTutor: 'Meet the Tutor',
    basicDesc: 'Learn the fundamentals of computers, internet, and digital skills for everyday life.',
    basicList: [
      'Introduction to computers and hardware',
      'Basic Windows & file management',
      'Internet browsing & email',
      'MS Office basics (Word, Excel, PowerPoint)',
      'Safe internet practices'
    ],
    fraudDesc: 'Learn how to protect yourself from online scams, phishing, and digital fraud.',
    fraudList: [
      'Recognize common online scams',
      'Protect your passwords and personal info',
      'Safe digital payments',
      'Reporting fraud and getting help'
    ],
    genaiDesc: 'This course is designed for computer graduates and working professionals who use computers daily and want to learn about Generative AI and Agentic AI.',
    genaiList: [
      'Overview of Generative AI (GenAI) and Agentic AI',
      'Applications in the workplace and job search',
      'Hands-on with popular GenAI tools (ChatGPT, Copilot, etc.)',
      'Ethics, safety, and responsible use of AI',
      'How Agentic AI can automate tasks and workflows'
    ],
    professionalDesc: 'These courses are for students pursuing graduation in computer subjects or graduates in any subject looking for a career in IT jobs. Choose from a wide range of professional IT courses:',
    professionalList: [
      'Cloud Computing (AWS, Azure, GCP)',
      'Java Development',
      'Web Designing',
      'Web Development',
      'DevOps',
      'ServiceNow',
      'Automation Testing',
      'Artificial Intelligence (AI)',
      'ETL & Data Engineering',
      'Agile Courses',
      'Low Code Platforms (e.g., Power Platform, Mendix, OutSystems)',
      'And many more...'
    ],
    professionalNote: 'Registration is open for: Kids pursuing graduation in computer subjects or any graduate looking for a career in IT jobs.'
  },
  pa: {
    title: 'ਪੇਸ਼ ਕੀਤੇ ਕੋਰਸ',
    basic: 'ਮੁੱਢਲਾ ਕੰਪਿਊਟਰ ਸਿੱਖਿਆ',
    fraud: 'ਡਿਜ਼ੀਟਲ ਧੋਖਾਧੜੀ ਜਾਗਰੂਕਤਾ',
    genai: 'GenAI ਅਤੇ AgenticAI ਦਾ ਪਰਚਿਆ',
    professional: 'ਪ੍ਰੋਫੈਸ਼ਨਲ IT ਕੋਰਸ',
    registerBasic: 'ਮੁੱਢਲੇ ਕੰਪਿਊਟਰ ਕੋਰਸ ਲਈ ਰਜਿਸਟਰ ਕਰੋ',
    registerFraud: 'ਡਿਜ਼ੀਟਲ ਧੋਖਾਧੜੀ ਸੈਸ਼ਨ ਲਈ ਰਜਿਸਟਰ ਕਰੋ',
    registerGenai: 'GenAI & AgenticAI ਕੋਰਸ ਲਈ ਰਜਿਸਟਰ ਕਰੋ',
    registerProfessional: 'ਪ੍ਰੋਫੈਸ਼ਨਲ IT ਕੋਰਸ ਲਈ ਰਜਿਸਟਰ ਕਰੋ',
    meetTutor: 'ਟਿਊਟਰ ਨੂੰ ਮਿਲੋ',
    basicDesc: 'ਕੰਪਿਊਟਰ, ਇੰਟਰਨੈੱਟ ਅਤੇ ਡਿਜ਼ੀਟਲ ਹੁਨਰ ਦੀਆਂ ਮੁੱਢਲੀਆਂ ਜਾਣਕਾਰੀਆਂ ਸਿੱਖੋ।',
    basicList: [
      'ਕੰਪਿਊਟਰ ਅਤੇ ਹਾਰਡਵੇਅਰ ਦਾ ਪਰਚਿਆ',
      'Windows ਅਤੇ ਫਾਈਲ ਮੈਨੇਜਮੈਂਟ',
      'ਇੰਟਰਨੈੱਟ ਬਰਾਊਜ਼ਿੰਗ ਅਤੇ ਈਮੇਲ',
      'MS Office (Word, Excel, PowerPoint) ਦੀਆਂ ਮੁੱਢਲੀਆਂ ਜਾਣਕਾਰੀਆਂ',
      'ਸੁਰੱਖਿਅਤ ਇੰਟਰਨੈੱਟ ਵਰਤੋਂ'
    ],
    fraudDesc: 'ਆਨਲਾਈਨ ਧੋਖਾਧੜੀ, ਫਿਸ਼ਿੰਗ ਅਤੇ ਡਿਜ਼ੀਟਲ ਧੋਖੇ ਤੋਂ ਬਚਣ ਦੇ ਤਰੀਕੇ ਸਿੱਖੋ।',
    fraudList: [
      'ਆਮ ਆਨਲਾਈਨ ਧੋਖਾਧੜੀਆਂ ਨੂੰ ਪਛਾਣੋ',
      'ਆਪਣੇ ਪਾਸਵਰਡ ਅਤੇ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਦੀ ਸੁਰੱਖਿਆ',
      'ਸੁਰੱਖਿਅਤ ਡਿਜ਼ੀਟਲ ਭੁਗਤਾਨ',
      'ਧੋਖਾਧੜੀ ਦੀ ਰਿਪੋਰਟਿੰਗ ਅਤੇ ਮਦਦ ਲੈਣਾ'
    ],
    genaiDesc: 'ਇਹ ਕੋਰਸ ਕੰਪਿਊਟਰ ਗ੍ਰੈਜੂਏਟਸ ਅਤੇ ਕੰਮ ਕਰ ਰਹੇ ਵਿਅਕਤੀਆਂ ਲਈ ਹੈ ਜੋ GenAI ਅਤੇ AgenticAI ਬਾਰੇ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹਨ।',
    genaiList: [
      'GenAI ਅਤੇ AgenticAI ਦਾ ਪਰਚਿਆ',
      'ਕੰਮ ਦੀ ਜਗ੍ਹਾ ਅਤੇ ਨੌਕਰੀ ਖੋਜ ਵਿੱਚ ਵਰਤੋਂ',
      'GenAI ਟੂਲ (ChatGPT, Copilot ਆਦਿ) ਨਾਲ ਹੱਥ-ਉੱਤੇ ਅਭਿਆਸ',
      'AI ਦੀ ਨੈਤਿਕਤਾ, ਸੁਰੱਖਿਆ ਅਤੇ ਜ਼ਿੰਮੇਵਾਰ ਵਰਤੋਂ',
      'AgenticAI ਨਾਲ ਟਾਸਕ ਅਤੇ ਵਰਕਫਲੋ ਆਟੋਮੇਟ ਕਰਨਾ'
    ],
    professionalDesc: 'ਇਹ ਕੋਰਸ ਉਹ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਹਨ ਜੋ ਕੰਪਿਊਟਰ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਗ੍ਰੈਜੂਏਸ਼ਨ ਕਰ ਰਹੇ ਹਨ ਜਾਂ ਕਿਸੇ ਵੀ ਵਿਸ਼ੇ ਵਿੱਚ ਗ੍ਰੈਜੂਏਟ ਹਨ ਅਤੇ IT ਨੌਕਰੀਆਂ ਵਿੱਚ ਕਰੀਅਰ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹਨ। ਹੇਠ ਲਿਖੇ ਵਿਸ਼ਿਆਂ ਵਿੱਚੋਂ ਚੁਣੋ:',
    professionalList: [
      'ਕਲਾਊਡ ਕੰਪਿਊਟਿੰਗ (AWS, Azure, GCP)',
      'ਜਾਵਾ ਡਿਵੈਲਪਮੈਂਟ',
      'ਵੈੱਬ ਡਿਜ਼ਾਈਨਿੰਗ',
      'ਵੈੱਬ ਡਿਵੈਲਪਮੈਂਟ',
      'DevOps',
      'ServiceNow',
      'ਆਟੋਮੇਸ਼ਨ ਟੈਸਟਿੰਗ',
      'ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ (AI)',
      'ETL ਅਤੇ ਡਾਟਾ ਇੰਜੀਨੀਅਰਿੰਗ',
      'ਐਜਾਈਲ ਕੋਰਸ',
      'ਲੋ ਕੋਡ ਪਲੇਟਫਾਰਮ (Power Platform, Mendix, OutSystems ਆਦਿ)',
      'ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ...'
    ],
    professionalNote: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਖੁੱਲ੍ਹੀ ਹੈ: ਉਹ ਵਿਦਿਆਰਥੀ ਜੋ ਕੰਪਿਊਟਰ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਗ੍ਰੈਜੂਏਸ਼ਨ ਕਰ ਰਹੇ ਹਨ ਜਾਂ ਕਿਸੇ ਵੀ ਵਿਸ਼ੇ ਵਿੱਚ ਗ੍ਰੈਜੂਏਟ ਹਨ ਅਤੇ IT ਨੌਕਰੀਆਂ ਵਿੱਚ ਕਰੀਅਰ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹਨ।'
  }
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState('basic')
  const { lang } = useLang()
  const t = labels[lang]

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700 mb-8">{t.title}</h2>
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === 'basic'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-200 text-brand-700'
          }`}
          onClick={() => setActiveTab('basic')}
        >
          {t.basic}
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === 'fraud'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-200 text-brand-700'
          }`}
          onClick={() => setActiveTab('fraud')}
        >
          {t.fraud}
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === 'genai'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-200 text-brand-700'
          }`}
          onClick={() => setActiveTab('genai')}
        >
          {t.genai}
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === 'professional'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-200 text-brand-700'
          }`}
          onClick={() => setActiveTab('professional')}
        >
          {t.professional}
        </button>
      </div>
      <div className="bg-white rounded-b-xl shadow p-6">
        {activeTab === 'basic' && (
          <div>
            <h3 className="text-xl font-semibold text-brand-700">{t.basic}</h3>
            <p className="mt-2 text-gray-700">{t.basicDesc}</p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              {t.basicList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="mt-6">
              <a
                href="https://forms.gle/wwwKXe8CPtWueMKs6"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg"
              >
                {t.registerBasic}
              </a>
            </div>
          </div>
        )}
        {activeTab === 'fraud' && (
          <div>
            <h3 className="text-xl font-semibold text-brand-700">🛡️ {t.fraud}</h3>
            <p className="mt-2 text-gray-700">{t.fraudDesc}</p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              {t.fraudList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="mt-6">
              <a
                href="https://forms.gle/vzDwRuzdM12dz1Wo7"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg"
              >
                {t.registerFraud}
              </a>
            </div>
            <div className="mt-4">
              <Link to="/courses/digital-fraud-tutor" className="underline text-brand-700 font-medium">
                {t.meetTutor}
              </Link>
            </div>
          </div>
        )}
        {activeTab === 'genai' && (
          <div>
            <h3 className="text-xl font-semibold text-brand-700">🤖 {t.genai}</h3>
            <p className="mt-2 text-gray-700">{t.genaiDesc}</p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              {t.genaiList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="mt-6">
              <a
                href="https://forms.gle/4S22csQBU5fRjbhi7"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg"
              >
                {t.registerGenai}
              </a>
            </div>
          </div>
        )}
        {activeTab === 'professional' && (
          <div>
            <h3 className="text-xl font-semibold text-brand-700">💼 {t.professional}</h3>
            <p className="mt-2 text-gray-700">{t.professionalDesc}</p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              {t.professionalList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="mt-4 text-brand-700 font-medium">{t.professionalNote}</div>
            <div className="mt-6">
              <a
                href="https://forms.gle/LHCR2GSgWcnxgEAV6"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg"
              >
                {t.registerProfessional}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}