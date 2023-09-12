import React, { useEffect, useState } from 'react';
import { getAll as getAllCategories } from '../../utilities/categories-api';
import { getFeatured } from '../../utilities/items-api';  
import HeroSection from '../../components/HomePageComponents/Header/HeroSection/HeroSection';
import CategoryList from '../../components/CategoryList/CategoryList';
import FeaturedItemComponent from '../../components/HomePageComponents/Featured/Featured';
import Footer from '../../components/HomePageComponents/Footer/Footer';

export default function HomePage({ user, setUser }) {
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [featuredItems, setFeaturedItems] = useState([]);  

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData.map(cat => cat.name));
        const featuredItemsData = await getFeatured();  
        setFeaturedItems(featuredItemsData);  
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className=''>
      <HeroSection />
      <section className="categories-section">
        <h2>Shop by Categories</h2>
        <CategoryList categories={categories} activeCat={activeCat} setActiveCat={setActiveCat} showImages={true} />
      </section>
      <section className="featured-section">
        <h2>Featured Products</h2>
        <FeaturedItemComponent featuredItems={featuredItems} />  
      </section>
      <Footer />
    </div>
  );
};