import React, { useState } from 'react'
import './profile.css'
import logo from '../../../Assets /icon2.png'
import Usernav from '../User Nav/Usernav'
import Footer from '../Footer/Footer'
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  

const Profile = () => {
    let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
        <Usernav/>
        <section className="profile__container container">
            <article className="profile__card-holder">
                <div className="profile__card-avatar">
                    <img src="https://image.pngaaa.com/603/5170603-middle.png" alt="" />
                </div>
                <div className="profile__card-info">
                    <div className="profile__info-header">
                        <h4>Hi Max254</h4>
                        <a onClick={openModal} className='btn sm'>
                            <BiEdit/> Edit
                        </a>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
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
                                            <button type="submit" className='btn sm'>Update Profile</button>
                                        </div>
                                    </form>
                                </div>
                            </Modal>
                    </div>
                    <div className="profile__info-content">
                        <div className="profile__content-user">
                            <strong>Name:</strong>
                            <small>Maxwell Githinji</small>
                        </div>
                        <div className="profile__content-user">
                            <strong>Email:</strong>
                            <small>maxwellgithinji@gmail.com</small>
                        </div>
                        <div className="profile__content-user">
                            <strong>Phone number:</strong>
                            <small>254 795 107 488</small>
                        </div>
                        <div className="profile__content-user">
                            <strong>Current residence:</strong>
                            <small>Maxwell Githinji</small>
                        </div>
                        <div className="profile__content-user">
                            <strong>Building:</strong>
                            <small>Amani Plaza</small>
                        </div>
                        <div className="profile__content-package">
                            <strong>Premium</strong>
                            <small>Active</small>
                        </div>

                    </div>
                </div>
            </article>
        </section>
        <Footer/>
    </>
  )
}

export default Profile