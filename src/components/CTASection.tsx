import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

const CTASection = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-300 flex items-center justify-center mx-auto group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started Here
        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </motion.button>
    </motion.section>
  )
}

export default CTASection

