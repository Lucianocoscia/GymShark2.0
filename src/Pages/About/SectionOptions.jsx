import React from 'react'
import icono1 from './images/icono1.png'
import icono2 from './images/icono2.png'
import './About.css'

const SectionOptions = () => {
  return (
    <>
    <div className='grid'>
          <div className='grid-options'>

            <div className='about-centered'>
              <div className='contenedor-icono'><img className='icono' src={icono1} alt='icono1'/></div>
                <h1>Our History</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
            </div>
            <div className='image-about image-about-1'></div>
            <div className='image-about image-about-2'></div>

            <div className='about-centered'>
              <div ><img className='icono' src={icono2} alt='icono1'/></div>
              <h1>Our History</h1>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat.</p>
            </div>
      </div>
    </div>
        
    
    </>
  )
}

export default SectionOptions