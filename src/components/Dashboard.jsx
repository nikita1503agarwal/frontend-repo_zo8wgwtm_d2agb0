import { useEffect, useState } from 'react'

function Dashboard(){
  const [data,setData] = useState(null)
  const [error,setError] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{ fetchData() },[])

  const fetchData = async ()=>{
    setError('')
    try{
      const token = localStorage.getItem('token')
      const res = await fetch(`${baseUrl}/api/dashboard`,{
        headers:{ Authorization: `Bearer ${token}` }
      })
      const json = await res.json()
      if(!res.ok) throw new Error(json.detail || 'Gagal memuat dashboard')
      setData(json)
    }catch(err){ setError(err.message) }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 px-4 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        {error && <p className="mt-2 text-red-600">{error}</p>}
        {!data ? (
          <p className="mt-6 text-gray-600">Memuat...</p>
        ) : (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(data.stats).map(([k,v])=> (
              <div key={k} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-gray-500 capitalize">{k}</div>
                <div className="mt-2 text-3xl font-bold text-gray-900">{v}</div>
              </div>
            ))}
            <div className="sm:col-span-2 lg:col-span-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-gray-900 mb-3">Pengumuman</div>
              <ul className="space-y-2">
                {data.announcements.map((a,i)=> (
                  <li key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <span className="text-gray-700">{a.title}</span>
                    <span className="text-sm text-gray-500">{a.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
