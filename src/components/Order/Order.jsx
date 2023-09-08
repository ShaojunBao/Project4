import React, { useState, useEffect } from 'react';
import MenuListItem from './MenuListItem';
import { getAll as getAllMenuItems } from '../../utilities/orders-api'; 
import './Order.css';

export default function OrderComponent() {
  const [orderItems, setOrderItems] = useState([]); 
  const [menuItems, setMenuItems] = useState([]); 

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const items = await getAllMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error('Failed to fetch menu items', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleAddItemToOrder = (item) => {
    setOrderItems(prevOrderItems => [...prevOrderItems, item]);
  };

  const totalAmount = orderItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className='OrderComponent'>
      <div>
        {menuItems.map((menuItem, idx) => (
          <MenuListItem 
            key={idx} 
            menuItem={menuItem} 
            onAddItemToOrder={() => handleAddItemToOrder(menuItem)}
          />
        ))}
      </div>

      <div>
        <h2>Order Details</h2>
        <ul>
          {orderItems.map((item, idx) => (
            <li key={idx}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className='total'>Total: ${totalAmount}</div>
      </div>
    </div>
  );
}