import React from 'react'
import BackgroundPages from '../../Components/BackgroundPages/BackgroundPages'
import imgContact from '../../Components/BackgroundPages/images/pesasgym.jpg'
import { useEffect } from 'react'

import './Contact.css'
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <BackgroundPages img={imgContact} title={'Contact'}/>
      <div className='grid-contact'  >
          <div className='grid-contact-1'>
            <h1 className='contact-title'>We are here for help you! To <br /> Shape Your Body.</h1>
            <p className='p-contact'>it deleniti consequuntur esse provident atque, veritatis beatae molestias corporis in perferendis dolorem et eligendi. Quos velit voluptate repellendus facilis accusamus exercitationem?</p>
            <div className='subgrid-contact'>
              <div className='subgrid-contact-area'>
                  <div className='container-title-underline'>
                    <h3>New York</h3>
                    <span className='underline'></span>
                  </div>
                  <div>
                    <p>85 Briston Mint Street,</p>
                    <p>London, E1 8LG, USA</p>
                  </div>
              </div>
              <div className='subgrid-contact-area'>
                <div className='container-title-underline'>
                  <h3>Opening Hours</h3>
                  <span className='underline'></span>
                </div>
                <div>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
              </div>
              <div className='subgrid-contact-area'>
                <div className='container-title-underline'>
                  <h3>Information</h3>
                  <span className='underline'></span>
                </div>
                <div>
                  <p>+800-123-4567</p>
                  <p> gymshark@gymail.com</p>
                </div>
              </div>
              <div className='subgrid-contact-area'>
                <div className='container-title-underline'>
                  <h3>Follow Us On</h3>
                  <span className='underline'></span>
                </div>
                <div className='container-brand-icons-contact'>
                  <i className='fa-brands fa-youtube'></i>
                  <i className='fa-brands fa-twitter'></i>
                  <i className='fa-brands fa-facebook'></i>
                  <i className='fa-brands fa-linkedin'></i>
                </div>
              </div>
            </div>
          </div>

          <div className='grid-contact-2'>
            <div>
              <div className='container-title-underline'>
                <h2 className='contact-title-2'>Leave Us Your Info</h2>
                <span className='underline-grid2'></span>
              </div>
              <form action="">
                <div>
                  <input type="text" />
                  
                </div>
                <div>
                  <input type="text" />
                </div>
                
                <select name="" id="">
                <option value="">CrossFit</option>
                  <option value="">Funcional</option>
                  <option value="">G.A.P</option>
                  <option value="">Musculacion</option>
                  <option value="">Pilates</option>
                  <option value="">Spinning</option>
                  <option value="">Yoga</option>
                  <option value="">Zumba</option>
                </select>
                <div>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className='center'>
                  <button className='button-choose ' type="submit">Submit Now</button>
                </div>
              </form>
            </div>

          </div>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.1293736874!2d-104.9951942199136!3d39.76451867227455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20Colorado%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1679863393233!5m2!1ses!2sar" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Contact