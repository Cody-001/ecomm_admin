import React, { useState, useEffect } from 'react';
import cross_icon from '../assets/cross_icon.png';

const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchInfo = async () => {
    try {
      const response = await fetch(`${API_URL}/allproducts`);
      const data = await response.json();
      setAllProduct(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [API_URL]);

  const removeProduct = async (id) => {
    try {
      await fetch(`${API_URL}/removeproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      await fetchInfo();
    } catch (error) {
      console.error("Failed to remove product:", error);
    }
  };

  return (
    <div className="listproduct">
      <h1>ALL PRODUCTS LIST</h1>
      <div className="listproduct-format listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Subcategory</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-format listproduct-all">
        <hr />
        {allProduct.map((product, index) => (
          <div key={product.id || index} className="listproduct-format-main">
            <img src={product.image} alt="" className="listproduct-format-main-image" />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <p>{product.subcategory}</p>
            <img
              onClick={() => removeProduct(product.id)}
              className="listproduct-format-main-image"
              src={cross_icon}
              alt="Remove"
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;