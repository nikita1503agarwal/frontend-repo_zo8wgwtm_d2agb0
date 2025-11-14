import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LogIn, LogOut, LayoutDashboard, School } from 'lucide-react'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const name = typeof window !== 'undefined' ? localStorage.getItem('name') : null

  const isDashboard = location.pathname.startsWith('/dashboard')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('role')
    navigate('/')
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <motion.div initial={{ rotate: -10, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="p-2 rounded-xl bg-white/70 backdrop-blur border border-white/40 shadow">
              <School className="w-6 h-6 text-emerald-600" />
            </motion.div>
            <div className="font-semibold text-gray-800 text-lg">Madrasah Modern</div>
          </Link>

          <div className="flex items-center gap-3">
            {token ? (
              <div className="flex items-center gap-3">
                <span className="hidden sm:block text-gray-700">Halo, {name || 'Admin'}</span>
                {!isDashboard && (
                  <Link to="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                )}
                <button onClick={handleLogout} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 transition">
                  <LogOut className="w-4 h-4" /> Keluar
                </button>
              </div>
            ) : (
              <Link to="/login" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition shadow">
                <LogIn className="w-4 h-4" /> Masuk
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
