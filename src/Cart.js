import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems }) {
  const [groupedItems, setGroupedItems] = useState([]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/my-cards');
  };

  const increaseQuantity = (id) => {
    setGroupedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  

  const decreaseQuantity = (id) => {
    setGroupedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  

  
  // cartItems를 그룹화하여 id가 같은 아이템들의 수량을 합침
  useEffect(() => {
    // cartItems를 그룹화하여 id가 같은 아이템들의 수량을 합침
    const grouped = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((accItem) => accItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    setGroupedItems(grouped);
  }, [cartItems]);  // 의존성 배열에 cartItems를 지정

  const TotalPrice = () => {
    return groupedItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = TotalPrice();
  let deliveryFee = 3000; // 기본 배송비
  let discountMessage = '';

  // 총 상품 금액이 100,000원을 초과하면 배송비를 0원으로 설정
  if (totalPrice > 100000) {
    deliveryFee = 0;
    discountMessage = '상품 금액이 100,000원을 초과하여 배송비가 무료입니다!';
  }

  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      <p>현재 {groupedItems.length}개의 상품이 담겨있습니다.</p>
      {groupedItems.length === 0 ? (
        <p>장바구니에 상품이 없습니다.</p>
      ) : (
        <div>
          {groupedItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.description} className="cart-item-image" />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">
                  {item.price.toLocaleString()}원 ×
                  <div className="cart-item-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <div className="cart-item-total-price">
                  총: {(item.price * item.quantity).toLocaleString()}원
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="cart-summary-item">
              <span>상품 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <div className="cart-summary-item">
              <span>배송비</span>
              <span>{deliveryFee.toLocaleString()}원</span>
            </div>
            {discountMessage && (
              <div className="cart-summary-discount">
                <span>{discountMessage}</span>
              </div>
            )}
            <div className="cart-summary-item total">
              <span>총 금액</span>
              <span>{(totalPrice + deliveryFee).toLocaleString()}원</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>결제하기</button>
          </div>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      stock: PropTypes.number,
    })
  ).isRequired,
};

export default Cart;
