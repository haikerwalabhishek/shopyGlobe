import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import { addToCart } from "../redux/actions/cartActions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="productItem-container">
      {/* Product Image */}
      <img src={product.thumbnail} alt={product.title} />
      
      {/* Product Title */}
      <h3 className="productItem-title">{product.title}</h3>
      
      {/* Product Price */}
      <p className="productItem-price">${product.price}</p>

      {/* Add to Cart Button */}
      <button 
        onClick={() => dispatch(addToCart(product))} 
        className="productItem-addToCartButton"
      >
        Add to Cart
      </button>

      {/* View Details Link */}
      <Link to={`/product/${product.id}`} className="productItem-viewDetailsLink">
        View Details
      </Link>
    </div>
  );
};

export default ProductItem;
