import { useEffect, useState, createContext } from "react";

export const PlantsContext = createContext();
export const PlantsProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch("plantsData.json");
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return (
    <PlantsContext.Provider value={{ plants, loading }}>
      {children}
    </PlantsContext.Provider>
  );
};
