import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function CartModal() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRemove = (itemId: number) => {
    removeFromCart(itemId);
  };

  const handleClear = () => {
    clearCart();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={toggleDropdown}>Cart {cartItems.length}</button>
      {isOpen && (
        <div className="cart-modal">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={handleClear}>Clear Cart</button>
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
