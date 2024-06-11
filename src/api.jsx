import axios from 'axios';

const API_URL = 'https://6661e54d63e6a0189fec03d1.mockapi.io/products'; 

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};
