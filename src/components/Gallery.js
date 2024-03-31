import React from 'react';
import '../styles/Gallery.css'


const persons = [
  { name: 'Luke Miller', title: 'Salesman', image: "https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p1.png?raw=true" },
  { name: 'Michael Diaz', title: 'Business Owner', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p2.png?raw=true' },
  { name: 'Michael Diaz', title: 'Business Owner', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p3.png?raw=true' },
  { name: 'Michael Diaz', title: 'Business Owner', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p4.png?raw=true' },
  { name: 'Michael Diaz', title: 'Business Owner', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p5.png?raw=true' },
  { name: 'Michael Diaz', title: 'Business Owner', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p6.png?raw=true' },
  // Add other person objects here
];

const Gallery = () => {
  return (
    <div className="grid-container">
      {persons.map((person, index) => (
        <div className="grid-item" key={index}>
          <img src={person.image} alt={person.name} />
          <div className="info">
            <h3>{person.name}</h3>
            <p>{person.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
