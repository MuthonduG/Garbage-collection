import React from 'react'
import './notfound.css'
import Usernav from '../User Nav/Usernav'
import Footer from '../Footer/Footer'
import Card from '../Card/Card'

const Notfound = () => {
  return (
    <>
    <Usernav/>
        <section className="notfound__container container">
            <div className="notfound__container-holder">
                <Card>
                    <h1>Error 404</h1>
                    <h3>Page Not Found</h3>
                </Card>
            </div>
        </section>
    <Footer/>
    </>
  )
}

export default Notfound 