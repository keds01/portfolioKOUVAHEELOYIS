import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Vérifier le thème sauvegardé ou la préférence système
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Sauvegarder le thème dans localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    
    // Animation de changement de thème
    document.body.classList.add('theme-changing')
    
    // Appliquer le thème au document
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    
    // Mettre à jour la meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#000000' : '#ffffff')
    }
    
    // Retirer la classe d'animation après la transition
    setTimeout(() => {
      document.body.classList.remove('theme-changing')
    }, 300)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const value = {
    isDark,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
