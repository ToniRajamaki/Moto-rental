import React from 'react'
import "../styles/Testimonials.css"
function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div className="testimonial-text">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."</p>
            <h3>John Doe</h3>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div className="testimonial-text">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."</p>
            <h3>Jane Doe</h3>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-image">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div className="testimonial-text">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo."</p>
            <h3>John Smith</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials