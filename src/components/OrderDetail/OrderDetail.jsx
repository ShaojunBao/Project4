import './OrderDetail.css';

export default function OrderDetail({ orderItems }) {
  const totalAmount = orderItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        Order Detail
      </div>
      {orderItems.length ? (
        <div>
          <div>
            Items:
            <ul>
              {orderItems.map((item, idx) => (
                <li key={idx}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
          <div>Total Amount: ${totalAmount}</div>
        </div>
      ) : (
        <div>No items added yet.</div>
      )}
    </div>
  );
}