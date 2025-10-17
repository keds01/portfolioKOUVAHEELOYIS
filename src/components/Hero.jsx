import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import './Hero.css'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const fullText = "Développeur en formation depuis 2023, préparons ensemble vos projets 2025 avec passion et expertise"
  const [isTyping, setIsTyping] = useState(true)
  const { isDark } = useTheme()

  useEffect(() => {
    let index = 0
    const typeText = () => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1))
        index++
        setTimeout(typeText, 100)
      } else {
        setIsTyping(false)
      }
    }
    
    const timer = setTimeout(typeText, 1000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Kouvahe Eloyis
              <br />
              <span className="highlight">Djiedzom Ekoué</span>
            </motion.h1>

            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2>Développeur Web & UI Designer</h2>
              <p>Basé à Lomé, Togo</p>
            </motion.div>

            <motion.div
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="typing-text">
                {currentText}
                {isTyping && <span className="cursor">|</span>}
              </p>
            </motion.div>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
              >
                Découvrir mes projets
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div
              className="photo-container"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={isDark ? "./photo-dark.png" : "./photo-light.png"}
                alt="Kouvahe Eloyis Djiedzom Ekoué"
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                key={isDark ? 'dark' : 'light'}
              />
              <motion.div
                className="photo-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span>Développeur Web & UI Designer</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            className="scroll-btn"
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowDown />
            <span>Scroll</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
