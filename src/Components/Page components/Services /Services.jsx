import React from 'react'
import './services.css'
import { FaCrown } from 'react-icons/fa'

const Services = () => {
  return (
    <>
        <section className="services__container container">
            <div id='services' className="services__holder">
                <div className="services__main-header">
                    <h2>Our Services</h2>
                </div>
                <div className="services">
                    <article className="service-one">
                        <div className="services__card-content">
                            <div className="services__card-header">
                                <h3>Residential Package</h3>
                            </div>
                            <div className="services__card-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo consectetur labore alias fugit maiores nesciunt, optio architecto quo omnis, blanditiis consequuntur recusandae quibusdam delectus magnam aspernatur dicta, ut culpa?
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="service-two">
                        <div className="services__card-content">
                            <div className="services__card-header">
                                <h3>Individual Package</h3>
                                < FaCrown/>
                            </div>
                            <div className="services__card-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo consectetur labore alias fugit maiores nesciunt, optio architecto quo omnis, blanditiis consequuntur recusandae quibusdam delectus magnam aspernatur dicta, ut culpa?
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="service-three">
                        <div className="services__card-content">
                            <div className="services__card-header">
                                <h3>Commercial Package</h3>
                                < FaCrown/>
                            </div>
                            <div className="services__card-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo consectetur labore alias fugit maiores nesciunt, optio architecto quo omnis, blanditiis consequuntur recusandae quibusdam delectus magnam aspernatur dicta, ut culpa?
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="service-four">
                        <div className="services__card-content">
                            <div className="services__card-header">
                                <h3>Chemical Disposal</h3>
                            </div>
                            <div className="services__card-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo consectetur labore alias fugit maiores nesciunt, optio architecto quo omnis, blanditiis consequuntur recusandae quibusdam delectus magnam aspernatur dicta, ut culpa?
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="service-five">
                        <div className="services__card-content">
                            <div className="services__card-header">
                                <h3>One-time pickup</h3>
                            </div>
                            <div className="services__card-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo consectetur labore alias fugit maiores nesciunt, optio architecto quo omnis, blanditiis consequuntur recusandae quibusdam delectus magnam aspernatur dicta, ut culpa?
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="service-six">
                        <div className="services__card-content">
                            <div className="services__card-header">
                                <h3>Recycling services</h3>
                                < FaCrown/>
                            </div>
                            <div className="services__card-body">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo consectetur labore alias fugit maiores nesciunt, optio architecto quo omnis, blanditiis consequuntur recusandae quibusdam delectus magnam aspernatur dicta, ut culpa?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services