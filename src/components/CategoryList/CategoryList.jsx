import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat, showImages }) {
  const cats = categories.map((cat) =>
    <li
      key={cat} 
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
      {showImages && <img src={`/images/${cat}.png`} alt={cat} className="category-image" />}
      {cat}
    </li>
  );
  return (
    <ul className="CategoryList">
      {cats}
    </ul>
  );
}
