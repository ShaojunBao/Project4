import React, { useEffect, useState } from 'react';
import {getAll as getAllCategories} from '../../utilities/categories-api'
import HeroSection from '../../components/HomePageComponents/Header/HeroSection/HeroSection';
import CategoryList from '../../components/CategoryList/CategoryList';

export default function HomePage({user, setUser}) {
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState('');

  useEffect(() => {
    getAllCategories()
      .then(data => setCategories(data.map(cat => cat.name))) 
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  return (
      <div>
        <HeroSection /> 
        <section className="categories-section">
          <h2>Shop by Categories</h2>
          <CategoryList categories={categories} activeCat={activeCat} setActiveCat={setActiveCat} showImages={true} />
        </section>
      </div>
  );
}

