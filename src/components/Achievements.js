import React from 'react'
import '../styles/Achievements.css'

function Achievements() {
  return (
    <div className='achievement'>
      <h1>
        Our <span className='highlight'>Achievement</span>
      </h1>
      <p>
        Our Journey Of Success Is A Testament To The Collective Efforts And
        Determination Of Our Team
      </p>

      <div className='figures-container'>
        <div className='figure'>
          <h1>8000+</h1>
          <p>Active Member</p>
        </div>
        <div className='figure'>
          <h1>2500+</h1>
          <p>Car Model</p>
        </div>
        <div className='figure'>
          <h1>10K+</h1>
          <p>Positive Rating</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements
