import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-left">
            <h2 className="contact-title">Let's Build Something Great Together</h2>
            <p className="contact-text">
              Open to full-time opportunities in MERN stack or React-focused roles. Whether 
              remote or onsite, I'm ready to bring my expertise in building scalable, 
              user-centric applications to your team.
            </p>
            <p className="contact-text">
              With proven experience in CRM systems, e-commerce platforms, and financial 
              dashboards, I deliver clean code and exceptional user experiences.
            </p>
            <div className="contact-buttons">
              <a href="mailto:tusharsingh2262@gmail.com" className="btn-email">Email Me</a>
              <a href="https://linkedin.com" className="btn-linkedin" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-location">Location</p>
            <p className="contact-location-text">Kolkata, West Bengal, India</p>
            <h3 className="contact-heading">Contact</h3>
            <a href="mailto:tusharsingh2262@gmail.com" className="contact-email">tusharsingh2262@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

