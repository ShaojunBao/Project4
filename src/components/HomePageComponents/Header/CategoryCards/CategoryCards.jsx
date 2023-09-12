import './CategoryCards.css';

export default function CategoryCard({category}) {
  return (
    <div className="category-card">
      <h3>{category}</h3>
    </div>
  );
}