import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css'; 

export default function HeroSection() {
    const navigate = useNavigate();

    const handleShopClick = () => {
        navigate('/orders/new');
    };

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Discover the Best Products</h1>
        <p>Your favorite items delivered to your doorstep</p>
        <button onClick={handleShopClick}>Shop Now</button>
      </div>
      <div className="hero-image">
      <img src={process.env.PUBLIC_URL + '/images/restaurant1.png'} alt="Restaurant" />
      </div>
    </section>
  );
}


