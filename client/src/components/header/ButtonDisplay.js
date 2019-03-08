import React from 'react'
import './header.css'

export default function ButtonDisplay (props){

    return (
      <div className='buttonDisplayContainer'>
        <div className='moodButton'>{props.stats}</div>
        <p>{props.topic}</p>
      </div>
    )
  }
