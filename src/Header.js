import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCartClick = (e) => {
    e.stopPropagation();
    navigate('/cart'); // "/Cart"가 아닌 "/cart"로 수정
  };

  return (
    <header className="Header">
      <div className="Cart" onClick={handleCartClick}>
        <i className="fas fa-shopping-bag"></i>
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
