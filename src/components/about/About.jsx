import React from 'react'
import './about.css'
import AboutMe from '../../assets/about-img.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={AboutMe} alt="About Me" />
            </div>
        </div>

        <div className="about__content">
            
          <h3>what makes our coffee special?</h3>
          <p>Our coffee is expertly selected, giving the best quality of the bean, and the best flavor. Our coffee is grown in greenhouses going through a meticulous harvesting process, allowing the bean to obtain the best nutrients, giving a high degree of warmth and flavor.</p>

          <a href="#contact" className='btn btn-about'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About