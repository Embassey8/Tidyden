"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Recurring House Cleaning",
    description: "Regular weekly, bi-weekly, or monthly cleaning services to keep your home spotless",
    gradient: "from-purple-600 via-pink-600 to-red-500",
    textColor: "text-white",
    image: "/modern-house-cleaning.png",
  },
  {
    title: "Adhoc House Cleaning",
    description: "One-time cleaning services for special occasions or when you need extra help",
    gradient: "from-cyan-500 via-blue-600 to-purple-600",
    textColor: "text-white",
    image: "/one-time-house-cleaning.png",
  },
  {
    title: "End of Lease / Bond Cleaning",
    description: "Comprehensive cleaning to ensure you get your full bond back",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    textColor: "text-white",
    image: "/bond-cleaning-service.png",
  },
]

const additionalServices = [
  {
    title: "Deep Carpet Cleaning",
    description: "Professional carpet steam cleaning and stain removal",
    image: "/carpet-cleaning-machine.png",
  },
  {
    title: "Deep Oven and Fridge Cleaning",
    description: "Thorough appliance cleaning inside and out",
    image: "/clean-oven-refrigerator.png",
  },
  {
    title: "Wall Cleaning",
    description: "Complete wall washing and mark removal",
    image: "/wall-cleaning.png",
  },
  {
    title: "Upholstery Cleaning",
    description: "Professional furniture and fabric cleaning",
    image: "/sofa-steam-cleaning.png",
  },
  {
    title: "Window Cleaning",
    description: "Crystal clear windows inside and outside",
    image: "/window-cleaning.png",
  },
]

const ServicesSection = () => {
  return (
    <section className="bg-black min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            CLEANING
          </h2>
          <h3 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            SERVICES
          </h3>
        </motion.div>

        {/* Main Services */}
        <div className="space-y-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${service.gradient} p-1`}>
                <motion.div
                  className="bg-black rounded-3xl p-8 lg:p-12 relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="flex-1 space-y-6">
                      <motion.h3
                        className={`text-3xl lg:text-5xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">{service.description}</p>
                    </div>

                    <div className="flex-1 flex justify-center">
                      <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-80 h-60 object-cover rounded-2xl shadow-2xl"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 rounded-2xl`}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-4">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white font-black text-2xl px-12 py-6 rounded-full hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            GET FREE QUOTE
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
