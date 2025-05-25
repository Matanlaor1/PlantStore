import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (plant) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === plant.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...plant, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (plantId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== plantId)
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
