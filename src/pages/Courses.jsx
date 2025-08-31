import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Courses() {
  const [activeTab, setActiveTab] = useState('basic')

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-brand-700 mb-8">Courses Offered</h2>
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === 'basic'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-200 text-brand-700'
          }`}
          onClick={() => setActiveTab('basic')}
        >
          Basic Computer Education
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === 'fraud'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-200 text-brand-700'
          }`}
          onClick={() => setActiveTab('fraud')}
        >
          Digital Fraud Awareness
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === 'genai'
              ? 'bg-brand-700 text-white'
              : 'bg-gray-200 text-brand-700'
          }`}
          onClick={() => setActiveTab('genai')}
        >
          Introduction to GenAI & AgenticAI
        </button>
      </div>
      <div className="bg-white rounded-b-xl shadow p-6">
        {activeTab === 'basic' && (
          <div>
            <h3 className="text-xl font-semibold text-brand-700">Basic Computer Education</h3>
            <p className="mt-2 text-gray-700">
              Learn the fundamentals of computers, internet, and digital skills for everyday life.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Introduction to computers and hardware</li>
              <li>Basic Windows & file management</li>
              <li>Internet browsing & email</li>
              <li>MS Office basics (Word, Excel, PowerPoint)</li>
              <li>Safe internet practices</li>
            </ul>
            <div className="mt-6">
              <a
                href="YOUR_GOOGLE_FORM_LINK_FOR_BASIC_COMPUTER"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg"
              >
                Register for Basic Computer Education
              </a>
            </div>
          </div>
        )}
        {activeTab === 'fraud' && (
          <div>
            <h3 className="text-xl font-semibold text-brand-700">🛡️ Digital Fraud Awareness Session</h3>
            <p className="mt-2 text-gray-700">
              Learn how to protect yourself from online scams, phishing, and digital fraud.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Recognize common online scams</li>
              <li>Protect your passwords and personal info</li>
              <li>Safe digital payments</li>
              <li>Reporting fraud and getting help</li>
            </ul>
            <div className="mt-6">
              <a
                href="YOUR_NEW_GOOGLE_FORM_LINK_FOR_FRAUD"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg"
              >
                Register for Digital Fraud Session
              </a>
            </div>
            <div className="mt-4">
              <Link to="/courses/digital-fraud-tutor" className="underline text-brand-700 font-medium">
                Meet the Tutor
              </Link>
            </div>
          </div>
        )}
        {activeTab === 'genai' && (
          <div>
            <h3 className="text-xl font-semibold text-brand-700">🤖 Introduction to GenAI & AgenticAI</h3>
            <p className="mt-2 text-gray-700">
              This course is designed for computer graduates and working professionals who use computers daily and want to learn about Generative AI and Agentic AI.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Overview of Generative AI (GenAI) and Agentic AI</li>
              <li>Applications in the workplace and job search</li>
              <li>Hands-on with popular GenAI tools (ChatGPT, Copilot, etc.)</li>
              <li>Ethics, safety, and responsible use of AI</li>
              <li>How Agentic AI can automate tasks and workflows</li>
            </ul>
            <div className="mt-6">
              <a
                href="YOUR_GOOGLE_FORM_LINK_FOR_GENAI"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg"
              >
                Register for GenAI & AgenticAI Course
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}