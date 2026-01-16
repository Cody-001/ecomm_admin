import React, { useState } from 'react';
import uploadimg from "../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "men",
    subcategory: "pants",
    new_price: "",
    old_price: "",
  });
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }
    setLoading(true);
    try {
      // Upload image first
      let formData = new FormData();
      formData.append("product", image);

      const uploadResponse = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const uploadData = await uploadResponse.json();

      if (!uploadData.success) {
        alert("Image upload failed");
        setLoading(false);
        return;
      }

      const productItem = { ...product, image: uploadData.image_url };
      
      const addProductResponse = await fetch(`${API_URL}/addproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productItem),
      });
      const addProductData = await addProductResponse.json();

      if (addProductData.success) {
        alert("Product Added");
        setProduct({
          name: "",
          image: "",
          category: "men",
          subcategory: "pants",
          new_price: "",
          old_price: "",
        });
        setImage(false);
      } else {
        alert("Unauthorized or failed to add product");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={product.name}
          onChange={changeHandler}
          type="text"
          placeholder="Type here"
          id="name"
          name="name"
          disabled={loading}
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={product.old_price}
            onChange={changeHandler}
            type="text"
            placeholder="Type here"
            id="old_price"
            name="old_price"
            disabled={loading}
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={product.new_price}
            onChange={changeHandler}
            type="text"
            placeholder="Type here"
            id="new_price"
            name="new_price"
            disabled={loading}
          />
        </div>
      </div>
      <div className="category-subcategory">
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select
            value={product.category}
            onChange={changeHandler}
            name="category"
            className="add-product-selector"
            disabled={loading}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kids</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Subcategory</p>
          <select
            value={product.subcategory}
            onChange={changeHandler}
            name="subcategory"
            className="add-product-selector"
            disabled={loading}
          >
            <option value="pant">Pants</option>
            <option value="shirt">Shirts</option>
            <option value="hoodies">Hoodies</option>
          </select>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadimg}
            className="addproduct-thumbnail"
            alt="Upload Preview"
            style={{ cursor: "pointer" }}
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
          disabled={loading}
        />
      </div>
      <button onClick={addProduct} className="addproduct-btn" disabled={loading}>
        {loading ? "Adding..." : "ADD"}
      </button>
    </div>
  );
};

export default AddProduct;