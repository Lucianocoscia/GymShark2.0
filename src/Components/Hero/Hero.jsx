import React from 'react'
import backgroundText from './images/backgrouind-titles.svg'
import './Hero.css'
const Hero = () => {
  return (
    <>
        <div className='hero-background'>
            <div className='grid-hero'>
                <div className='container-text'>
                    <div className='flex'>
                        <img className='background-titles' src={backgroundText} alt="" />
                        <h3 className='title-position'>Find Your Energy</h3>
                    </div>

                    <h1 className='title-principal'>Make Your Body </h1>
                    <h1 className='title-principal-1'>Fit & Perfect </h1>
                    <div className='center'>
                        <button className='button-classes'>Our Classes</button>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero

/*                    <div>
                        <p className='p-brands'>share</p>
                        <hr className='hr-brands'></hr>
                        <div className='column-brand'>
                            <i className='fa-brands fa-youtube'></i>
                            <i className='fa-brands fa-twitter'></i>
                            <i className='fa-brands fa-facebook'></i>
                        </div>
                    </div> */