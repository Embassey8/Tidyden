import ContactForm from "@/components/ContactForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | TidyDen",
  description: "Get in touch with TidyDen for any questions about our cleaning services",
}

export default function ContactPage() {
  return <ContactForm />
}

