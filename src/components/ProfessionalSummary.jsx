import React from 'react'
import './ProfessionalSummary.css'

const ProfessionalSummary = () => {
  return (
    <section className="professional-summary">
      <div className="summary-container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-content">
          <div className="summary-left">
            <div className="floating-text">React</div>
            <p className="summary-text">
              Full Stack Developer with 2+ years of experience building CRM systems, 
              financial dashboards, and custom web portals. Specializes in frontend-heavy 
              applications, REST APIs, and Microsoft SQL-based systems. Passionate about 
              clean code, user-centric UI, and automation.
            </p>
            <p className="summary-text">
              Currently seeking full-time opportunities in MERN stack or React-focused 
              roles — remote or onsite.
            </p>
          </div>
          <div className="summary-right">
            <h3 className="expertise-title">Core Expertise</h3>
            <ul className="expertise-list">
              <li>React.js & Node.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Redux & API Integration</li>
              <li>SQL & MongoDB</li>
              <li>UI/UX Design</li>
            </ul>
            <div className="floating-icons">
              <div className="icon-node">Node.js</div>
              <div className="icon-react">⚛</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSummary

