import React from 'react'
import './navbar.css'
import Icon from '../../../Assets /icon2.png'
import {navlinks} from '../../../data'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <section className="navbar__container-holder">
        <div className="navbar__container">
          <div className="navbar__icon">
            <Link to='/'>
            <img src={Icon} alt="" />
            <h3>Taka</h3>
            </Link>
            
          </div>
          <div className="nav__links">
          {
            navlinks && navlinks.map(({name, path}, index)=> {
                return (
                    <li key={index}>
                        <a href = {path}>{name}</a>
                    </li>
                )
              })
            }
          </div>
          <div className="nav__buttons">
            <Link to="/login" className="btn sm">Log in</Link>
            <Link to="/signup" className="btn sm">Sign up</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar