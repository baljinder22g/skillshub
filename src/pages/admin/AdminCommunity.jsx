import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, updateDoc, arrayUnion, orderBy, query } from 'firebase/firestore'
import { useLang } from '../../components/LanguageContext.jsx'

const labels = {
  en: {
    title: 'Community Forum',
    newThread: 'Create New Thread',
    threadHeading: 'Thread Heading',
    addThread: 'Add Thread',
    comment: 'Add Comment',
    name: 'Your Name',
    phone: 'Phone (optional)',
    text: 'Comment',
    submit: 'Submit',
    noThreads: 'No threads yet.',
    comments: 'Comments',
    required: '* Required',
  },
  pa: {
    title: 'ਕਮਿਊਨਿਟੀ ਫੋਰਮ',
    newThread: 'ਨਵਾਂ ਥ੍ਰੈੱਡ ਬਣਾਓ',
    threadHeading: 'ਥ੍ਰੈੱਡ ਸਿਰਲੇਖ',
    addThread: 'ਥ੍ਰੈੱਡ ਸ਼ਾਮਲ ਕਰੋ',
    comment: 'ਟਿੱਪਣੀ ਸ਼ਾਮਲ ਕਰੋ',
    name: 'ਤੁਹਾਡਾ ਨਾਮ',
    phone: 'ਫ਼ੋਨ (ਚੋਣਵੀਂ)',
    text: 'ਟਿੱਪਣੀ',
    submit: 'ਸਬਮਿਟ',
    noThreads: 'ਹਾਲੇ ਕੋਈ ਥ੍ਰੈੱਡ ਨਹੀਂ।',
    comments: 'ਟਿੱਪਣੀਆਂ',
    required: '* ਲਾਜ਼ਮੀ',
  }
}

export default function AdminCommunity() {
  const { lang } = useLang()
  const t = labels[lang]
  const [threads, setThreads] = useState([])
  const [newHeading, setNewHeading] = useState('')
  const [commentForm, setCommentForm] = useState({ name: '', phone: '', text: '', threadId: null })
  const [loading, setLoading] = useState(false)

  // Fetch threads from Firestore
  useEffect(() => {
    async function fetchThreads() {
      setLoading(true)
      const q = query(collection(db, 'threads'), orderBy('created', 'asc'))
      const snapshot = await getDocs(q)
      setThreads(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      setLoading(false)
    }
    fetchThreads()
  }, [])

  // Add thread
  const handleAddThread = async e => {
    e.preventDefault()
    if (!newHeading.trim()) return
    const docRef = await addDoc(collection(db, 'threads'), {
      heading: newHeading,
      comments: [],
      created: new Date().toISOString()
    })
    setThreads([...threads, { id: docRef.id, heading: newHeading, comments: [], created: new Date().toISOString() }])
    setNewHeading('')
  }

  // Add comment
  const handleAddComment = async (e, threadId) => {
    e.preventDefault()
    const { name, phone, text } = commentForm
    if (!name.trim() || !text.trim()) return
    const threadDoc = doc(db, 'threads', threadId)
    await updateDoc(threadDoc, {
      comments: arrayUnion({ name, phone, text, date: new Date().toISOString() })
    })
    // Refresh threads
    const q = query(collection(db, 'threads'), orderBy('created', 'asc'))
    const snapshot = await getDocs(q)
    setThreads(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    setCommentForm({ name: '', phone: '', text: '', threadId: null })
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-brand-700 mb-4">{t.title}</h3>
      <form className="mb-8 flex gap-2" onSubmit={handleAddThread}>
        <input
          type="text"
          value={newHeading}
          onChange={e => setNewHeading(e.target.value)}
          placeholder={t.threadHeading}
          required
          className="border px-3 py-2 rounded-lg flex-1"
        />
        <button type="submit" className="bg-brand-700 text-white px-4 py-2 rounded-lg">{t.addThread}</button>
      </form>
      {loading && <div className="text-gray-400 mb-8">Loading...</div>}
      {threads.length === 0 && !loading && (
        <div className="text-gray-400 mb-8">{t.noThreads}</div>
      )}
      {threads.map(thread => (
        <div key={thread.id} className="mb-8 border rounded-xl p-4 bg-gray-50">
          <div className="font-bold text-brand-700 mb-2">{thread.heading}</div>
          <div className="mb-2 text-sm text-gray-700">{t.comments}:</div>
          <ul className="mb-2">
            {thread.comments && thread.comments.map((c, i) => (
              <li key={i} className="mb-2 border-b pb-2">
                <div className="font-semibold">{c.name} {c.phone && <span className="text-xs text-gray-500">({c.phone})</span>}</div>
                <div>{c.text}</div>
                <div className="text-xs text-gray-400">{new Date(c.date).toLocaleString()}</div>
              </li>
            ))}
          </ul>
          <form className="mt-2 flex flex-col gap-2" onSubmit={e => handleAddComment(e, thread.id)}>
            <input
              type="text"
              value={commentForm.threadId === thread.id ? commentForm.name : ''}
              onChange={e => setCommentForm(f => ({ ...f, name: e.target.value, threadId: thread.id }))}
              placeholder={`${t.name} ${t.required}`}
              required
              className="border px-2 py-1 rounded"
            />
            <input
              type="text"
              value={commentForm.threadId === thread.id ? commentForm.phone : ''}
              onChange={e => setCommentForm(f => ({ ...f, phone: e.target.value, threadId: thread.id }))}
              placeholder={t.phone}
              className="border px-2 py-1 rounded"
            />
            <textarea
              value={commentForm.threadId === thread.id ? commentForm.text : ''}
              onChange={e => setCommentForm(f => ({ ...f, text: e.target.value, threadId: thread.id }))}
              placeholder={`${t.text} ${t.required}`}
              required
              className="border px-2 py-1 rounded"
            />
            <button type="submit" className="bg-brand-700 text-white px-4 py-2 rounded-lg">{t.submit}</button>
          </form>
        </div>
      ))}
    </div>
  )
}