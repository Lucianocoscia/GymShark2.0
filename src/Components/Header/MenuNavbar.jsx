import React from 'react'
import './MenuNavbar.css'
import { Link } from 'react-router-dom'

const MenuNavbar = () => {

    function show(){
        document.querySelector('.hamburger').classList.toggle('open')
        document.querySelector('.navigation').classList.toggle('active')
    }

  return (
    <>
    <button className="hamburger" onClick={show}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
    </button>

    <div className="navigation">
        <nav className='nav-burger'>
            <ul >
                <li><Link to={"/"} onClick={show } >Home</Link></li>
                <li><Link to={"/classes"} className='nav-item' onClick={show } >Classes</Link></li>
                <li><Link to={"/schedule/monday"} className='nav-item' onClick={show } >Schedule</Link></li>
                <li><Link to={"/about"} className='nav-item' onClick={show } >About</Link></li>
                <li><Link to={"/contact"} className='nav-item' onClick={show } >Contact</Link></li>

            </ul>
        </nav>
    </div>
    
    </>

  )
}

export default MenuNavbar