import React from 'react'
import BackgroundPages from '../../Components/BackgroundPages/BackgroundPages'
import img from '../../Components/Pricing/images/salon2.jpg'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './Schedule.css'
import { useEffect } from 'react'

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <BackgroundPages img={img} title={'Schedule By Day'}/>
      <div className="grid-schedule">
        <Link
          to="/schedule/monday"
          className="link-schedule "
          onClick={  window.scrollTo(0,0)}
        >
          Monday
        </Link>

        <Link
          to="/schedule/tuesday"
          className="link-schedule "
          onClick={  window.scrollTo(0,0)}
        >
          Tuesday
        </Link>

        <Link
          to="/schedule/wednesday"
          className="link-schedule "
          onClick={  window.scrollTo(0,0)}
        >
          Wednesday
        </Link>

        <Link
          to="/schedule/thursday"
          className="link-schedule "
          onClick={  window.scrollTo(0,0)}
        >
          Thursday
        </Link>

        <Link
          to="/schedule/friday"
          className="link-schedule "
          onClick={ ()=>  window.scrollTo(0,0)}
        >
          Friday
        </Link>

        <Link
          to="/schedule/saturday"
          className="link-schedule "
          onClick={  window.scrollTo(0,0)}
        >
          Saturday
        </Link>

      </div>
    <div className='container-childs'>
      
      <Outlet />
    </div>

    </>
  )
}

export default Schedule