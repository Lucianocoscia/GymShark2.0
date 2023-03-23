import React from 'react'
import trainer from './images/trainer.png';
import maquina from './images/maquina.png';
import pesas from './images/pesas.png';
import running from './images/running.png';
import running1 from './images/runnnig1.png';
import backgroundTitles from './images/background-titles.svg';
import backRed from './images/girl-redbg.svg'
import './NextLevel.css';
const NextLevel = () => {
  return (
    <>
    <div className='grid-about'>
        <div>
            <div className='container-title'>
                <img className='background-title-about' src={backgroundTitles} alt="" />
                <h4 className='title-about'>who we are</h4>
            </div>
            <h2 className='subtitle-about'>Take Your Health And Body To Next Level</h2>
            <p className='p-about'>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>

            <div className='grid-attributes'>
                <div className='card-attributes'>
                    <img className='icono-attribute' src={trainer}/>
                    <h3>PROFESSIONAL <br /> TRAINERS</h3>
                </div>
                <div className='card-attributes'>
                    <img className='icono-attribute' src={pesas}/>
                    <h3>MODERN <br /> EQUIPMENTS</h3>
                </div>
                <div className='card-attributes'>
                    <img className='icono-attribute' src={maquina}/>
                    <h3>FANCY GYM <br />MACHINES</h3>
                </div>
            </div>
            <button className='button-tour'>Take a tour </button>
        </div>

        <div className='flex'>
            <img className='running' src={running} alt="" />
            <img className='girl' src={running1} alt="" />
            <img className='girl-red-bg' src={backRed} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default NextLevel