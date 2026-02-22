import { motion } from "framer-motion"

interface ComparisonItemProps {
  feature: string
  isPositive?: boolean
  delay: number
}

export function ComparisonItem({ feature, isPositive = true, delay }: ComparisonItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isPositive ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center space-x-2 mb-4"
    >
      <span className={isPositive ? "text-green-500" : "text-red-500"}>{isPositive ? "✓" : "✗"}</span>
      <span>{feature}</span>
    </motion.div>
  )
}

