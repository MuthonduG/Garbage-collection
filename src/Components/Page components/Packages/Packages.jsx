import React from 'react'
import './packages.css'
import Footer from '../Footer/Footer'
import Usernav from '../User Nav/Usernav'

const Packages = () => {
  return (
    <>
    <Usernav/>
    <section className="packages__container container">
      <div className="packages__container-holder">
        <article className="packages__card">
          <div className="packages__card-header">
            <div className="packages__header-main">
              <h2>Basic</h2>
            </div>
            <div className="packages__header-content">
              <strong>Offer:</strong>
              <small className="offer__crossed-price">$ 3.00 pm</small>
              <small className="offer__current-price">$ 2.00 pm</small>
            </div>
          </div>
          <div className="packages__card-content">
            <div className="packages__card-includes">
              <strong>Garbage bags:</strong>
              <small>2 bags per week</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage container:</strong>
              <small>None</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage collection:</strong>
              <small>Once per week</small>
            </div>
          </div>
        </article>
        <article className="packages__card">
          <div className="packages__card-header">
            <div className="packages__header-main">
              <h2>Premium</h2>
            </div>
            <div className="packages__header-content">
              <strong>Offer:</strong>
              <small className="offer__crossed-price">$ 4.50 pm</small>
              <small className="offer__current-price">$ 3.00 pm</small>
            </div>
          </div>
          <div className="packages__card-content">
            <div className="packages__card-includes">
              <strong>Garbage bags:</strong>
              <small>4 bags per week</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage container:</strong>
              <small>One container</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage collection:</strong>
              <small>Twice per week</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage analysis:</strong>
              <small>Once per two-weeks</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage education:</strong>
              <small>Once per two-weeks</small>
            </div>
          </div>
        </article>
        <article className="packages__card">
          <div className="packages__card-header">
            <div className="packages__header-main">
              <h2>Gold</h2>
            </div>
            <div className="packages__header-content">
              <strong>Offer:</strong>
              <small className="offer__crossed-price">$ 8.00 pm</small>
              <small className="offer__current-price">$ 7.00 pm</small>
            </div>
          </div>
          <div className="packages__card-content">
            <div className="packages__card-includes">
              <strong>Garbage bags:</strong>
              <small>8 bags per week</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage container:</strong>
              <small>4 containers</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage collection:</strong>
              <small>Four times per week</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage analysis:</strong>
              <small>Once per week</small>
            </div>
            <div className="packages__card-includes">
              <strong>Garbage education:</strong>
              <small>Once per week</small>
            </div>
            <div className="packages__card-includes">
              <strong>Change of container:</strong>
              <small>Twice per week</small>
            </div>
          </div>
        </article>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Packages