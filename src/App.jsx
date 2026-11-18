import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <motion.main
      className="bg-bg-primary min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </motion.main>
  )
}
