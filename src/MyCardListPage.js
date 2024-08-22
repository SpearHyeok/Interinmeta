import React from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import './MyCardListPage.css';

const MyCardListPage = ({cards}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  const handlePayment = () => {
    navigate('/payment-confirmation', { state: { totalPrice } });
  };

  return (
    <div className="my-card-list-page">
      <header className="header">
        <h2>보유카드</h2>
        <button className="close-button" onClick={() => navigate('/Interninmeta')}>X</button>
      </header>
      <div className="content">
      <div className="card-list">
        {cards.map((card, index) => (
            <div className="card-container" key={index}>
            <div className="card-image">
              <div className="chip"></div>
              <div className="card">
                <div className="card-details">
                  <span className="card-number">{card.cardNumber.replace(/(.{4})/g, '$1 ').trim()}</span>
                  <span className="card-name">{card.name}</span>
                  <span className="card-expiry">{card.month}/{card.year}</span>
                </div>
              </div>
            </div>
            <button className="card-button" onClick={handlePayment}>이 카드로 결제하기</button>
          </div>
        ))}
    </div>
        <p>새로운 카드를 등록해주세요.</p>
        <div className="card-placeholder" onClick={() => navigate('/add-card', { state: { totalPrice }}) }>
          <span className="plus-sign">+</span>
        </div>
      </div>
    </div>
  );
};

export default MyCardListPage;
