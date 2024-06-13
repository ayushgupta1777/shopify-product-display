// src/services/shopifyService.js
import axios from 'axios';

const accessToken = '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';

const getProducts = async () => {
  const config = {
    headers: {
      'X-Shopify-Access-Token': accessToken,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.get('/admin/api/2023-01/products.json', config);
    return response.data.products;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

export default getProducts;
