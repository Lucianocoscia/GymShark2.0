import React from 'react'
import logo from './images/logo-oficial.png'
import { Link } from 'react-router-dom'
import './Header.css'
import MenuNavbar from './MenuNavbar'

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
              <ul className='navbar '>
                <li><Link to={"/"} onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                <li><Link to={"/classes"} onClick={() => window.scrollTo(0, 0)}>Classes</Link></li>
                <li><Link to={"/schedule/monday"} onClick={() => window.scrollTo(0, 0)}>Schedule</Link></li>
                <li><Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                <li><Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
              </ul>
            </nav>

            <div className='lateral-nav-container'>
              <div className='user-icon'><i className='fa-regular fa-user'></i></div>
              <div className='join-button '>
                <i className='plus-icon fa-regular fa-plus'></i>
                <h3 className='text-button' >Join Class Now</h3>
              </div>
            </div>
            <div className='burger-button-container'>
             <MenuNavbar/>
            </div>
        </header>

    </>
  )
}

export default Header