import React from 'react'
import Pricing1 from './images/Pricing1.jpg'
import Pricing2 from './images/Pricing2.jpg'
import Pricing3 from './images/fitness1.jpg'
import backtitle from '../TopClasses/images/background-titles.svg'

import './Pricing.css'
const Pricing = () => {

    const pricing = [
        {
            img: Pricing1, title: 'Beginners', price: 39
        },
        {
            img: Pricing2, title: 'Intermediate', price: 80
        },
        {
            img: Pricing3, title: 'Advanced', price: 100
        },
    ]
  return (
    <>
        <div>
            <div  className='container-title-classes'>
                <img className='absolute' src={backtitle} alt="" />
                <h3 className='relative'>PRICING CHART</h3>
            </div>
            <h1 className='center title-principal-pricing'>Exclusive Pricing Plan</h1>
            <p className='p-pricing'>GymShark an unknown printer took a galley of type and scrambled make a type specimen book.</p>
            <div className='grid-pricing'>
                {
                    pricing.map((item, index) => {
                        return (
                                <div className='card-pricing' key={index}>

                                        <img className='img-pricing' src={item.img} alt="pricingImage" />
                                        <h2 className='title-pricing'>{item.title}</h2>
          
                                    <div className='pricing'><p>$</p> <h2>{item.price}</h2> <p>p/m</p></div>
                                    <div className="container-benefits">
                                        <p>Free Hand</p>
                                        <p>Gym Fitness</p>
                                        <p>Weight Loss</p>
                                        <p>Personal Trainer</p>
                                        <p>Cycling</p>
                                    </div>
                                    <button className='button-choose'>Purchase Now</button>
                                </div>
                        )
                    })
                }
                

            </div>
        </div>
    </>
  )
}

export default Pricing