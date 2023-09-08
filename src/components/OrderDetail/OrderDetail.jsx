import './OrderDetail.css';

export default function OrderDetail({ orderItems = [] }) {
  const totalAmount = orderItems.reduce((acc, item) => acc + item.price, 0);

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
                <li key={idx} className="item">
                  <div className="emoji">{item.emoji}</div>
                  <div className="item-detail">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="total-section">
            <h3>Total:</h3>
            <span>${totalAmount.toFixed(2)}</span>
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