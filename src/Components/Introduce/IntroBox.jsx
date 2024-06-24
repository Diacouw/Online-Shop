import React from 'react'
import './Introduce.css'

const IntroBox = ({title , logo , desc}) => {
  return (
    <div className='intro-box'>

        <div className="title-box">
          <h3>{title}</h3>
          <span>{logo}</span>
        </div>

        <div className="desc-box">
          <p>{desc}</p>
        </div>

    </div>
  )
}

export default IntroBox