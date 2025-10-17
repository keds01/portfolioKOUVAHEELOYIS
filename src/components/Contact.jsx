import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaCheck } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Localisation",
      info: "Lomé, Togo",
      color: "#28A745"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      info: "eloyisfrx@icloud.com",
      color: "#007BFF"
    },
    {
      icon: FaPhone,
      title: "Téléphone",
      info: "+228 98 59 01 9",
      color: "#6F42C1"
    }
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com",
      label: "GitHub",
      color: "#333333"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "#1DA1F2"
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Contactez-moi</h2>
            <p className="section-subtitle">
              Prêt à donner vie à votre projet ? Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel.
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Informations de contact</h3>
              <p>Basé à Lomé, disponible pour des projets locaux et internationaux</p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="contact-icon" style={{ color: item.color }}>
                      <item.icon />
                    </div>
                    <div className="contact-text">
                      <h4>{item.title}</h4>
                      <p>{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-section">
                <h4>Suivez-moi</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ color: social.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="contact-form-wrapper">
                <h3>Envoyez-moi un message</h3>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <input
                      type="text"
                      name="subject"
                      placeholder="Sujet"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </motion.div>

                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-textarea"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'submitted' : ''}`}
                    disabled={isSubmitting || isSubmitted}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="spinner"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Envoi en cours...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FaCheck />
                        Message envoyé !
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
