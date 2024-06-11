import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import images
import Img1 from "../../assets/flowers/bong1.png";
import Img2 from "../../assets/flowers/bong2.png";
import Img3 from "../../assets/flowers/bong3.png";
import Img4 from "../../assets/flowers/bong4.png";
import Img5 from "../../assets/flowers/bong5.png";
import Img6 from "../../assets/flowers/bong6.png";
import Img7 from "../../assets/flowers/bong7.png";
import Img8 from "../../assets/flowers/bong8.png";
import Img9 from "../../assets/flowers/bong9.png";
import Img10 from "../../assets/flowers/bong10.png";
import Img11 from "../../assets/flowers/bong11.png";
import Img12 from "../../assets/flowers/bong12.png";
import Img13 from "../../assets/flowers/bong13.png";
import Img14 from "../../assets/flowers/bong14.png";
import Img15 from "../../assets/flowers/bong15.png";

// Image map
const imageMap = {
  "Img1": Img1,
  "Img2": Img2,
  "Img3": Img3,
  "Img4": Img4,
  "Img5": Img5,
  "Img6": Img6,
  "Img7": Img7,
  "Img8": Img8,
  "Img9": Img9,
  "Img10": Img10,
  "Img11": Img11,
  "Img12": Img12,
  "Img13": Img13,
  "Img14": Img14,
  "Img15": Img15
};

// API URL
const API_URL = 'https://6661e54d63e6a0189fec03d1.mockapi.io/products';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    img: '',
    title: '',
    rating: '',
    color: '',
    origin: '',
    characteristics: '',
    description: '',
    aosDelay: '', // Add aosDelay field
    videoUrl: '' // Add videoUrl field
  });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async () => {
    try {
      await axios.post(API_URL, newProduct);
      fetchProducts();
      clearInputs();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async () => {
    try {
      const updatedProduct = { ...newProduct };
      await axios.put(`${API_URL}/${editProduct.id}`, updatedProduct);
      fetchProducts();
      clearInputs();
      setEditProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProduct) {
      updateProduct();
    } else {
      addProduct();
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewProduct({
      img: product.img,
      title: product.title,
      rating: product.rating,
      color: product.color,
      origin: product.origin,
      characteristics: product.characteristics,
      description: product.description,
      aosDelay: product.aosDelay, // Include aosDelay
      videoUrl: product.videoUrl // Include videoUrl
    });
  };

  const cancelEdit = () => {
    setEditProduct(null);
    clearInputs();
  };

  const clearInputs = () => {
    setNewProduct({
      img: '',
      title: '',
      rating: '',
      color: '',
      origin: '',
      characteristics: '',
      description: '',
      aosDelay: '', // Clear aosDelay
      videoUrl: '' // Clear videoUrl
    });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Product Dashboard</h1>

      {/* Form to add/edit product */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
        <input
          type="text"
          name="img"
          placeholder="Image URL (e.g., Img1)"
          value={newProduct.img}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {/* Add input for aosDelay */}
        
        <input
          type="text"
          name="aosDelay"
          placeholder="AOS Delay"
          value={newProduct.aosDelay}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {/* Add input for videoUrl */}
        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL"
          value={newProduct.videoUrl}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProduct.title}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newProduct.rating}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={newProduct.color}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={newProduct.origin}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          name="characteristics"
          placeholder="Characteristics"
          value={newProduct.characteristics}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          required
          style={{ flex: '1', marginRight: '10px', marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        {/* Submit button */}
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {editProduct ? 'Update Product' : 'Add Product'}
        </button>
        {editProduct && (
          <button
            type="button"
            onClick={cancelEdit}
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            Cancel
          </button>
        )}
            </form>

{/* Display list of products */}
<div style={{ display: 'grid', gap: '20px' }}>
  {products.map(product => (
    <div key={product.id} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9', borderRadius: '4px', padding: '20px' }}>
      <img src={imageMap[product.img]} alt={product.title} style={{ width: '200px', height: 'auto', marginRight: '20px', borderRadius: '4px' }} />
      <div>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>{product.title}</h3>
        <p>Description: {product.description}</p>
        <p>Rating: {product.rating}</p>
        <p>Origin: {product.origin}</p>
        <p>Color: {product.color}</p>
        <p>Characteristics: {product.characteristics}</p>
        {/* Display aosDelay and videoUrl */}
        <p>AOS Delay: {product.aosDelay}</p>
        <p>Video URL: {product.videoUrl}</p>
        <button
          onClick={() => deleteProduct(product.id)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Delete
        </button>
        <button
          onClick={() => handleEdit(product)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Edit
        </button>
      </div>
    </div>
  ))}
</div>
</div>
);
};

export default Dashboard;


