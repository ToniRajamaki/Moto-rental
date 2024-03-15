import React from 'react'
import '../styles/CallToActionCard.css'

function CallToActionCard() {
  return (
    <div className='call-to-action'>
      <div className='call-to-action-container'>
        <div className='card-info'>
          <h2>Ready to get started?</h2>
          <p>We Stand As Your Trusted Partner. our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart.</p>
          <button className='contact-btn'>Contact Us</button>
        </div>

      <img className="car-img" src="https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/call-to-action-image.png?raw=true" alt="asd" />
      <img className="car-img2" src="https://static.vecteezy.com/system/resources/thumbnails/025/364/754/small/white-sun-rays-with-beams-and-glare-isolated-on-transparent-background-lens-flare-light-effect-png.png" alt="asd" />
      </div>
    </div>
  )
}

export default CallToActionCard
