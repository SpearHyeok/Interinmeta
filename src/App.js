// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import ProductListPage from './ProductListPage';
import AddCardPage from './AddCardPage';
import MyCardListPage from './MyCardListPage';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [cards, setCards] = useState([]);

  const handleAddCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  const products = [
    {
      id: 1,
      name: '브랜드A',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
      image: './img/11384888983_l.png'
    },
    {
      id: 2,
      name: '브랜드A',
      description: '밝은 컬러가 매력적인 신발',
      price: 25000,
      image: './img/11384888983_l.png'
    },
    {
      id: 3,
      name: '브랜드B',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
      image: './img/11384888983_l.png'
    },
    {
      id: 4,
      name: '브랜드B',
      description: '밝은 컬러가 매력적인 신발',
      price: 35000,
      image: './img/11384888983_l.png'
    },
    {
      id: 5,
      name: '브랜드C',
      description: '편안하고 착용감이 좋은 신발',
      price: 35000,
      image: './img/11384888983_l.png'
    },
    {
      id: 6,
      name: '브랜드C',
      description: '밝은 컬러가 매력적인 신발',
      price: 35000,
      image: './img/11384888983_l.png'
    },
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const showHeader = location.pathname == '/Interninmeta';

  return (
    <>
       {showHeader && <Header cartItems={cartItems} />}
      <Routes>
        <Route path="/add-card" element={<AddCardPage onAddCard={handleAddCard}/>} />
        <Route path="/Interninmeta" element={<ProductListPage products={products} handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
        <Route path="/my-cards" element={<MyCardListPage cards={cards} />} />
      </Routes>
    </>
  );
}

export default App;
