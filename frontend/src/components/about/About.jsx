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
            {/* enter about yourself */}
          </div>
        </section>
      </div>
    </>
  )
}

export default About
