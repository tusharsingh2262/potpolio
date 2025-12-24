import React from 'react'
import './CurrentWork.css'

const CurrentWork = () => {
  return (
    <section className="current-work">
      <div className="work-container">
        <h2 className="work-section-title">Current Work: Freelance Projects</h2>
        <div className="work-card">
          <div className="work-header">
            <span className="work-date">Dec 2024 - Present</span>
            <h3 className="work-title">Printophile E-Commerce Platform</h3>
          </div>
          <div className="work-content">
            <div className="work-description">
              <p>
                Designed and developed a full-stack e-commerce platform with category-wise 
                browsing, featured products, and modern responsive UI. Built scalable React.js 
                components for product listings, quick view, and customizable options.
              </p>
              <p>
                Developed backend with Node.js/Express and PostgreSQL, including product catalog 
                management, cart, wishlist, and order processing. Integrated secure authentication 
                and payment workflows.
              </p>
            </div>
            <div className="work-achievements">
              <h4 className="achievements-title">Key Achievements</h4>
              <ul className="achievements-list">
                <li>Deployed on AWS with CDN optimization</li>
                <li>Enhanced customer trust with secure checkout</li>
                <li>Optimized load times for better engagement</li>
                <li>Improved UX driving higher conversions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentWork

