import React from "react";
import { useContext } from "react";
import { PlantsContext } from "../context/plantsContext";
import ItemList from "../components/ItemList";

export default function Catalog() {
  const { plants, loading } = useContext(PlantsContext);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 style={{ color: "white" }}>Catalog</h1>
      <section>
        <ItemList></ItemList>
      </section>
    </>
  );
}
