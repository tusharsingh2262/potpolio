import React from 'react'
import Hero from './components/Hero'
import ProfessionalSummary from './components/ProfessionalSummary'
import TechnicalSkills from './components/TechnicalSkills'
import CurrentWork from './components/CurrentWork'
import GeoAlgoExperience from './components/GeoAlgoExperience'
import HopeResearch from './components/HopeResearch'
import Education from './components/Education'
import ProjectHighlights from './components/ProjectHighlights'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <ProfessionalSummary />
      <TechnicalSkills />
      <CurrentWork />
      <GeoAlgoExperience />
      <HopeResearch />
      <Education />
      <ProjectHighlights />
      <Contact />
    </div>
  )
}

export default App

