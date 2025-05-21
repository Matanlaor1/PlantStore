import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PlantsProvider } from "./context/PlantsContext.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlantsProvider>
      <App />
    </PlantsProvider>
  </StrictMode>
);
