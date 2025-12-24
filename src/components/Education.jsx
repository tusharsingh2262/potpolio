import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section className="education">
      <div className="education-container">
        <h2 className="education-section-title">Education & Foundation</h2>
        <div className="education-content">
          <div className="education-left">
            <div className="education-number">0</div>
            <p className="education-text">Strong academic foundation in</p>
            <p className="education-text">Computer Science fundamentals</p>
          </div>
          <div className="education-right">
            <h3 className="education-institution">B.P. Poddar Institute Of Management and Technology</h3>
            <p className="education-degree"><strong>Bachelor of Technology - BTech</strong></p>
            <p className="education-field">Computer Science</p>
            <p className="education-duration">2018 - 2022</p>
            <p className="education-grade">8.46/10.0</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

