import React from 'react'
import logo from './images/logo-blanco.png'

import './Footer.css'
const Footer = () => {
  return (
    <>
      <footer>

          <div className='container-col1'>
            <img className='logo-footer' src={logo} alt="" />

            <p className='p-footer'>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
            <div className='container-brand-icons'>
              <i className='fa-brands fa-youtube'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-linkedin'></i>
            </div>
            <p className='p-footer'>Privacy Policy | © 2023 GymShark <br />Developed by Luciano Coscia</p>
          </div>

          <div className='container-col2'>
            <div className='container-classes-footer'>
              <h2 className='title-footer'>Our Classes</h2>
              <span className='linea-footer'></span>
              <p>Fitness Classes</p>
              <p>Aerobics Classes</p>
              <p>Power Yoga</p>
              <p>Learn Machines</p>
              <p>Full-body Strength</p>
            </div>

          </div>
          <div className='container-col2'>
            <div className='container-classes-footer'>
              <div>
                <h2 className='title-footer'>Working Hours</h2>
                <span className='linea-footer'></span>
              </div>
                <h4>Monday - Friday:</h4>
                <p>7:00am - 21:00pm</p>
                <h4>Saturday:</h4>
                <p>7:00am - 19:00pm</p>
                <h4>Sunday - Closed</h4>
            </div>
          </div>
          

        
      </footer>
    </>
  )
}

export default Footer