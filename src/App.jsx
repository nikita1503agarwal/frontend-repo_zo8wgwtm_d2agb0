import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function Home(){
  return (
    <>
      <Hero />
      <section id="profil" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Profil Singkat</h2>
            <p className="mt-3 text-gray-600">
              Madrasah Modern berkomitmen menghadirkan pendidikan Islami yang relevan dengan tantangan zaman. 
              Mengedepankan akhlak mulia, kompetensi global, dan teknologi sebagai penunjang pembelajaran.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Fokus pada pembinaan karakter</li>
              <li>Ekstrakurikuler beragam & kompetitif</li>
              <li>Kolaborasi orang tua & sekolah yang erat</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100" />
          </div>
        </div>
      </section>
      <Features />
      <Footer />
    </>
  )
}

function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
