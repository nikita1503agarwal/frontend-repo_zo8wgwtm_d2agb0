import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ username, password })
      })
      const data = await res.json()
      if(!res.ok){
        throw new Error(data.detail || 'Login gagal')
      }
      localStorage.setItem('token', data.token)
      localStorage.setItem('name', data.name)
      localStorage.setItem('role', data.role)
      navigate('/dashboard')
    } catch(err){
      setError(err.message)
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 flex items-center justify-center px-4 pt-24">
      <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Login Admin</h2>
        <p className="text-sm text-gray-600 text-center mt-1">Masuk ke dashboard pengelolaan madrasah</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Username</label>
            <input value={username} onChange={e=>setUsername(e.target.value)} className="mt-1 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="admin" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="••••••••" />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button disabled={loading} className="w-full px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60">
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <div className="text-xs text-gray-500 text-center mt-4">Gunakan akun demo: admin / admin123</div>
      </div>
    </div>
  )
}

export default Login
