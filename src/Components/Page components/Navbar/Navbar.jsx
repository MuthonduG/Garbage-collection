import React from 'react'
import './navbar.css'
import Icon from '../../../Assets /icon2.png'
import {navlinks} from '../../../data'

const Navbar = () => {
  return (
    <>
      <section className="navbar__container-holder">
        <div className="navbar__container">
          <div className="navbar__icon">
            <img src={Icon} alt="" />
            <h3>Taka</h3>
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
            <a href="!#" className="btn sm">Log in</a>
            <a href="!#" className="btn sm">Sign up</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar