import React from 'react'
import { motion } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
