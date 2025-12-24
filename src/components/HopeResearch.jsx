import React from 'react'
import './HopeResearch.css'

const HopeResearch = () => {
  return (
    <section className="hope-research">
      <div className="hope-container">
        <div className="hope-header">
          <h2 className="hope-title">Hope Research Group</h2>
          <p className="hope-role">Software Developer | May 2023 - July 2023 | Bengaluru (Remote)</p>
        </div>
        
        <div className="hope-content">
          <div className="hope-card">
            <h3 className="hope-card-title">Store Management System</h3>
            <p className="hope-card-text">
              Managed store products and final payment system. Handled product listings with 
              pricing and store employee management for billing operations.
            </p>
          </div>
          
          <div className="hope-card">
            <h3 className="hope-card-title">Development & Testing</h3>
            <p className="hope-card-text">
              Responsible for development using latest frameworks and comprehensive testing 
              as per project requirements. Team size: 6 developers.
            </p>
          </div>
          
          <div className="hope-card">
            <h3 className="hope-card-title">Tech Stack</h3>
            <p className="hope-card-text">
              React.js, JavaScript, Material-UI, UI Development and Testing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HopeResearch

