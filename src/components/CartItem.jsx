import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions/cartActions.js";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    } else {
      e.target.value = item.quantity; // Reset to valid value
    }
  };

  return (
    <div className="cartItem-container">
      <img src={item.thumbnail} alt={item.title} className="cartItem-image" />
      <div className="cartItem-details">
        <h4 className="cartItem-title">{item.title}</h4>
        <p className="cartItem-price">Price: ${item.price.toFixed(2)}</p>
        <p className="cartItem-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <div className="cartItem-quantityContainer">
          <label htmlFor={`quantity-${item.id}`}>Qty:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            min="1"
            onChange={handleQuantityChange}
            className="cartItem-quantityInput"
          />
        </div>
        <button onClick={handleRemove} className="cartItem-removeButton">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
