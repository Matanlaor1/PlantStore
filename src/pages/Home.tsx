import React, { use } from "react";
import { PlantsContext } from "../context/PlantsContext";
import { useContext } from "react";
import ItemView from "../components/ItemView";

const Home: React.FC = () => {
  const { plants, loading } = useContext(PlantsContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <section>
        <h2>Featured Plants</h2>
        <div className="item-list">
          <div className="product-grid">
            {plants.store.categories[0].products.map((plant) => (
              <div key={plant.id} className="item-view">
                <ItemView item={plant} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
