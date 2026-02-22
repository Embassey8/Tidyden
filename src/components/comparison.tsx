"use client"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const tableData = [
  "Instant online quotes with transparent pricing",
  "Live availability for instant scheduling",
  "Pre-vetted and rated providers",
  "Standardised procedures for guaranteed quality",
  "Securely held payments with dispute resolution",
  "Access to growing database of local providers",
]

export default function Comparison() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)] pointer-events-none" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Diagonal Lines */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-10 w-48 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
        <div className="absolute top-60 right-32 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rotate-45" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 text-blue-200 text-sm font-semibold rounded-full mb-4 border border-blue-400/30">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The <span className="text-yellow-300">TidyDen</span> Difference
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the future of home cleaning services with our innovative platform that transforms how you find
            and book professional cleaners.
          </motion.p>

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
          </motion.div>
        </div>

        {/* Table Format */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr] bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="md:p-6 p-3 text-left">
              <h3 className="md:text-lg font-semibold text-gray-700">Features</h3>
            </div>
            <div className="md:p-6 p-3 text-center border-l border-gray-200">
              <h3 className="md:text-lg font-semibold text-gray-600">Other</h3>
            </div>
            <div className="md:p-6 p-3 text-center border-l border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
              <h3 className="md:text-xl lg:text-2xl font-bold text-blue-600">TidyDen</h3>
            </div>
          </div>

          {/* Table Rows */}
          <div className="max-w-full overflow-auto">
            {tableData.map((feature, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-[2fr_1fr_1fr] border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ margin: "-50px" }}
              >
                <div className="p-3 md:p-5 lg:p-6 flex items-center">
                  <p className="text-gray-700 font-medium leading-relaxed text-xs sm:text-sm md:text-base">{feature}</p>
                </div>

                <div className="p-3 md:p-5 lg:p-6 flex items-center justify-center border-l border-gray-200">
                  <div className="flex items-center justify-center md:w-8 md:h-8 h-6 w-6 bg-red-100 rounded-full">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                </div>

                <div className="p-3 md:p-5 lg:p-6 flex items-center justify-center border-l border-gray-200 bg-gradient-to-r from-blue-50/30 to-green-50/30">
                  <div className="flex items-center justify-center md:w-8 md:h-8 h-6 w-6 bg-green-100 rounded-full">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
