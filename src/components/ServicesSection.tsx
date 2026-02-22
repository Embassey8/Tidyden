"use client";

import { motion } from "framer-motion";
import { RotateCcw, Zap, Award } from "lucide-react";

const services = [
  {
    title: "Recurring House Cleaning",
    description:
      "Reliable recurring cleaning services to keep your home spotless",
    gradient:
      "bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent",
    textColor: "text-white",
    icon: RotateCcw,
    iconColor: "text-cyan-300",
  },
  {
    title: "Adhoc House Cleaning",
    description:
      "One-time cleaning services for special occasions or when you need extra help",
    gradient: "from-green-400 to-green-600",
    textColor: "text-white",
    icon: Zap,
    iconColor: "text-green-300",
  },
  {
    title: "End of Lease / Bond Cleaning",
    description: "Comprehensive cleaning to ensure you get your full bond back",
    gradient: "from-yellow-400 to-yellow-600",
    textColor: "text-white",
    icon: Award,
    iconColor: "text-yellow-300",
  },
];

const additionalServices = [
  {
    title: "Deep Carpet Cleaning",
    description: "Professional carpet steam cleaning and stain removal",
  },
  {
    title: "Deep Oven and Fridge Cleaning",
    description: "Thorough appliance cleaning inside and out",
  },
  {
    title: "Wall Cleaning",
    description: "Complete wall washing and mark removal",
  },
  {
    title: "Upholstery Cleaning",
    description: "Professional furniture and fabric cleaning",
  },
  {
    title: "Window Cleaning",
    description: "Crystal clear windows inside and outside",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white overflow-hidden my-10">
      <div className="container max-w-7xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 mx-auto px-4 py-12 lg:px-6 xl:px-8 2xl:px-12 rounded-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 text-blue-200 text-sm font-semibold rounded-full mb-4 border border-blue-400/30">
              Australia&rsquo;s #1 Marketplace
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Available <span className="text-yellow-300">Services</span>{" "}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TidyDen offers a range of cleaning services to help you keep your
            home spotless and your bond secure.
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

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden h-full">
                  <motion.div
                    className="bg-gradient-to-br from-blue-900/80 via-blue-800/90 to-indigo-900/85 backdrop-blur-lg border-2 border-blue-600/30 rounded-3xl p-4 lg:p-6 py-6 lg:p-8 relative z-10 h-full flex flex-col justify-center "
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute -top-1 -right-1">
                      <div className="p-3 ">
                        <IconComponent
                          className={`w-8 h-8 ${service.iconColor}`}
                        />
                      </div>
                    </div>

                    <div className="text-center space-y-6 pt-4">
                      <motion.h3
                        className={`text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-800/30 rounded-3xl blur-xl opacity-50 -z-10"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Available <span className="text-yellow-300">Add On&rsquo;s</span>
          </motion.h3>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Enhance your cleaning service with these additional options
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-800/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-5 hover:border-blue-400/40 transition-all duration-300"
              whileHover={{ y: -3, scale: 1.01 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
