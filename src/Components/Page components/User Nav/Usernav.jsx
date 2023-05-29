import React from 'react'
import './usernav.css'
import { Link } from 'react-router-dom'
import Icon from '../../../Assets /icon2.png'
import { userlinks } from '../../../data' 

const Usernav = () => {
  return (
    <>
      <section className="navbar__container-holder">
        <div className="navbar__container">
          <div className="navbar__icon">
            <Link to='/dashboard'>
              <img src={Icon} alt=""/>
              <h3>Taka</h3>
            </Link>
          </div>
          <div className="nav__links">
          {
            userlinks && userlinks.map(({name, path}, index)=> {
                return (
                    <li key={index}>
                        <Link to = {path}>{name}</Link>
                    </li>
                )
              })
            }
          </div>
          <div className="nav__buttons">
            <Link to="/login" className="btn sm">Log out</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Usernav