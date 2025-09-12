import { useState, useEffect } from 'react'
import { useLang } from '../../components/LanguageContext.jsx'
import { db } from '../../firebase'
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'
import jsPDF from 'jspdf'

const labels = {
  en: {
    title: 'Center Assets',
    add: 'Add Asset',
    assetName: 'Asset Name',
    assetId: 'Unique Asset ID',
    model: 'Model / Serial Number',
    type: 'Asset Type',
    typeOptions: ['Computer', 'Furniture', 'Audio-Visual', 'Office Equipment'],
    owner: 'Owner / Donor Name',
    ownerPhone: 'Owner / Donor Phone Number',
    onboardingDate: 'Onboarding Date',
    price: 'Purchase Price (if applicable)',
    condition: 'Current Condition',
    conditionOptions: ['Good', 'Fair', 'Damaged'],
    notes: 'Notes / Remarks',
    yes: 'Yes',
    no: 'No',
    desc: 'List and manage all assets of the center here.',
    downloadCSV: 'Download CSV',
    downloadPDF: 'Download PDF'
  },
  pa: {
    title: 'ਸੈਂਟਰ ਦੇ ਆਸੈਟ',
    add: 'ਆਸੈਟ ਸ਼ਾਮਲ ਕਰੋ',
    assetName: 'ਆਸੈਟ ਦਾ ਨਾਮ',
    assetId: 'ਯੂਨੀਕ ਆਸੈਟ ID',
    model: 'ਮਾਡਲ / ਸੀਰੀਅਲ ਨੰਬਰ',
    type: 'ਆਸੈਟ ਕਿਸਮ',
    typeOptions: ['ਕੰਪਿਊਟਰ', 'ਫਰਨੀਚਰ', 'ਆਡੀਓ-ਵਿਜ਼ੂਅਲ', 'ਦਫ਼ਤਰ ਸਾਮਾਨ'],
    owner: 'ਮਾਲਕ / ਦਾਨੀ ਦਾ ਨਾਮ',
    ownerPhone: 'ਮਾਲਕ / ਦਾਨੀ ਦਾ ਫ਼ੋਨ',
    onboardingDate: 'ਆਨਬੋਰਡਿੰਗ ਦੀ ਤਾਰੀਖ',
    price: 'ਖਰੀਦ ਕੀਮਤ (ਜੇ ਲਾਗੂ ਹੋਵੇ)',
    condition: 'ਮੌਜੂਦਾ ਹਾਲਤ',
    conditionOptions: ['ਚੰਗੀ', 'ਠੀਕ-ਠਾਕ', 'ਨੁਕਸਾਨ'],
    notes: 'ਨੋਟਸ / ਟਿੱਪਣੀਆਂ',
    yes: 'ਹਾਂ',
    no: 'ਨਹੀਂ',
    desc: 'ਸੈਂਟਰ ਦੇ ਸਾਰੇ ਆਸੈਟ ਇੱਥੇ ਵੇਖੋ ਅਤੇ ਪ੍ਰਬੰਧ ਕਰੋ।',
    downloadCSV: 'CSV ਡਾਊਨਲੋਡ ਕਰੋ',
    downloadPDF: 'PDF ਡਾਊਨਲੋਡ ਕਰੋ'
  }
}

const initialForm = {
  assetName: '',
  assetId: '',
  model: '',
  type: '',
  owner: '',
  ownerPhone: '',
  onboardingDate: '',
  price: '',
  condition: '',
  notes: '',
}

function generateAssetId(type, owner, ownerPhone, existingAssets = []) {
  const typeCode = type.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 4)
  const ownerCode = owner.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 10)
  const phoneCode = ownerPhone.replace(/\D/g, '')

  const similarAssets = Array.isArray(existingAssets)
    ? existingAssets.filter(
        a => a.owner === owner && a.ownerPhone === ownerPhone && a.type === type
      )
    : []

  const seq = similarAssets.length + 1
  return `${typeCode}-${ownerCode}-${phoneCode}-${seq}`
}

export default function AdminAssets() {
  const { lang } = useLang()
  const t = labels[lang]
  const [form, setForm] = useState(initialForm)
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)

  // Load assets from Firestore on mount
  useEffect(() => {
    async function fetchAssets() {
      setLoading(true)
      const qAssets = query(collection(db, 'assets'), orderBy('onboardingDate', 'desc'))
      const snapshot = await getDocs(qAssets)
      setAssets(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      setLoading(false)
    }
    fetchAssets()
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    let newValue = value
    if (name === 'owner' && value.length > 15) newValue = value.slice(0, 15)
    if (name === 'notes' && value.length > 100) newValue = value.slice(0, 100)
    if (name === 'ownerPhone') {
      newValue = value.replace(/\D/g, '').slice(0, 10)
    }
    const updatedForm = { ...form, [name]: newValue }
    updatedForm.assetId = generateAssetId(
      name === 'type' ? newValue : updatedForm.type,
      name === 'owner' ? newValue : updatedForm.owner,
      name === 'ownerPhone' ? newValue : updatedForm.ownerPhone,
      assets
    )
    setForm(updatedForm)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.assetName || !form.type || !form.owner || !form.ownerPhone) return

    const assetId = generateAssetId(form.type, form.owner, form.ownerPhone, assets || [])
    const newAsset = { ...form, assetId }
    try {
      await addDoc(collection(db, 'assets'), newAsset)
      setAssets([...assets, newAsset])
      setForm(initialForm)
    } catch (err) {
      alert('Error saving asset: ' + err.message)
    }
  }

  // CSV Download
  const handleDownloadCSV = () => {
    const headers = [
      t.assetName, t.assetId, t.model, t.type, t.owner, t.ownerPhone, t.onboardingDate, t.price, t.condition, t.notes
    ]
    const rows = assets.map(a => [
      a.assetName, a.assetId, a.model, a.type, a.owner, a.ownerPhone, a.onboardingDate, a.price, a.condition, a.notes
    ])
    let csvContent = [headers, ...rows].map(e => e.map(x => `"${x || ''}"`).join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'assets.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  // PDF Download
  const handleDownloadPDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(12)
    doc.text(t.title, 10, 10)
    let y = 20
    assets.forEach((a, idx) => {
      doc.text(
        `${idx + 1}. ${t.assetName}: ${a.assetName}, ${t.assetId}: ${a.assetId}, ${t.model}: ${a.model}, ${t.type}: ${a.type}, ${t.owner}: ${a.owner}, ${t.ownerPhone}: ${a.ownerPhone}, ${t.onboardingDate}: ${a.onboardingDate}, ${t.price}: ${a.price}, ${t.condition}: ${a.condition}, ${t.notes}: ${a.notes}`,
        10,
        y
      )
      y += 10
      if (y > 270) {
        doc.addPage()
        y = 20
      }
    })
    doc.save('assets.pdf')
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-brand-700 mb-4">{t.title}</h3>
      <p className="mb-6">{t.desc}</p>
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleDownloadCSV}
          className="bg-brand-700 text-white px-4 py-2 rounded-lg"
          disabled={assets.length === 0}
        >
          {t.downloadCSV}
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-brand-700 text-white px-4 py-2 rounded-lg"
          disabled={assets.length === 0}
        >
          {t.downloadPDF}
        </button>
      </div>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-brand-700 text-white">
              <th>{t.assetName}</th>
              <th>{t.assetId}</th>
              <th>{t.model}</th>
              <th>{t.type}</th>
              <th>{t.owner}</th>
              <th>{t.ownerPhone}</th>
              <th>{t.onboardingDate}</th>
              <th>{t.price}</th>
              <th>{t.condition}</th>
              <th>{t.notes}</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={10} className="text-center py-4 text-gray-400">
                  {lang === 'en' ? 'Loading...' : 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...'}
                </td>
              </tr>
            ) : assets.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center py-4 text-gray-400">
                  {lang === 'en' ? 'No assets added yet.' : 'ਹਾਲੇ ਕੋਈ ਆਸੈਟ ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ।'}
                </td>
              </tr>
            ) : (
              assets.map((a, idx) => (
                <tr key={idx} className="border-t">
                  <td>{a.assetName}</td>
                  <td>{a.assetId}</td>
                  <td>{a.model}</td>
                  <td>{a.type}</td>
                  <td>{a.owner}</td>
                  <td>{a.ownerPhone}</td>
                  <td>{a.onboardingDate}</td>
                  <td>{a.price}</td>
                  <td>{a.condition}</td>
                  <td>{a.notes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <form className="bg-gray-50 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">{t.assetName}</label>
          <input name="assetName" value={form.assetName} maxLength={15} onChange={handleChange} required className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.assetId}</label>
          <input name="assetId" value={form.assetId} readOnly className="w-full border px-2 py-1 rounded bg-gray-100" />
        </div>
        <div>
          <label className="block font-medium">{t.model}</label>
          <input name="model" value={form.model} maxLength={20} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.type}</label>
          <select name="type" value={form.type} onChange={handleChange} className="w-full border px-2 py-1 rounded">
            <option value="">{lang === 'en' ? 'Select Type' : 'ਕਿਸਮ ਚੁਣੋ'}</option>
            {t.typeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-medium">{t.onboardingDate}</label>
          <input type="date" name="onboardingDate" value={form.onboardingDate} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.owner}</label>
          <input name="owner" value={form.owner} maxLength={15} required onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.ownerPhone}</label>
          <input name="ownerPhone" value={form.ownerPhone} maxLength={10} required onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.price}</label>
          <input type="number" name="price" value={form.price} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.condition}</label>
          <select name="condition" value={form.condition} onChange={handleChange} className="w-full border px-2 py-1 rounded">
            <option value="">{lang === 'en' ? 'Select Condition' : 'ਹਾਲਤ ਚੁਣੋ'}</option>
            {t.conditionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium">{t.notes}</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div className="md:col-span-2 text-right">
          <button type="submit" className="bg-brand-700 text-white px-6 py-2 rounded-lg">
            {t.add}
          </button>
        </div>
      </form>
    </div>
  )
}