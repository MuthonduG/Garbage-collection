import React from 'react'
import './login.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import logo from '../../../Assets /icon2.png'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
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
              <label htmlFor="">Username/ Company name:</label>
              <input type="text" placeholder='Enter username/ Company name' required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Password:</label>
              <input type="password" placeholder='Enter Password' required/>
              <Link to='/'>Forgot password?</Link>
            </div>
            <div className="login__form-buttons">
              <button type="submit" className='btn sm'>Login</button>
              <Link to='/signup'>Don't have an account? Sign up</Link>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Login