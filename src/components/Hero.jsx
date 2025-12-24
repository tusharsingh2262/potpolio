import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-name">Tushar Raj</h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-subtitle">specializing in React.js, Node.js, and modern web applications</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a href="https://linkedin.com" className="btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image">
            <div className="workspace-visual">
              <div className="monitor monitor-left"></div>
              <div className="monitor monitor-right"></div>
              <div className="desk"></div>
              <div className="light light-1"></div>
              <div className="light light-2"></div>
              <div className="plant plant-1"></div>
              <div className="plant plant-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

