import './OrderDetail.css';

export default function OrderDetail({ orderItems = [], onItemQuantityChange, onItemRemove }) {
  const totalAmount = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        <h2>Order Details</h2>
      </div>
      {orderItems.length ? (
        <div>
          <div className="items-section">
            <ul>
              {orderItems.map((item, idx) => (
                <li key={item._id || idx} className="item">
                  <div className="image-container">
                    <img src={item.imagePath} alt={item.name} />
                  </div>
                  <div className="item-detail">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="item-controls">
                    <button onClick={(e) => { e.stopPropagation(); onItemQuantityChange(idx, -1); }}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={(e) => { e.stopPropagation(); onItemQuantityChange(idx, 1); }}>+</button>
                    <button onClick={(e) => { e.stopPropagation(); onItemRemove(idx); }}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="total-section">
            <h3>Total:</h3>
            <span>${totalAmount}</span>
          </div>
        </div>
      ) : (
        <div className="empty-order">
          Your cart is empty.
        </div>
      )}
    </div>
  );
}