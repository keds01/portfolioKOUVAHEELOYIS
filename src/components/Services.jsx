import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaPalette, FaLightbulb, FaRocket, FaShieldAlt, FaMobile } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: FaCode,
      title: "Développement Laravel",
      description: "Applications web robustes et sécurisées, architecture propre et maintenable",
      features: ["API REST", "Sécurité avancée", "Performance optimisée", "Maintenance continue"],
      color: "#FF2D20"
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Interfaces centrées utilisateur, expériences digitales mémorables",
      features: ["Maquettes haute précision", "Prototypage interactif", "Design responsive", "Tests utilisateur"],
      color: "#000000"
    },
    {
      icon: FaLightbulb,
      title: "Consultation Technique",
      description: "Solutions sur mesure, stratégies digitales adaptées",
      features: ["Audit technique", "Architecture système", "Optimisation", "Formation équipe"],
      color: "#F7DF1E"
    },
    {
      icon: FaRocket,
      title: "Déploiement & DevOps",
      description: "Mise en production sécurisée et monitoring continu",
      features: ["Déploiement automatisé", "Monitoring 24/7", "Sauvegarde", "Scaling automatique"],
      color: "#61DAFB"
    },
    {
      icon: FaShieldAlt,
      title: "Sécurité Web",
      description: "Protection avancée contre les menaces et vulnérabilités",
      features: ["Audit sécurité", "Chiffrement SSL", "Protection DDoS", "Conformité RGPD"],
      color: "#28A745"
    },
    {
      icon: FaMobile,
      title: "Applications Mobiles",
      description: "Interfaces mobiles optimisées et applications cross-platform",
      features: ["Design mobile-first", "PWA", "Performance", "App stores"],
      color: "#007AFF"
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          ref={ref}
          className="services-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="services-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Mes Services</h2>
            <p className="section-subtitle">
              Des solutions complètes pour transformer vos idées en succès numériques
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon />
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        className="service-feature"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.8 + index * 0.1 + featureIndex * 0.05 
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="service-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="service-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p>Intéressé par mes services ?</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuter de votre projet
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

