import React from 'react';
import './Header.css';

const Header = ({ cartItems }) => {
  return (
    <header className="Header">
      <div className="Cart">
        <i className="fas fa-shopping-bag"></i>
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
