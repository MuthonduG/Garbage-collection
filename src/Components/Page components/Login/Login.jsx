import React from 'react'
import './login.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import logo from '../../../Assets /icon2.png'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: ''}) 
  const [error, setError] = React.useState(false)
  const navigate = useNavigate()
  
  function handleChange(e) {
    const value = e.target.value
    const key = e.target.name
    setUser({ ...user, [key]: value })
  }

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      email: user.email, 
      password: user.password
    }
    try {
      const response = await axios.post('http://127.0.0.1:3000/login', userData)
      .then((response)=> {
        if(response.ok) {
          navigate('/dashboard')
        }
      })
    } catch (error ) {
      setError(true);
    }
  }
  

  return (
    <>
      <Navbar/>
      <section className="login__container container">
        <div className="login__container-body">
          <div className="form__group-logo">
            <img src={logo} alt="" />
            <strong>Taka</strong>
          </div>
          <form action="" className="form__login" onSubmit={handleSubmit}>
            <div className="login__form-input-grp">
              <label htmlFor="">Username/ Company name:</label>
              <input 
              type="text" 
              placeholder='Enter user email/ Company email'
              name='email' 
              value={user.email}
              onChange={handleChange}
              required/>
            </div>
            <div className="login__form-input-grp">
              <label htmlFor="">Password:</label>
              <input 
              type="password" 
              placeholder='Enter Password' 
              name='password' 
              value={user.password}
              onChange={handleChange}
              required/>
              <Link to='/'>Forgot password?</Link>
              {
                error? <strong className="error">Invalid username or password</strong>: ''
              }
            </div>
            <div className="login__form-buttons">
              <button onClick={handleSubmit} type="submit" className='btn sm'>Login</button>
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