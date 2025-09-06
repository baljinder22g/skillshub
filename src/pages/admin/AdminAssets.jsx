import { useState } from 'react'
import { useLang } from '../../components/LanguageContext.jsx'

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
    purchaseDate: 'Purchase / Donation Date',
    price: 'Purchase Price (if applicable)',
    condition: 'Current Condition',
    conditionOptions: ['Good', 'Fair', 'Damaged'],
    warranty: 'Warranty Expiry Date (if any)',
    insurance: 'Insurance Info (if any)',
    maintenanceRequired: 'Monthly/Annual Maintenance Required',
    lastMaintenance: 'Last Maintenance Date',
    nextMaintenance: 'Next Maintenance Due',
    notes: 'Notes / Remarks',
    yes: 'Yes',
    no: 'No',
    actions: 'Actions',
    delete: 'Delete',
    desc: 'List and manage all assets of the center here.',
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
    purchaseDate: 'ਖਰੀਦ / ਦਾਨ ਦੀ ਤਾਰੀਖ',
    price: 'ਖਰੀਦ ਕੀਮਤ (ਜੇ ਲਾਗੂ ਹੋਵੇ)',
    condition: 'ਮੌਜੂਦਾ ਹਾਲਤ',
    conditionOptions: ['ਚੰਗੀ', 'ਠੀਕ-ਠਾਕ', 'ਨੁਕਸਾਨ'],
    warranty: 'ਵਾਰੰਟੀ ਖਤਮ ਹੋਣ ਦੀ ਤਾਰੀਖ (ਜੇ ਹੋਵੇ)',
    insurance: 'ਬੀਮਾ ਜਾਣਕਾਰੀ (ਜੇ ਹੋਵੇ)',
    maintenanceRequired: 'ਮਾਸਿਕ/ਸਾਲਾਨਾ ਰਖ-ਰਖਾਵ ਲੋੜੀਂਦੀ',
    lastMaintenance: 'ਆਖਰੀ ਰਖ-ਰਖਾਵ ਦੀ ਤਾਰੀਖ',
    nextMaintenance: 'ਅਗਲੀ ਰਖ-ਰਖਾਵ ਦੀ ਤਾਰੀਖ',
    notes: 'ਨੋਟਸ / ਟਿੱਪਣੀਆਂ',
    yes: 'ਹਾਂ',
    no: 'ਨਹੀਂ',
    actions: 'ਕਾਰਵਾਈ',
    delete: 'ਹਟਾਓ',
    desc: 'ਸੈਂਟਰ ਦੇ ਸਾਰੇ ਆਸੈਟ ਇੱਥੇ ਵੇਖੋ ਅਤੇ ਪ੍ਰਬੰਧ ਕਰੋ।',
  }
}

const initialForm = {
  assetName: '',
  assetId: '',
  model: '',
  type: '',
  owner: '',
  purchaseDate: '',
  price: '',
  condition: '',
  warranty: '',
  insurance: '',
  maintenanceRequired: false,
  lastMaintenance: '',
  nextMaintenance: '',
  notes: '',
}

export default function AdminAssets() {
  const { lang } = useLang()
  const t = labels[lang]
  const [form, setForm] = useState(initialForm)
  const [assets, setAssets] = useState([])

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.assetName || !form.assetId) return
    setAssets([...assets, form])
    setForm(initialForm)
  }

  const handleDelete = idx => {
    setAssets(assets.filter((_, i) => i !== idx))
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-brand-700 mb-4">{t.title}</h3>
      <p className="mb-6">{t.desc}</p>
      <form className="bg-gray-50 p-4 rounded-xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium">{t.assetName}</label>
          <input name="assetName" value={form.assetName} onChange={handleChange} required className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.assetId}</label>
          <input name="assetId" value={form.assetId} onChange={handleChange} required className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.model}</label>
          <input name="model" value={form.model} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.type}</label>
          <select name="type" value={form.type} onChange={handleChange} className="w-full border px-2 py-1 rounded">
            <option value="">{lang === 'en' ? 'Select Type' : 'ਕਿਸਮ ਚੁਣੋ'}</option>
            {t.typeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-medium">{t.owner}</label>
          <input name="owner" value={form.owner} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.purchaseDate}</label>
          <input type="date" name="purchaseDate" value={form.purchaseDate} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
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
        <div>
          <label className="block font-medium">{t.warranty}</label>
          <input type="date" name="warranty" value={form.warranty} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.insurance}</label>
          <input name="insurance" value={form.insurance} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.maintenanceRequired}</label>
          <div>
            <label>
              <input type="checkbox" name="maintenanceRequired" checked={form.maintenanceRequired} onChange={handleChange} />
              <span className="ml-2">{form.maintenanceRequired ? t.yes : t.no}</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block font-medium">{t.lastMaintenance}</label>
          <input type="date" name="lastMaintenance" value={form.lastMaintenance} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div>
          <label className="block font-medium">{t.nextMaintenance}</label>
          <input type="date" name="nextMaintenance" value={form.nextMaintenance} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium">{t.notes}</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full border px-2 py-1 rounded" />
        </div>
        <div className="md:col-span-2 text-right">
          <button type="submit" className="bg-brand-700 text-white px-6 py-2 rounded-lg">{t.add}</button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-brand-700 text-white">
              <th>{t.assetName}</th>
              <th>{t.assetId}</th>
              <th>{t.model}</th>
              <th>{t.type}</th>
              <th>{t.owner}</th>
              <th>{t.purchaseDate}</th>
              <th>{t.price}</th>
              <th>{t.condition}</th>
              <th>{t.warranty}</th>
              <th>{t.insurance}</th>
              <th>{t.maintenanceRequired}</th>
              <th>{t.lastMaintenance}</th>
              <th>{t.nextMaintenance}</th>
              <th>{t.notes}</th>
              <th>{t.actions}</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a, idx) => (
              <tr key={idx} className="border-t">
                <td>{a.assetName}</td>
                <td>{a.assetId}</td>
                <td>{a.model}</td>
                <td>{a.type}</td>
                <td>{a.owner}</td>
                <td>{a.purchaseDate}</td>
                <td>{a.price}</td>
                <td>{a.condition}</td>
                <td>{a.warranty}</td>
                <td>{a.insurance}</td>
                <td>{a.maintenanceRequired ? t.yes : t.no}</td>
                <td>{a.lastMaintenance}</td>
                <td>{a.nextMaintenance}</td>
                <td>{a.notes}</td>
                <td>
                  <button onClick={() => handleDelete(idx)} className="text-red-600 underline">{t.delete}</button>
                </td>
              </tr>
            ))}
            {assets.length === 0 && (
              <tr>
                <td colSpan={15} className="text-center py-4 text-gray-400">
                  {lang === 'en' ? 'No assets added yet.' : 'ਹਾਲੇ ਕੋਈ ਆਸੈਟ ਨਹੀਂ ਜੋੜਿਆ ਗਿਆ।'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}