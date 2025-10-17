import React from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="theme-toggle-track"
        animate={{ backgroundColor: isDark ? '#333333' : '#e5e5e5' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="theme-toggle-thumb"
          animate={{
            x: isDark ? 24 : 0,
            backgroundColor: isDark ? '#ffffff' : '#000000'
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <motion.div
            className="theme-icon"
            animate={{ 
              opacity: isDark ? 0 : 1,
              rotate: isDark ? 180 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <FaSun />
          </motion.div>
          <motion.div
            className="theme-icon"
            animate={{ 
              opacity: isDark ? 1 : 0,
              rotate: isDark ? 0 : -180
            }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

