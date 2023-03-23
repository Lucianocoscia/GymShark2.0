import React from 'react'
import nutrition  from './images/nutrition.png'
import workout  from './images/workout.png'
import progression from './images/progressiom.png'
import './CardInfo.css'

const CardInfo = () => {
  return (
    <>
        <div className='grid-cards-info'>
            <div className='card-info card-info-1'>
              <img className='img-card' src={progression} alt="" />
              <h2 className='text-card'>About Us</h2>
              <p className='text-card'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, expedita.</p>

            </div>
            <div className='card-info card-info-2'>                
                <img className='img-card'  src={workout} alt="" />
                <h2 className='text-card'>Classes</h2>
                <p className='text-card'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, expedita.</p>
            </div>
            <div className='card-info card-info-3'>                
              <img className='img-card'  src={nutrition} alt="" />
              <h2 className='text-card'>Nutrition</h2>
              <p className='text-card'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, expedita.</p>
            </div>
        </div>
    </>
  )
}

export default CardInfo