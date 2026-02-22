import type React from "react"
import { Button } from "@/components/ui/button"
import { Calculator, Calendar, Shield } from "lucide-react"

const features = [
  {
    title: "Instant and transparent quoting",
    description: "No contact details needed and no hidden fees.",
    icon: Calculator,
    bgColor: "bg-blue-600",
  },
  {
    title: "Live availability of rated and matched cleaners for instant scheduling",
    description: "No more waiting or back and forth to schedule your clean",
    icon: Calendar,
    bgColor: "bg-gray-600",
  },
  {
    title: "Securely held payments",
    description: "Only release once the job is done to your satisfaction.",
    icon: Shield,
    bgColor: "bg-green-400",
  },
]

export default function CleaningMarketplaceSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-slate-50">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Australia&apos;s #1 marketplace for
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            house cleaning services
          </h2>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium self-start sm:self-auto shrink-0"
          >
            Get Started
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
}

export function FeatureCard({ title, description, icon: Icon, bgColor }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 h-full flex flex-row items-start gap-4 p-4 sm:p-6">
      <div className={`${bgColor} rounded-lg flex items-center justify-center flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14`}>
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </div>
      <div className="flex flex-col justify-start min-w-0 flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 text-left">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base text-left">{description}</p>
      </div>
    </div>
  )
}
