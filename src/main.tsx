import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PlantsProvider } from "./context/PlantsContext.jsx";
import { CartProvider } from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <PlantsProvider>
        <App />
      </PlantsProvider>
    </CartProvider>
  </StrictMode>
);
