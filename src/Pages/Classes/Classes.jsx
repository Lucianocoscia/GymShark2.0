import React from 'react'
import BackgroundPages from '../../Components/BackgroundPages/BackgroundPages'
import { useEffect } from 'react'

import classesImg from '../../Components/Pricing/images/soguita1.jpg'
import musculacion from './images/fitness1.jpg' 
import funcional from './images/funcional00.jpg' 
import boxing from './images/box.jpg' 
import jujitsu from './images/jujitsu.jpg'  
import calistenia from './images/calistenia2.jpg' 
import gap from './images/funcional01.jpg' 
import spinning from './images/spinning.jpg' 
import yoga from './images/yoga.jpg' 
import zumba from './images/zumba.jpg' 
import './Classes.css'
 
const Classes = () => {
  const infoClasses = [
    {
      activity: 'Musculacion',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: musculacion ,
    },
    {
      activity: 'Funcional',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: funcional ,
    },
    {
      activity: 'Boxing',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: boxing ,
    },
    {
      activity: 'JuJitSu',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: jujitsu ,
    },
    {
      activity: 'Calistenia',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: calistenia ,
    },
    {
      activity: 'G.A.P',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: gap,
    },
    {
      activity: 'Spinning',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: spinning ,
    },
    {
      activity: 'Yoga',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: yoga,
    },
    {
      activity: 'Zumba',
      coach: 'John Flex',
      schedule: ' Wed: 9:00 am',
      image: zumba
    },
  ]
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <BackgroundPages img={classesImg} title={'Classes'}/>
      <div className='background'>
        <div className='grid-classes-cards'>
          {
            infoClasses.map((classObj, index) => {
              const image = `url(${classObj.image})`
              return(
                <>
                
                  <div style={{backgroundImage: image}} className='card-classes' key={index}>
                    <div className='container-activity'>
                      <h2>{classObj.activity}</h2>
                      <span className='underline-activity'></span>
                    </div>
                    <div className='flex-classes'>
                        <div className='flex-classes-cardsinfo'>
                          <i className='fa-regular fa-user'></i>
                          <p>{classObj.coach}</p>
                        </div>
                        <div className='flex-classes-cardsinfo'>
                          <i className='fa-regular fa-clock'></i>
                          <p>{classObj.schedule}</p>
                        </div>
                    </div>
                    <button className='button-join-classes'> Join Now</button>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      
    </>
  )
}

export default Classes