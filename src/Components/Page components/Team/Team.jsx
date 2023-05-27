import React from 'react'
import './team.css'
import Card from '../Card/Card'
import { team } from '../../../data'

const Team = () => {
  return (
    <>
      <section className="team__container container">
        <div className="team__container-holder">
          <div className="team__header-holder">
            <h3>Our Dedicated Team</h3>
          </div>
          <div className="team__card-holder">
            {
              team.map(({image, name}, index) => {
                return (
                  <div className="card__holder">
                    <Card>
                      <img className='image' src={image} alt="" />
                    </Card>
                    <strong className='name'>{name}</strong>
                  </div>

                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Team