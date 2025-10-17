import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLaravel, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaMobile } from 'react-icons/fa'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'Laravel', icon: FaLaravel, level: 95, color: '#FF2D20' },
    { name: 'PHP', icon: FaPhp, level: 90, color: '#777BB4' },
    { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
    { name: 'React', icon: FaReact, level: 80, color: '#61DAFB' },
    { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
    { name: 'MySQL', icon: FaDatabase, level: 85, color: '#4479A1' },
    { name: 'Mobile UI', icon: FaMobile, level: 88, color: '#000000' }
  ]

  const experiences = [
    {
      year: "2025",
      title: "Projets de Développement",
      company: "Portfolio & Clients",
      description: "Développement d'applications web robustes avec Laravel, création d'interfaces utilisateur exceptionnelles. 6 projets prévus pour cette année."
    },
    {
      year: "2024",
      title: "Formation en Design & Développement",
      company: "Apprentissage Intensif",
      description: "Acquisition des compétences en UI/UX Design, maîtrise de Laravel, PHP, JavaScript. Développement de projets personnels et préparation pour 2025."
    },
    {
      year: "2023",
      title: "Début en Développement Web",
      company: "Formation Initiale",
      description: "Premiers pas dans le développement web, apprentissage des bases de la programmation et des technologies web modernes."
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              À Propos de Moi
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Passionné par l'innovation technologique et l'excellence visuelle
            </motion.p>
          </div>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                Depuis 2023, je me suis lancé dans le développement web avec passion et détermination. 
                En 2024, j'ai approfondi mes compétences en design UI/UX et préparé 6 projets ambitieux 
                pour 2025, témoignant de ma progression constante et de mon engagement.
              </p>
              <p>
                Mon approche combine rigueur technique et sensibilité UI/UX, me permettant de créer 
                des solutions web robustes et esthétiques. Certains projets sont déjà réalisés, 
                d'autres sont en cours de développement, témoignant de ma progression constante.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>6</h3>
                  <p>Projets En cours/Réalisés en 2025</p>
                </div>
                <div className="stat">
                  <h3>2</h3>
                  <p>Années d'Apprentissage</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Motivation & Engagement</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-skills"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3>Compétences Techniques</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3>Parcours Professionnel</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                >
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <div className="timeline-year">{exp.year}</div>
                    <h4>{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
