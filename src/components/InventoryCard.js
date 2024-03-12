import React from 'react';
import { FaCalendarAlt, FaCog, FaGasPump, FaWrench } from 'react-icons/fa';
import '../styles/InventoryCard.css';

const InventoryCard = ({ bike }) => {
  return (
    <div className="inventory-card">
      <div className="card-image-container">
        <img src={bike.img} alt={`Image of ${bike.model}`} />
      </div>
      <div className="card-details">
        <h3>{bike.model}</h3>
        <div className="card-specs">
          <span><FaCalendarAlt /> {bike.year}</span>
          <span><FaCog /> {bike.engine}cc</span>
          <span><FaGasPump /> {bike.mileage} km/l</span>
          <span><FaWrench /> {bike.gear}</span>
        </div>
        <div className="card-price">
          <span>Rental Price: ${bike.price} / Day</span>
      </div>
        </div>
      <div className="card-action">
        <button type="button">Rent Bike</button>
      </div>
    </div>
  );
};

export default InventoryCard;
