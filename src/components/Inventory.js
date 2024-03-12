import React from 'react';
import "../styles/Inventory.css";
import InventoryCard from './InventoryCard';

const bikes = [
  {
    model: 'Ninja ZX-6R',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2022,
    engine: 636, // assuming 'cc' as unit
    mileage: 15, // assuming 'km/l' as unit
    price: 99 // assuming 'per day' as unit
  },
  {
    model: 'CBR500R',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2021,
    engine: 471, // assuming 'cc' as unit
    mileage: 18, // assuming 'km/l' as unit
    price: 79 // assuming 'per day' as unit
  },
  {
    model: 'MT-09',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2020,
    engine: 847, // assuming 'cc' as unit
    mileage: 14, // assuming 'km/l' as unit
    price: 89 // assuming 'per day' as unit
  },
  {
    model: 'MT-09',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2020,
    engine: 847, // assuming 'cc' as unit
    mileage: 14, // assuming 'km/l' as unit
    price: 89 // assuming 'per day' as unit
  },
  {
    model: 'MT-09',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2020,
    engine: 847, // assuming 'cc' as unit
    mileage: 14, // assuming 'km/l' as unit
    price: 89 // assuming 'per day' as unit
  },
  {
    model: 'MT-09',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2020,
    engine: 847, // assuming 'cc' as unit
    mileage: 14, // assuming 'km/l' as unit
    price: 89 // assuming 'per day' as unit
  },
  {
    model: 'MT-09',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2020,
    engine: 847, // assuming 'cc' as unit
    mileage: 14, // assuming 'km/l' as unit
    price: 89 // assuming 'per day' as unit
  },
  {
    model: 'MT-09',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2020,
    engine: 847, // assuming 'cc' as unit
    mileage: 14, // assuming 'km/l' as unit
    price: 89 // assuming 'per day' as unit
  },
  {
    model: 'GSX-S750',
    gear: 'Manual',
    img:"https://purepng.com/public/uploads/large/purepng.com-motorcyclemotorcyclemotorbikebikecycleracing-bike-1701527509998savsa.png",
    year: 2019,
    engine: 749, // assuming 'cc' as unit
    mileage: 17, // assuming 'km/l' as unit
    price: 85 // assuming 'per day' as unit
  }
];

function Inventory() {
  return (
    <div className='inventory section-content'>
      <h1>
        Latest <span className='highlight'>Inventory</span>
      </h1>
      <p className='subheader'>Explore Our Vast Inventory Of Reliable Bikes For Different Needs And Find Your Perfect Set Of Wheels.</p>
      <div className='inventory-container'>
        {bikes.map((bike, index) => (
          <InventoryCard key={index} bike={bike} />
        ))}
      </div>
    </div>
  );
}

export default Inventory;
