import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaLaravel, FaReact, FaMobile, FaDatabase, FaShoppingCart, FaRecycle, FaBuilding, FaUsers, FaFileInvoice, FaPalette } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filters = [
    { id: 'all', label: 'Tous', icon: null },
    { id: 'laravel', label: 'Laravel', icon: FaLaravel },
    { id: 'ui', label: 'UI/UX', icon: FaPalette },
    { id: 'ecommerce', label: 'E-commerce', icon: FaShoppingCart },
    { id: 'management', label: 'Gestion', icon: FaDatabase }
  ]

  const projects = [
    {
      id: 1,
      title: "Gestion Multisuperette en Ligne",
      description: "Solution centralisée pour la gestion simultanée de plusieurs superettes avec contrôle des stocks et synchronisation en temps réel.",
      category: "laravel",
      type: "management",
      technologies: ["Laravel", "MySQL", "JavaScript", "API REST"],
      duration: "Prévu 2025 - 4 mois",
      client: "Chaîne de superettes régionale",
      features: ["Contrôle des stocks en temps réel", "Synchronisation des données multi-points", "Suivi des ventes centralisé", "Interface unifiée"],
      image: "/images/project1.jpg",
      icon: FaShoppingCart,
      color: "#FF2D20"
    },
    {
      id: 2,
      title: "Plateforme de Recyclage de Ferraille",
      description: "Système complet de gestion industrielle incluant stocks, RH et opérations financières pour une entreprise de recyclage.",
      category: "laravel",
      type: "management",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "API REST"],
      duration: "Prévu 2025 - 6 mois",
      client: "Entreprise industrielle spécialisée",
      features: ["Gestion des stocks de ferraille", "Suivi des ressources humaines", "Automatisation financière", "Tableaux de bord personnalisés"],
      image: "/images/project2.jpg",
      icon: FaRecycle,
      color: "#28A745"
    },
    {
      id: 3,
      title: "Plateforme de Passation de Service Public-Privé",
      description: "Maintenance évolutive d'une plateforme régionale facilitant les échanges entre institutions publiques et partenaires privés.",
      category: "laravel",
      type: "management",
      technologies: ["Laravel", "PHP", "MySQL", "Sécurité avancée"],
      duration: "Prévu 2025 - Maintenance continue",
      client: "Institution publique régionale",
      features: ["Maintenance continue et sécurisée", "Mise à jour fonctionnelle", "Optimisation des performances", "Support technique régional"],
      image: "/images/project3.jpg",
      icon: FaBuilding,
      color: "#007BFF"
    },
    {
      id: 4,
      title: "Application de Gestion de Facturation Logistique",
      description: "Outil puissant pour matériels informatiques et industriels avec édition de factures et gestion automatisée des stocks.",
      category: "laravel",
      type: "management",
      technologies: ["Laravel", "JavaScript", "PDF Generator", "API"],
      duration: "Prévu 2025 - 3 mois",
      client: "Entreprise spécialisée en matériels",
      features: ["Édition de factures (proforma, bons de livraison)", "Gestion automatisée des stocks", "Suivi des opérations commerciales", "Rapports financiers automatisés"],
      image: "/images/project4.jpg",
      icon: FaFileInvoice,
      color: "#6F42C1"
    },
    {
      id: 5,
      title: "Plateforme Communautaire Togolaise",
      description: "Plateforme web innovante visant à valoriser les micro-entreprises et artisans togolais avec communauté engagée.",
      category: "laravel",
      type: "ecommerce",
      technologies: ["Laravel", "Vue.js", "MySQL", "Intégrations sociales"],
      duration: "Prévu 2025 - 5 mois",
      client: "Initiative communautaire togolaise",
      features: ["Communauté engagée comme force commerciale", "Mise en réseau des initiatives locales", "Visibilité des micro-entreprises", "Croissance solidaire des activités"],
      image: "/images/project5.jpg",
      icon: FaUsers,
      color: "#FD7E14"
    },
    {
      id: 6,
      title: "Maquettes UI de Haute Précision",
      description: "Interfaces mobiles et web avec souci du détail poussé : navigation fluide, hiérarchie visuelle maîtrisée et ergonomie pensée utilisateur.",
      category: "ui",
      type: "ui",
      technologies: ["Figma", "Adobe XD", "Prototypage avancé", "Design System"],
      duration: "Prévu 2025 - Projets multiples",
      client: "Divers projets personnels et clients",
      features: ["Navigation fluide et intuitive", "Hiérarchie visuelle maîtrisée", "Cohérence graphique parfaite", "Ergonomie pensée utilisateur"],
      image: "/images/project6.jpg",
      icon: FaPalette,
      color: "#000000"
    }
  ]

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'laravel') return project.category === 'laravel'
    if (activeFilter === 'ui') return project.category === 'ui'
    if (activeFilter === 'ecommerce') return project.type === 'ecommerce'
    if (activeFilter === 'management') return project.type === 'management'
    return true
  })

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="projects-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Mes Projets 2025</h2>
            <p className="section-subtitle">
              Des projets ambitieux prévus pour 2025 qui témoignent de ma vision et de mon engagement
            </p>
          </motion.div>

          <motion.div
            className="projects-filters"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.6 + filters.indexOf(filter) * 0.1 }}
              >
                {filter.icon && <filter.icon />}
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="projects-grid"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="project-image">
                    <div className="project-placeholder">
                      <project.icon style={{ color: project.color, fontSize: '3rem' }} />
                    </div>
                    <div className="project-overlay">
                      <motion.button
                        className="project-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir le projet
                      </motion.button>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-category">
                        <span style={{ backgroundColor: project.color }}>{project.type}</span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="project-meta">
                      <div className="project-duration">
                        <strong>Durée:</strong> {project.duration}
                      </div>
                      <div className="project-client">
                        <strong>Client:</strong> {project.client}
                      </div>
                    </div>

                    <div className="project-features">
                      <h4>Fonctionnalités clés:</h4>
                      <ul>
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 1 + index * 0.1 + featureIndex * 0.05 }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="projects-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p>Intéressé par mes réalisations ?</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir plus de projets
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
