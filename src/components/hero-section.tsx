/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, Clock, Shield, Star, Sparkles, Zap, CheckCircle } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function HeroSection() {
  const stepsRef = useRef(null)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [address, setAddress] = useState("")

  // Individual step refs for intersection observer
  const stepRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const observers = stepRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.3 },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Diagonal Lines */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-10 w-48 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
          <div className="absolute top-60 right-32 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rotate-45" />
        </div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              variants={itemVariants}
            >
              <Shield className="w-4 h-4 text-cyan-300" />
              <span className="text-white font-medium text-sm">500+ registered cleaners around Australia</span>
            </motion.div>

            {/* Main Headline - Bold and Dynamic */}
            <motion.div className="relative mb-6" variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
                <span className="block transform -rotate-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Book a trusted
                </span>
                <span className="block transform rotate-1 text-yellow-300 text-shadow-lg mt-1">local cleaner </span>
                <span className="block transform -rotate-1 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mt-1">
                  in minutes
                </span>
              </h1>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-2 -right-2 text-yellow-300"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 text-cyan-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Zap className="w-6 h-6" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium"
              variants={itemVariants}
            >
              Get instant quotes, connect with vetted professionals, and schedule your cleaning service with just a few
              clicks.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <div className="flex flex-row gap-3 w-full">
                <Input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1 md:h-16 h-12 px-6 text-base bg-white/90 border-0 rounded-xl placeholder:text-gray-500 focus:bg-white transition-all"
                />
                <button
                  title="Find a cleaner"
                  className="text-base md:px-8 px-4 md:h-16 h-12 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 group border-0 whitespace-nowrap"
                >
                  <ArrowRight className="md:w-6 md:h-6 w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div className="max-w-6xl mx-auto mb-16" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Instant Quoting",
                  description: "Get an accurate quote in 1-2mins without providing contact details",
                  icon: Zap,
                  color: "text-yellow-400",
                  bgGradient: "from-yellow-400/20 to-orange-500/20",
                },
                {
                  title: "Intuitive Matching",
                  description: "Vetted & rated local cleaners matched to your specific needs",
                  icon: Star,
                  color: "text-cyan-400",
                  bgGradient: "from-cyan-400/20 to-blue-500/20",
                },
                {
                  title: "Live Availability",
                  description: "Select your preferred date and time from available options and schedule instantly",
                  icon: CheckCircle,
                  color: "text-green-400",
                  bgGradient: "from-green-400/20 to-emerald-500/20",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon

                return (
                  <motion.div
                    key={index}
                    className={`relative p-6 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg group`}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-row items-start gap-3 sm:gap-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                          {feature.title}
                        </h3>

                        <p className="text-blue-100 leading-relaxed text-sm md:text-base">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 text-blue-100"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="font-medium text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="font-medium text-sm">24/7 Availability</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
