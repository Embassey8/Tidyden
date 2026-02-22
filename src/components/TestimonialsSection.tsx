"use client"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import ContactSection from "./ContactSection"

const testimonials = [
  {
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    author: "Isabella Rodriguez",
    position: "CEO and Co-founder of ABC Company",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    author: "Gabrielle Williams",
    position: "CEO and Co-founder of ABC Company",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    author: "Samantha Johnson",
    position: "CEO and Co-founder of ABC Company",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    author: "Natalie Martinez",
    position: "CEO and Co-founder of ABC Company",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    author: "Victoria Thompson",
    position: "CEO and Co-founder of ABC Company",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    author: "John Peter",
    position: "CEO and Co-founder of ABC Company",
    image: "/placeholder.svg?height=40&width=40",
  },
]

// Double the testimonials array for continuous scroll effect
const doubledTestimonials = [...testimonials, ...testimonials]

const TestimonialCard = ({
  text,
  author,
  position,
  image,
}: {
  text: string
  author: string
  position: string
  image: string
}) => (
  <Card className="w-[350px] p-6 mx-4 bg-card">
    <Quote className="w-8 h-8 text-primary mb-4" />
    <p className="text-muted-foreground mb-6 min-h-[80px]">{text}</p>
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={image} alt={author} />
        <AvatarFallback>
          {author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold text-sm">{author}</h3>
        <p className="text-xs text-muted-foreground">{position}</p>
      </div>
    </div>
  </Card>
)

const TestimonialsSection = () => {
  return (
    <>
      <section className="py-16 overflow-hidden bg-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Hear from other TidyDen users:</h2>
        </motion.div>

        <div className="relative">
          {/* First row - moving left */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex mb-8 w-fit"
          >
            {doubledTestimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} {...testimonial} />
            ))}
          </motion.div>

          {/* Second row - moving right */}
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex w-fit"
          >
            {doubledTestimonials.slice(0, 6).map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} {...testimonial} />
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto px-4 mt-12 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            GET YOUR QUOTE
          </motion.button>
        </div>
      </section>
      <ContactSection />
    </>
  )
}

export default TestimonialsSection

