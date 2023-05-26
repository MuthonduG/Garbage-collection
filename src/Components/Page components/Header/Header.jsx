import React from 'react'
import './header.css'
import image1 from '../../../Assets /header-bg-1.png'
import image2 from '../../../Assets /header-bg-2.png'

const Header = () => {
  return (
    <>
      <section className="header__container-holder container">
        <header className='header'>
          <div className="header__image-one">
            <img src={image1} alt="" />
          </div>
          <div className="header__title">
            <h1>Welcome To Taka</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nihil ut aliquam ipsa ea voluptatem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.
            </p>
          </div>
          <div className="header__image-one">
            <img src={image2} alt="" />
          </div>
        </header>
      </section>
    </>
  )
}

export default Header