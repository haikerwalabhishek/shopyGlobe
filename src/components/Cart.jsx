import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button className="cart-checkout">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
