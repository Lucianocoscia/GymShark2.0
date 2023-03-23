import React from 'react'
import backtitle from '../TopClasses/images/background-titles.svg'
import Trainer1 from './trainer-man2.png'
import Trainer2 from './trainer-man.png'
import Trainer3 from './trainer-women.png'
import backgroundTrainer from './background-trainers.png'
import  './Trainers.css'
const Trainers = () => {
    const trainers = [
        { img: Trainer1, name: "John Lewis", job: "Yoga Trainer" },
        { img: Trainer2, name: "Jonathan Doe", job: "Crossfit Trainer" },
        { img: Trainer3, name: "Ana June", job: "Personal Trainer" },
      ];
  return (
    <>
        <div className='container-trainers'>
            <div  className='container-title-classes'>
                <img className='absolute' src={backtitle} alt="" />
                <h3 className='relative'>Gym Trainers</h3>
            </div>
            <h2 className='center'>Team Of Expert Coaches</h2>
            <p className='center'>Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!</p>
            <div className='grid-trainers'>
                        {
                            trainers.map((trainer) => {
                                return(
                                    <>
                                    <div className='card-trainer'>

                                        <div className='container-img-trainer'>
                                            <img className='img-trainer' src={trainer.img} alt="trainer" />
                   
                                            {/* <button className='fa-solid fa-angle-up button-arrow'></button> */}
                                            <div className='container-trainers-info'>
                             
                            
                                                <h3 className='trainer-name'>{trainer.name}</h3>
                                                <p className='trainer-job'>{trainer.job}</p>
                                                <div className='container-brands-icons'>
                                                    <i className='fa-brands fa-twitter brand-icon'></i>
                                                    <i className='fa-brands fa-facebook brand-icon'></i>
                                                    <i className='fa-brands fa-instagram brand-icon'></i>
                                                    <i className='fa-regular fa-envelope brand-icon'></i>
                                                </div>
                                                <span className='linea-card'></span>

                                            </div>

                                        </div>
                                        
                          
                                    </div>

                                    </>
 
                            )
                            }

                            )
                        }
                        
            </div>
        </div>
    </>
  )
}

export default Trainers  