import React, { useEffect, useState } from 'react';
import { getAll } from '../../utilities/orders-api';
import './OrderHistoryPage.css'; 

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAll();  
        setOrders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading orders: {error}</p>;
  }

  if (orders.length === 0) {
    return <p>No orders found</p>;
  }

  return (
    <div className="container my-5">
      <h1 className='text-center mb-4'>Order History</h1>
      {orders.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No orders found
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Total Amount</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>${order.totalAmount.toFixed(2)}</td>
                <td>
                  <ul className="list-unstyled mb-0">
                    {order.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.emoji} {item.name} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
