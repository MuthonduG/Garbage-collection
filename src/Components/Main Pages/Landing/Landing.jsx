import React from 'react'
import './landing.css'
import Navbar from '../../Page components/Navbar/Navbar'
import Header from '../../Page components/Header/Header'
import About from '../../Page components/About/About'
import Services from '../../Page components/Services /Services'
import Team from '../../Page components/Team/Team'
import Contact from '../../Page components/Contact/Contact'
import Footer from '../../Page components/Footer/Footer'

const Landing = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Landing