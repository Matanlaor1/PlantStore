import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Footer from "./components/Footer";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Catalog" element={<Catalog />} />
              <Route path="/contact" element={<h1>Contact</h1>} />
              <Route path="/item/:id" element={<ItemPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
