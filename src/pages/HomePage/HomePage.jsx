import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HomePageComponents/Header/HeroSection/HeroSection';
import CategoryList from '../../components/CategoryList/CategoryList';

export default function HomePage({user, setUser}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      // Fetch categories from your API
      fetch('API_ENDPOINT/categories')
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []);


    return (
        <div>
          <HeroSection /> 
          <section className="categories-section">
            <h2>Shop by Categories</h2>
            <CategoryList categories={categories} />
          </section>
        </div>
      );
    }

