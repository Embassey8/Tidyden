import React from 'react'
import { Navbar } from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import Comparison from '@/components/comparison'
import TidyDenLanding from '@/components/TidyDenLanding'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/ContactSection'
import CleaningMarketplaceSection from '@/components/CleaningMarketplaceSection'


const HomeContainer = () => {
  return (
    <div className=''>
        <Navbar />
        <HeroSection />
        <TestimonialsSection />
        <Comparison />
        <TidyDenLanding />
        <CleaningMarketplaceSection />
        <ContactSection />
    </div>
  )
}

export default HomeContainer