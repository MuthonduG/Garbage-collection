import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import logo from '../../../Assets /icon2.png'

const Signup = () => {
  return (
    <>
      <Navbar/>
      <section className="login__container container">
        <div className="login__container-body">
          <div className="form__group-logo">
            <img src={logo} alt="" />
            <strong>Taka</strong>
          </div>
          <form action="" className="form__login">
            <div className="login__form-input-grp">
              <label htmlFor="">Username/ Comapany name:</label>
              <input type="text" placeholder='Enter username/ Company name' required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Name:</label>
              <input type="text" placeholder='Enter your full name' required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Email:</label>
              <input type="email" placeholder='Enter your email' required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Current Location/Area:</label>
              <input type="text" placeholder='Exaple Eastleigh' required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Building:</label>
              <input type="text" placeholder='Enter Your Building' required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Phone number:</label>
              <input type="password" placeholder='Example 254722022022' required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Password:</label>
              <input type="password" placeholder='Enter Password' required/>
            </div>
            <div className="login__form-buttons">
              <button type="submit" className='btn sm'>Login</button>
              <Link to='/login'>Already have an account, Login</Link>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Signup