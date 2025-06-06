import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

type ItemViewProps = {
  item: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string | null;
    availability: boolean;
    rating: number;
    stock: number;
  };
};

export default function ItemView({ item }: ItemViewProps) {
  const Navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="item-view">
      <h4>{item.name}</h4>
      {item.image && (
        <img src={item.image} alt={item.name} className="item-image" />
      )}
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Availability: {item.availability ? "In Stock" : "Out of Stock"}</p>
      <p>Rating: {item.rating} / 5</p>
      <p>Stock: {item.stock}</p>
      <button
        className="add-to-cart-button"
        onClick={() => {
          addToCart(item);
        }}
      >
        add to cart
      </button>
      <button
        onClick={() => {
          Navigate(`/item/${item.id}`);
        }}
      >
        View Details
      </button>
    </div>
  );
}
