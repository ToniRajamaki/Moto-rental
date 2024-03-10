import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaCalendarDay } from "react-icons/fa";
import '../styles/Search.css' // Make sure to create this CSS file

function BookingForm() {
  return (
    <div className='booking-form-container'>

      <div className="pair">

      <div className='input-field'>
        <div>
          <FaMapMarkerAlt className='icon' />
          <label htmlFor='pickupLocation' className='input-label'>
            Pick up location
          </label>
          </div>
          <input
            id='pickupLocation'
            type='text'
            placeholder='Tampere, 33720 Finland'
            />
      </div>
      <div className='input-field'>
        <div>
          <FaMapMarkerAlt className='icon' />
          <label htmlFor='returnLocation' className='input-label'>
            Return location
          </label>
        </div>
        <input id='returnLocation' type='text' placeholder='Helsinki, 01100 Finland' />
      </div>
            </div>


<div className="pair">

      <div className='input-field'>
      <div>
          <FaCalendarDay className='icon' />
          <label htmlFor='pickupDate' className='input-label'>
            Pick up Date
          </label>
        </div>
        <input id='pickupDate' type='date' />
      </div>
      <div className='input-field'>
      <div>
          <FaCalendarDay className='icon' />
          <label htmlFor='returnDate' className='input-label'>
            Return Date
          </label>
        </div>
        <input id='returnDate' type='date' />
      </div>
</div>
      <button className='btn button-primary search-btn'>Search Vehicle</button>
    </div>
  )
}

export default BookingForm
