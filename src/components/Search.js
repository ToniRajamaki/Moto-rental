import React from 'react';
import { FaMapMarkerAlt, FaCalendarDay } from 'react-icons/fa';
import '../styles/Search.css'; // Make sure to create this CSS file

function BookingForm() {
  // Define the cities array for dropdown options
  const cities = ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti', 'Kuopio', 'Pori'];

  // Calculate tomorrow's date
  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0]; // Format to YYYY-MM-DD
  };

  return (
    <div className='booking-form-container' data-aos-delay="1000" data-aos="fade-up">
      <div className='input-field'>
        <div>
          <FaMapMarkerAlt className='icon' />
          <label htmlFor='pickupLocation' className='input-label'>Pick up location</label>
        </div>
        <select id='pickupLocation'>
          {cities.map(city => (
            <option key={city} value={city}>{city}, Finland</option>
          ))}
        </select>
      </div>

      <div className='input-field'>
        <div>
          <FaMapMarkerAlt className='icon' />
          <label htmlFor='returnLocation' className='input-label'>Return location</label>
        </div>
        <select id='returnLocation'>
          <option value="Same place as pickup">Same place as pickup</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}, Finland</option>
          ))}
        </select>
      </div>

      <div className='input-field'>
        <div>
          <FaCalendarDay className='icon' />
          <label htmlFor='pickupDate' className='input-label'>Pick up Date</label>
        </div>
        <input id='pickupDate' type='date' value={getTomorrowDate()} />
      </div>

      <div className='input-field'>
        <div>
          <FaCalendarDay className='icon' />
          <label htmlFor='returnDate' className='input-label'>Return Date</label>
        </div>
        <input id='returnDate' type='date' />
      </div>

      <button className='btn button-primary search-btn'>Search Vehicle</button>
    </div>
  );
}

export default BookingForm;
