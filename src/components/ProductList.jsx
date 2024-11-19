import React from "react";
import ProductItem from "./ProductItem.jsx";
import useFetch from "../hooks/useFetch.jsx";
import "./ProductList.css"

const ProductList = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products?limit=30");

  if (loading) return <div className="productList-loading">Loading...</div>;
  if (error) return <div className="productList-error">Error: {error.message}</div>;

  return (
    <div className="productList-container">
      {data.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
