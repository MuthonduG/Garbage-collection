import React from 'react'
import './contact.css'
import Card from '../Card/Card'
import { FiFacebook } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <>
      <section className="contact__container container">
        <div className="contact__container-holder">
          <div className="contact__form-holder">
            <form action="" className="form">
              <div className="form__input-group">
                <label htmlFor="">Name:</label>
                <input type="text" placeholder='Enter name or company name'/>
              </div>
              <div className="form__input-group">
                <label htmlFor="">Email:</label>
                <input type="text" placeholder='Enter name or company name'/>
              </div>
              <div className="form__input-group">
                <label htmlFor="">Phone number:</label>
                <input type="text" placeholder='Enter name or company name'/>
              </div>
              <div className="form__input-group">
                <label htmlFor="">Message:</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter message/ description'></textarea>
              </div>
              <div className="form__input-buttons">
                <button type="submit">Send us a message</button>
              </div>
            </form>
          </div>
          <div className="contact__body">
            <Card>
              <div className="contact__card-header">
                <h4>Contact us</h4>
              </div>
              <div className="contact__card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate, laborum quidem aspernatur nesciunt sunt non natus. Nemo, mollitia nam odio ex nobis, culpa reiciendis ut saepe esse, distinctio iusto?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam placeat minus quisquam distinctio, vitae laboriosam error in tenetur quaerat rerum sint vel, delectus culpa totam excepturi veniam sequi nulla!
                </p>
              </div>
              <div className="contact__card-icons">
                <div className="card__icons">
                  <FiFacebook/>
                  <a href="">
                    <strong>Facebook</strong>
                  </a>
                </div>
                <div className="card__icons">
                  <BsInstagram/>
                  <a href="">
                    <strong>Instagram</strong>
                  </a>
                </div>
                <div className="card__icons">
                  <BsWhatsapp/>
                  <a href="">
                    <strong>Whatsapp</strong>
                  </a>
                </div>
                <div className="card__icons">
                  <FiLinkedin/>
                  <a href="">
                    <strong>Linked In</strong>
                  </a>
                </div>
                <div className="card__icons">
                  <HiOutlineMail/>
                  <a href="">
                    <strong>Gmail Acc</strong>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact