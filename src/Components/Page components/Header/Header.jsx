import React from 'react'
import './header.css'
import image from '../../../Assets /header-bg.jpg'

const Header = () => {
  return (
    <>
      <section className="header__container-holder container">
        <header className='header'>
          <div className="header__title">
            <h1>Welcome To Taka</h1>
          </div>
        </header>
      </section>
    </>
  )
}

export default Header