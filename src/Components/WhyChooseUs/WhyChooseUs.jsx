import React from 'react'
import backtitle from './background-titles.svg'
import image from './pesasrusa.png'
import bag from './bag.png'
import bottle from './bottle.png'
import machine from './machine.png'
import muscle from './muscle.png'


import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <>
    <div className="grid-why-choose-us">
        <div className='img-choose-container' >
            <img className='img-choose' src={image} alt="" />
            
        </div>
        <div>
            <div className='container-title'>
                <img className='absolute-choose' src={backtitle}  alt="" />
                <h3 className='relative-choose'>Why choose us</h3>
            </div>
            <h2 className='title-choose'>We Can Give A Shape Of <br /> Your Body Here!</h2>
            <p>At GymShark, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
            <div className='grid-icons'>
                <div className='flex-icon-choose'>
                    <img className='icono-choose' src={muscle} alt="" />
                    <h3>Free Fitness <br /> Training</h3>
                </div>
                <div className='flex-icon-choose'>
                    <img className='icono-choose' src={machine} alt="" />
                    <h3>Modern Gym <br /> Equipments</h3>
                </div>
                <div className='flex-icon-choose'>
                    <img className='icono-choose' src={bag} alt="" />
                    <h3>Gym Bag <br /> Equipments</h3>
                </div>
                <div className='flex-icon-choose'>
                    <img className='icono-choose' src={bottle} alt="" />
                    <h3>Fresh Bottle <br /> Watter</h3>
                </div>

            </div>
            <div className='container-button-tour'>
                <button className='button-tour'>Our classes</button>

            </div>
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs