import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className="about-heading" id='about'>
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <section className="about">
          <div className="about-image">
            <img src={"/about.png"} />
          </div>
          <div className="about-content">
            <h1>Developed by</h1>
            <h3>Devesh Upadhyay</h3>
            <p>Full Stack Developer ,     UI/UX Designer 
            </p>
            
            
          </div>
        </section>
      </div>
    </>
  )
}

export default About
