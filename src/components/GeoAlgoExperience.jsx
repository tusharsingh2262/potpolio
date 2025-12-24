import React from 'react'
import './GeoAlgoExperience.css'

const GeoAlgoExperience = () => {
  return (
    <section className="geoalgo-experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">GeoAlgo Technologies Experience</h2>
          <p className="experience-role">Full Stack Developer | Aug 2023 - Oct 2024 | Kolkata</p>
        </div>
        
        <div className="projects-grid">
          <div className="project-item">
            <div className="project-number">01</div>
            <h3 className="project-name">Roopya BI (Customized Superset)</h3>
            <p className="project-description">
              Customized Superset BI tool for preparing charts to calculate profit and loan details. 
              Integrated into CRM and Customer Portal for client bureau reports.
            </p>
          </div>

          <div className="project-item">
            <div className="project-number">02</div>
            <h3 className="project-name">Customer Portal</h3>
            <p className="project-description">
              Developed system for managing credit scores and bureau details. Users can check 
              default dates and comprehensive bureau report information.
            </p>
          </div>

          <div className="project-item">
            <div className="project-number">03</div>
            <h3 className="project-name">CRM Module</h3>
            <p className="project-description">
              Built client and loan management system for CI and LSP providing loans. Clients can 
              set loan criteria and manage client details. Team of 7 developers.
            </p>
          </div>
        </div>

        <div className="crm-deep-dive">
          <div className="crm-visual">
            <div className="crm-dashboard">
              <div className="dashboard-header">CRM</div>
              <div className="dashboard-metrics">
                <div className="metric-card">$1.25M</div>
                <div className="metric-card">370K</div>
                <div className="metric-card">677K</div>
                <div className="metric-card">$77K</div>
              </div>
              <div className="dashboard-charts">
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
              </div>
            </div>
          </div>
          <div className="crm-details">
            <h3 className="crm-title">Project Deep Dive: CRM Module</h3>
            <h4 className="crm-subtitle">Comprehensive Loan Management</h4>
            <p className="crm-description">
              Developed for managing clients and loans for Credit Institutions and Loan Service 
              Providers. Enables clients to set loan criteria and manage client details efficiently.
            </p>
            <div className="crm-tech">
              <h5 className="tech-title">Technologies Used</h5>
              <p className="tech-stack">
                React.js, TypeScript, Redux, Node.js, Material-UI, Microsoft SQL Server, 
                API Integration, UI/UX Design
              </p>
            </div>
            <div className="crm-team">
              <h5 className="team-title">Team Collaboration</h5>
              <p className="team-info">
                Worked in a team of 7 developers, contributing to frontend architecture and 
                API integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeoAlgoExperience

