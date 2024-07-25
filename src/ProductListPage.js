// ProductListPage.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductListPage.css';

const ProductListPage = ({ products, handleAddToCart, cartItems }) => {
  return (
    <div>
      <div className="Subject">
        <h1>신발 상품 목록</h1>
        <p>현재 {products.length}개의 상품이 있습니다.</p>
      </div>
      <div className="Products">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            isInCart={cartItems.some(item => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
