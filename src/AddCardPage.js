import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardForm from './CardForm';
import './AddCardPage.css';

const AddCardPage = ({ onAddCard }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [pwd, setPwd] = useState('');
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { cardNumber, month, year, name, cvc, pwd };
    onAddCard(newCard);
    navigate('/my-cards', { state: { totalPrice } });
  };

  const formatCardNumber = (number) => {
    if (number.length <= 8) {
      return number.replace(/(.{4})/g, '$1 ').trim();
    }
    const visibleDigits = number.slice(0, 8).replace(/(.{4})/g, '$1 ').trim();
    const maskedDigits = number.slice(8).replace(/./g, '•').replace(/(.{4})/g, '$1 ').trim();
    return visibleDigits + ' ' + maskedDigits;
  };

  return (
    <div className="add-card-page">
      <header className="header">
        <button className="close-button" onClick={() => navigate('/Interninmeta')}>X</button>
        <h2>카드 추가</h2>
      </header>
      <div className="card-image">
        <div className="chip"></div>
        <div className="card-details">
          <span className="card-number">{cardNumber ? formatCardNumber(cardNumber) : '1234 5678 •••• ••••'}</span>
          <span className="card-name">{name || 'NAME'}</span>
          <span className="card-expiry">{month || 'MM'}/{year || 'YY'}</span>
        </div>
      </div>
      <CardForm 
        cardNumber={cardNumber} setCardNumber={setCardNumber}
        month={month} setMonth={setMonth}
        year={year} setYear={setYear}
        name={name} setName={setName}
        cvc={cvc} setCvc={setCvc}
        pwd={pwd} setPwd={setPwd}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddCardPage;
