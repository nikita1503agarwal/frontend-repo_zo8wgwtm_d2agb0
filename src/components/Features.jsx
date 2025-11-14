import { motion } from 'framer-motion'
import { BookOpen, Users, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  { icon: BookOpen, title: 'Kurikulum Terpadu', desc: 'Integrasi ilmu agama & sains yang relevan dengan zaman.' },
  { icon: Users, title: 'Pengajar Berkualitas', desc: 'Tenaga pendidik berpengalaman & berdedikasi.' },
  { icon: ShieldCheck, title: 'Lingkungan Aman', desc: 'Pembinaan karakter dengan sistem keamanan yang baik.' },
  { icon: Sparkles, title: 'Fasilitas Modern', desc: 'Laboratorium, perpustakaan digital, dan kelas nyaman.' },
]

function Features() {
  return (
    <div id="program" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="p-3 w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 mb-4 flex items-center justify-center">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
