import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null); // State to store product details
  const [error, setError] = useState(null); // State for handling errors
  const dispatch = useDispatch(); // Dispatch for Redux actions

  useEffect(() => {
    // Fetch product details when the component mounts
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    if (product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
        },
      });
    }
  };

  if (error) {
    return <div className="productDetail-error">Error: {error}</div>;
  }

  if (!product) {
    return <div className="productDetail-loading">Loading...</div>;
  }

  return (
    <div className="productDetail-container">
      <img src={product.thumbnail} alt={product.title} className="productDetail-image" />
      <h2 className="productDetail-title">{product.title}</h2>
      <p className="productDetail-description">{product.description}</p>
      <p className="productDetail-price">Price: ${product.price}</p>
      <button onClick={handleAddToCart} className="productDetail-addToCartButton">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;

