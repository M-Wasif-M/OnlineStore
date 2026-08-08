import type { Category } from "../types";

export type CategoryFilter = "All" | Category;

interface CategoryTabsProps {
  activeCategory: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}

const categories: CategoryFilter[] = [
  "All",
  "Women",
  "Men",
  "Jewelry",
  "Accessories",
  "Beauty"
];

export default function CategoryTabs({
  activeCategory,
  onChange
}: CategoryTabsProps) {
  return (
    <div className="category-scroll" aria-label="Product categories">
      {categories.map((category) => (
        <button
          className={`category-pill ${
            activeCategory === category ? "active" : ""
          }`}
          type="button"
          key={category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
