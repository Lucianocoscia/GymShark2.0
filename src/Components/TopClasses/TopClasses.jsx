import React from 'react'
import './TopClasses.css'
import backtitle from './images/background-titles.svg'

const TopClasses = () => {
  return (
    <>  
        <div className='container-classes'>
            <div  className='container-title-classes'>
                <img className='absolute' src={backtitle} alt="" />
                <h3 className='relative'>Our Top Classes</h3>
            </div>
            <h2 className='title-classes'>We Are Offering Best Flexible Classes</h2>
            <div className='grid-classes'>
                <div className='grid-area grid-area-1'>
                    <h2>Funcional</h2>
                    <p>Wednesday: 9:00am - 10:00am</p>
                </div>
                <div className='grid-area grid-area-2'>
                    <h2>GAP</h2>
                    <p>Friday: 10:00am - 11:00am</p>
                </div>
                <div className='grid-area grid-area-3'>
                    <h2>Yoga</h2>
                    <p>Saturday: 9:00am - 10:00am</p>
                </div>
                <div className='grid-area grid-area-4'>
                    <h2>Calistenia</h2>
                    <p>Friday: 1:00pm - 2:00pm</p>
                </div>
                <div className='grid-area grid-area-5'>
                    <h2>JuJitSu</h2>
                    <p>Sunday: 6:00pm - 7:00pm</p>
                </div>
                <div className='grid-area grid-area-6'>
                    <h2>Crossfit</h2>
                    <p>Monday: 4:00pm - 5:00pm</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopClasses