// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import getProducts from './services/shopifyService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h1>Product List</h1>
      {products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: product.body_html }} />
          <p><strong>Category:</strong> {product.product_type}</p>
          <p><strong>Tags:</strong> {product.tags}</p>
          <p><strong>Variant:</strong> {product.variants[0].title}</p>
          <p><strong>Price:</strong> {product.variants[0].price}</p>
          <p><strong>Compare At Price:</strong> {product.variants[0].compare_at_price}</p>
          <p><strong>SKU:</strong> {product.variants[0].sku}</p>
          <p><strong>Quantity:</strong> {product.variants[0].inventory_quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
