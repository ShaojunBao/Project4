import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as itemsAPI from '../../utilities/items-api';
import * as orderAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function NewOrderPage( {user} ) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
    }
    getItems();
  }, []);

  const handleAddItemToOrder = (item) => {
    setOrderItems(prevOrderItems => {
      const itemIndex = prevOrderItems.findIndex(orderItems => orderItems._id === item._id);
      if(itemIndex > -1) {
        const newOrderItems = [...prevOrderItems];
        newOrderItems[itemIndex].quantity += 1;
        return newOrderItems;
      }
      return [...prevOrderItems, {...item, quantity: 1}];
    });
  };

  const handleItemQuantityChange = useCallback((idx, delta) => {
    setOrderItems((prevOrderItems) => {
      const newOrderItems = [...prevOrderItems];
      newOrderItems[idx].quantity += delta;      
      if (newOrderItems[idx].quantity <= 0) {
        newOrderItems.splice(idx, 1);
      }
  
      return newOrderItems;
    });
  }, []);

  const handleItemRemove = (idx) => {
    setOrderItems(prevOrderItems => {
      const newOrderItems = [...prevOrderItems];
      newOrderItems.splice(idx, 1);
      return newOrderItems;
    });
  };

  const handleCreateOrder = async () => {
    if (!user) {
      alert('You need to login or register to place an order');
      navigate('/auth');
      return;
    }
    if(orderItems.length === 0){
      alert('Your cart is empty. Please add items to your cart before placing an order.');
      return;
    }
    
    try {
      const items = orderItems.map(item => ({
        item: item._id,  
        quantity: item.quantity
      }));
      
      const totalAmount = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0); 
      
      const newOrder = {
        customerName,
        customerEmail,
        items,
        totalAmount
      };

      const testOrder = await orderAPI.create(newOrder); 
      console.log(testOrder);
      setFeedbackMsg('Order created successfully!');
      setOrderItems([]);
      setCustomerName('');
      setCustomerEmail('');
      
      // Redirect to OrderHistoryPage
      navigate('/orders');
    } catch (error) {
      console.error('Failed to create order', error);
      setFeedbackMsg('Failed to create order');
    }
  };

  return (
    <main className="NewOrderPage">
      <aside className="sidebar">
        <div className="sidebar-top">
          <Logo />
          <CategoryList categories={categoriesRef.current} activeCat={activeCat} setActiveCat={setActiveCat} showImages={false} />
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
          <OrderDetail 
            orderItems={orderItems} 
            onItemQuantityChange={handleItemQuantityChange}
            onItemRemove={handleItemRemove}
          />
        </div>
        <div className="customer-details">
          <input 
            type="text" 
            placeholder="Customer Name" 
            value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Customer Email" 
            value={customerEmail} 
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>
        <button onClick={handleCreateOrder}>Create Order</button>
        {feedbackMsg && <div className="feedback">{feedbackMsg}</div>}
      </div>
    </main>
  );
}