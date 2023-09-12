import './Featured.css';
import React from 'react';

export default function FeaturedItemComponent({ featuredItems }) {
  return (
    <div className="featured-items">
      {featuredItems.map((item, index) => (
        <div key={index} className="featured-item">
          <img src={item.imagePath} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
