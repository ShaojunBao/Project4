import './MenuListItem.css';

export default function MenuListItem({ menuItem, onAddItemToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="image-container flex-ctr-ctr">
        <img src={menuItem.imagePath} alt={menuItem.name} />
      </div>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => onAddItemToOrder(menuItem)}>
          ADD
        </button>
      </div>
    </div>
  );
}