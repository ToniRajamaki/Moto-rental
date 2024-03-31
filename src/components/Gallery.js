import React from 'react';
import '../styles/Gallery.css'


const persons = [
  { name: 'Luke Miller', title: 'Salesman', image: "../../public/images/people/p1.png" },
  { name: 'Michael Diaz', title: 'Business Owner', image: 'link-to-michael-image.jpg' },
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
