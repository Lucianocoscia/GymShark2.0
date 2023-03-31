import React from 'react'
import BackgroundPages from '../../Components/BackgroundPages/BackgroundPages'
import imgAbout from '../../Components/BackgroundPages/images/cinta.jpg'
import SectionOptions from './SectionOptions'
import Trainers from '../../Components/Trainers/Trainers'
import backgroundTitles from './images/background-titles.svg';
import NextLevel from '../../Components/SectionLevel/NextLevel'
import { useEffect } from 'react'

import './About.css'
const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <>
        <div className='background3'>
        <BackgroundPages img={imgAbout} title={'About'}/>
        <div className='container-level-about'>
          <NextLevel/>

        </div>
        <SectionOptions />
        <Trainers/>
        
       </div>
    </>
  )
}

export default About