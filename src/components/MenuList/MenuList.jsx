import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';
import './MenuList.css';

export default function MenuList({ menuItems, onAddItemToOrder }) {
  return (
    <div>
      {menuItems.map((menuItem, idx) => (
        <MenuListItem 
          key={idx} 
          menuItem={menuItem} 
          onAddItemToOrder={() => onAddItemToOrder(menuItem)}
        />
      ))}
    </div>
  );
}