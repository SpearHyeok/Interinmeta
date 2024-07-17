import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: '브랜드A',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
      image: '/img/11384888983_l.png'
    },
    {
      id: 2,
      name: '브랜드A',
      description: '밝은 컬러가 매력적인 신발',
      price: 25000,
      image: '/img/11384888983_l.png'
    },
    {
      id: 3,
      name: '브랜드B',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
      image: '/img/11384888983_l.png'
    },
    {
      id: 4,
      name: '브랜드B',
      description: '밝은 컬러가 매력적인 신발',
      price: 35000,
      image: '/img/11384888983_l.png'
    },
    {
      id: 5,
      name: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
      image: '/img/11384888983_l.png'
    },
    {
      id: 6,
      name: '브랜드C',
      description: '밝은 컬러가 매력적인 신발',
      price: 35000,
      image: '/img/11384888983_l.png'
    },
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <header className="Header">
        <div className="Cart">
          <i className="fas fa-shopping-bag"></i>
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </header>
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
}


export default App;