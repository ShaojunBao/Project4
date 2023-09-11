import React, { useEffect, useState } from 'react';
import { getAll } from '../../utilities/orders-api'

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getAll();
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <div key={order._id}>
          <h2>{order.customerName}</h2>
          {order.items.map((item, index) => (
            <div key={index}>
              <p>Item: {item.item.name}</p>
              <p>Price: {item.item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <p>Total Amount: {order.totalAmount}</p>
        </div>
      ))}
    </div>
  );
}