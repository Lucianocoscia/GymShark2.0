import React from 'react'
import './BackgroundPages.css'
const BackgroundPages = ({title, img}) => {
  const image = `url(${img})`
  return (
    <>
        <div style={{backgroundImage: image}} className='background-pages'>
             <h2>{title}</h2>
        </div>
    </>
  )
}

export default BackgroundPages