import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="relative overflow-hidden pt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Madrasah Modern & Elegan
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Pendidikan Islami berkualitas dengan sentuhan teknologi, lingkungan nyaman, dan kurikulum berstandar.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#profil" className="px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">Lihat Profil</a>
          <a href="#program" className="px-6 py-3 rounded-xl bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 transition">Program</a>
        </div>
      </motion.div>

      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </div>
  )
}

export default Hero
