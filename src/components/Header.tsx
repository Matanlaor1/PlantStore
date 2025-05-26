import { NavLink } from "react-router";
import CartModal from "./Cart/CartModal";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src="public\images\plantStoreLogo.png"></img>
        </div>
        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/Catalog" className="navbar-link">
            Catalog
          </NavLink>
        </div>
        <div className="navbar-cart">
          <CartModal />
        </div>
      </div>
    </>
  );
}
