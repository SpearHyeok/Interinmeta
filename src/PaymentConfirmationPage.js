import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentConfirmationPage.css';

const PaymentConfirmationPage = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  return (
    <div className="confirmation-container">
      <header className="Header1">
      </header>
      <div className="confirmation-content">
        <h2>결제가 완료되었습니다!</h2>
        <p className="total-price">총 결제 금액: {totalPrice.toLocaleString()}원</p>
        <p className="confirmation-message">결제가 성공적으로 완료되었습니다. 이용해 주셔서 감사합니다.</p>
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;
