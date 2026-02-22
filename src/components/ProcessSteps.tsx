"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Tell us about your home & needs to get an instant quote",
      description: "",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      numberBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      numberText: "text-white",
    },
    {
      title:
        "View live availability of matched cleaners and schedule your clean",
      description: "",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      numberBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      numberText: "text-white",
    },
    {
      title: "Pre-authorise your payment",
      description: "",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      numberBg: "bg-gradient-to-br from-emerald-500 to-green-600",
      numberText: "text-white",
    },
    {
      title: "Your clean is completed",
      description: "",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      numberBg: "bg-gradient-to-br from-orange-500 to-red-500",
      numberText: "text-white",
    },
    {
      title: "Rate your cleaner and release payment",
      description: "",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      numberBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
      numberText: "text-white",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-8 md:py-12 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl p-4 md:px-6 lg:px-8 md:py-6 xl:py-8 2xl:py-12">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-6">
              How it works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12  items-start ">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-3 md:space-y-6 lg:space-y-8 ">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    onHoverStart={() => setActiveStep(index)}
                  >
                    <div
                      className={`p-4 transition-all duration-300 ${
                        activeStep === index
                          ? ``
                          : "bg-white hover:bg-gray-50 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${step.numberBg} ${step.numberText}`}
                        >
                          {index + 1}
                        </div>

                        <div className="flex-1">
                          <h3
                            className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                              activeStep === index ? "" : "text-slate-900"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative hidden md:block order-1 md:order-2   "
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative  overflow-hidden  aspect-square  bg-[url('/how-it-works.avif')] bg-cover bg-center rounded-md">
                <motion.div
                  className={`absolute top-6 right-6 bg-white rounded-xl p-3 shadow-md transition-all duration-300 ${
                    activeStep === 0 ? "scale-110 shadow-lg" : ""
                  }`}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-xs">Instant Quote</p>
                      <p className="text-xs text-gray-500">30 seconds</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`absolute bottom-6 left-6 bg-white rounded-xl p-3 shadow-md transition-all duration-300 ${
                    activeStep === 4 ? "scale-110 shadow-lg" : ""
                  }`}
                  animate={{ y: [4, -4, 4] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">
                        ★
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-xs">4.9 Rating</p>
                      <p className="text-xs text-gray-500">12k reviews</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`absolute top-1/2 left-6 bg-white rounded-xl p-3 shadow-md transition-all duration-300 ${
                    activeStep === 1 ? "scale-110 shadow-lg" : ""
                  }`}
                  animate={{ x: [-4, 4, -4] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">
                        ⏰
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-xs">Same Day</p>
                      <p className="text-xs text-gray-500">Available</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
