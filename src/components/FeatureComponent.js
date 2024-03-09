import React from 'react';
import '../styles/FeatureComponent.css';

function FeatureComponent({ Icon, title, description }) {
  return (
    <div className='feature-container'>
      <div className='feature'>
        <Icon className='logo' size={'4rem'} fill="white" />
      </div>
      <div className="feature">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureComponent;
