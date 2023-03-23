import React from 'react'
import logo from './images/logo-oficial.png'
import { Link } from 'react-router-dom'

import './Header.css'
const Header = () => {


  //Funcion q hace q cambie el navbar
  const isScrolling = () => {
    const headerEl = document.querySelector('header')
    let windowPosition = window.scrollY > 100
    headerEl.classList.toggle('active', windowPosition)
  }
  window.addEventListener('scroll', isScrolling);

  return (
    <>
        <header>
            <Link to={'/'}><img className='logo' src={logo}/></Link>

            <nav>
              <ul className='navbar'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/classes"}>Classes</Link></li>
                <li><Link to={"/schedule"}>Schedule</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
              </ul>
            </nav>

            <div className='lateral-nav-container'>
              <div className='user-icon'><i className='fa-regular fa-user'></i></div>
              <div className='join-button'>
                <i className='plus-icon fa-regular fa-plus'></i>
                <h3 className='text-button' >Join Class Now</h3>
              </div>
            </div>
          
        </header>
    </>
  )
}

export default Header