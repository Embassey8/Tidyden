import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-heading font-heading mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        How it works
      </motion.h1>
      <motion.p
        className="text-xl text-accent mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        We&apos;ve made finding and booking a cleaner simple and easy
      </motion.p>
      <motion.div
        className="bg-primary text-primary-foreground inline-block px-6 py-3 rounded-lg mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Book a cleaner in just 1 minute
      </motion.div>
    </motion.section>
  )
}

export default HeroSection

