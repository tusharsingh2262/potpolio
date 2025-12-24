import React from 'react'
import './ProjectHighlights.css'

const ProjectHighlights = () => {
  const highlights = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack platform with AWS deployment and CDN optimization'
    },
    {
      title: 'BI Tool Customization',
      description: 'Customized Superset for financial reporting and analysis'
    },
    {
      title: 'Customer Portal',
      description: 'Credit score management and bureau report system'
    },
    {
      title: 'CRM System',
      description: 'Comprehensive loan and client management solution'
    }
  ]

  return (
    <section className="project-highlights">
      <div className="highlights-container">
        <h2 className="highlights-title">Project Portfolio Highlights</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <h3 className="highlight-card-title">{highlight.title}</h3>
              <p className="highlight-card-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectHighlights

