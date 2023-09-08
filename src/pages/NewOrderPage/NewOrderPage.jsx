import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
    }
    getItems();
  }, []);

  const handleAddItemToOrder = (item) => {
    setOrderItems(prevOrderItems => [...prevOrderItems, item]);
  };

  return (
    <main className="NewOrderPage">
      <aside className="sidebar">
        <div className="sidebar-top">
          <Logo />
          <CategoryList categories={categoriesRef.current} activeCat={activeCat} setActiveCat={setActiveCat} />
          <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        </div>
      </aside>
      <div className="content">
        <div className="menu-list">
        <MenuList 
            menuItems={menuItems.filter(item => item.category.name === activeCat)} 
            onAddItemToOrder={handleAddItemToOrder} 
        />
        </div>
        <div className="order-detail">
          <OrderDetail orderItems={orderItems} />
        </div>
      </div>
    </main>
  );
}