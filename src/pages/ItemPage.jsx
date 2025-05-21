import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PlantsContext } from "../context/plantsContext";

export default function ItemPage() {
  const { id } = useParams();
  const { plants, loading } = useContext(PlantsContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!loading && plants) {
      console.log(plants);
      for (const category of plants.store.categories) {
        const plant = category.products.find(
          (product) => product.id.toString() === id
        );
        if (plant) {
          setItem(plant);
          break;
        }
      }
    }
  }, [loading, plants, id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (!item) {
    return <div className="error">Item not found</div>;
  }

  return (
    <div className="item-page">
      <h4>{item.name}</h4>
      {item.image && (
        <img src={item.image} alt={item.name} className="item-image" />
      )}
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Availability: {item.availability ? "In Stock" : "Out of Stock"}</p>
      <p>Rating: {item.rating} / 5</p>
      <p>Stock: {item.stock}</p>
    </div>
  );
}
