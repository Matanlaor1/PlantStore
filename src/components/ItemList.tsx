import React from "react";
import { useContext } from "react";
import { PlantsContext } from "../context/PlantsContext";
import ItemView from "../components/ItemView";

const ItemList: React.FC = () => {
  const { plants, loading } = useContext(PlantsContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-list">
      {plants.store.categories.map((category) => (
        <div key={category.id} className="category-section">
          <h2 className="category-title">{category.name}</h2>
          <div className="product-grid">
            {category.products.map((plant) => (
              <div key={plant.id} className="item-view">
                <ItemView item={plant} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
