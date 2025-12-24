import React from 'react'
import './TechnicalSkills.css'

const TechnicalSkills = () => {
  return (
    <section className="technical-skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Frontend Development</h3>
            <p className="category-skills">React.js, Redux, TypeScript, JavaScript, JSP, Material-UI</p>
          </div>
          <div className="skill-category">
            <h3 className="category-title">Backend Development</h3>
            <p className="category-skills">Node.js, Express, Spring Boot, REST APIs, Apache Server</p>
          </div>
          <div className="skill-category">
            <h3 className="category-title">Database & DevOps</h3>
            <p className="category-skills">Microsoft SQL Server, PostgreSQL, MongoDB, AWS, DevOps</p>
          </div>
          <div className="skill-category">
            <h3 className="category-title">Design & Tools</h3>
            <p className="category-skills">UI/UX Design, Python, Computer Science Fundamentals</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills

