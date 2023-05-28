import React from 'react'
import './footer.css'
import { FiFacebook } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <>
      <section className="navbar__container-holder footer">
        <footer className="footer__container container">
          <div className="footer__container-holder">
            <div className="footer__logo">
              <h2>Taka</h2>
              <strong>Cleaning the earth a street at a time</strong>
            </div>
            <div className="footer__contact-info">
              <div className="footer__contact-header">
                <strong>Contact us:</strong>
              </div>
              <div className="footer__contact">
                <FiFacebook/>
                <small>@taka-invaestments_africa</small>
              </div>
              <div className="footer__contact">
                <BsInstagram/>
                <small>@taka-invaestments_africa</small>
              </div>
              <div className="footer__contact">
                <BsWhatsapp/>
                <small>+254 795 107 488</small>
              </div>
              <div className="footer__contact">
                <FiLinkedin/>
                <small>@taka-invaestments_africa</small>
              </div>
              <div className="footer__contact">
                <HiOutlineMail/>
                <small>info.taka@africainvestments.com</small>
              </div>
            </div>
            <div className="footer__news-letter">
              <form action="" className="form">
                <div className="form__input-group">
                  <label htmlFor="">Subscribe to get our offers:</label>
                  <input type="email" placeholder='Enter your email' required/>
                </div>
                <div className="form__input-buttons">
                  <button className='subscribe' type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer