import React from 'react'
import './about.css'
import image from '../../../Assets /header-bg.jpg'
import Card from '../Card/Card'
import Iframe from 'react-iframe'

const About = () => {
  return (
    <>
    <section className="about__container-holder container">
      <div id="about">
        <div className="about__content">
          <div className="about__content-header">
            <Iframe url='https://www.youtube.com/embed/EUBA-Gu5BXw'
              width="640px"
              height="320px"
              id=""
              allow='autoplay; encrpted-media'
              className=""
              display="block"
              position="relative"/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About

