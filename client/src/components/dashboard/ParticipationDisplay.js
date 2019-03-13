import React from 'react'
import './dashboard.css'

export default function ParticipationDisplay(props) {

  return (
    <div>
      <p><span className='percentageDisplay'>{props.percentage}%</span> of students interacted</p>
    </div>
  )
}
