import React from 'react'
import Hero from '../../Components/Hero/Hero'
import CardInfo from '../../Components/CardInfo/CardInfo'
import './Home.css'
import NextLevel from '../../Components/SectionLevel/NextLevel'
import TopClasses from '../../Components/TopClasses/TopClasses'
import Banner from '../../Components/Banner/Banner'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import BannerTrainer from '../../Components/BannerTrainer/BannerTrainer'

import { useEffect } from 'react'
import Pricing from '../../Components/Pricing/Pricing'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <Hero/>
      <div className='background'>
        <CardInfo/>
        <NextLevel/>
      </div>
      <div>
        <TopClasses/>
      </div>
      <div className='background2'>
        <Banner/>
        <WhyChooseUs/>
      </div>
{/*     <div className='background3'>
      <Trainers/>
      <BannerScroll/>
    </div> */}
    <div >
      <Pricing/>
    </div>
    <BannerTrainer/>

    </>
  )
}

export default Home