import React from 'react'
import '../styles/Achievements.css'

function Achievements() {
  return (
    <div className='achievement section-content'>
      <h1>
        Our <span className='highlight'>Achievement</span>
      </h1>
      <p className='subheader'>
        Our Journey Of Success Is A Testament To The Collective Efforts And
        Determination Of Our Team
      </p>

      <div className='figures-container'>
        <div className='figure'>
          <h1>8000+</h1>
          <p>Active Member</p>
        </div>
        <div className='figure'>
          <h1>100+</h1>
          <p>Bike Models</p>
        </div>
        <div className='figure'>
          <h1>20000+</h1>
          <p>Positive Rating</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements
