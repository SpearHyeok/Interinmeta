import React, { useState } from 'react';

const CardNumberInput = ({ cardNumber, setCardNumber }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  const formatCardNumber = (number) => {
    if (number.length <= 8) {
      return number.replace(/(.{4})/g, '$1 ').trim();
    }
    const visibleDigits = number.slice(0, 8).replace(/(.{4})/g, '$1 ').trim();
    const maskedDigits = number.slice(8).replace(/./g, '•').replace(/(.{4})/g, '$1 ').trim();
    return visibleDigits + ' ' + maskedDigits;
  };

  const formatCardNumberforarea = (number) => {
    return number.replace(/(.{4})/g, '$1 ').trim();
  };

  return (
    <div className="field-group">
      <label htmlFor="cardNumber">카드 번호</label>
      <input
        className="input"
        type="text"
        id="cardNumber"
        value={formatCardNumberforarea(cardNumber)}
        onChange={handleInputChange}
        placeholder="Card Number"
        maxLength="19"
      />
    </div>
  );
};

const ExpiredMonthInput = ({ month, setMonth }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2 && value <= 12) {
      setMonth(value);
    }
  };

  return (
    <div className="field-group">
      <label htmlFor="expiryMonth">만료 월</label>
      <input
        className="input"
        type="text"
        id="expiryMonth"
        value={month}
        onChange={handleInputChange}
        placeholder="MM"
        maxLength="2"
      />
    </div>
  );
};

const ExpiredYearInput = ({ year, setYear }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // 숫자가 아닌 문자는 제거
    const currentYear = new Date().getFullYear() % 100; // 현재 연도의 마지막 두 자리

    if (value.length <= 2) {
      setShowAlert(value !== '' && Number(value) < currentYear);
      setYear(value);
    }
  };

  return (
    <div className="field-group">
      <label htmlFor="expiryYear">만료 연도</label>
      <input
        className="input"
        type="text"
        id="expiryYear"
        value={year}
        onChange={handleInputChange}
        placeholder="YY"
        maxLength="2"
      />
      {showAlert && (
        <small className="alert-message">현재 연도보다 커야 합니다.</small>
      )}
    </div>
  );
};

const OwnerName = ({ name, setName }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setName(value);
  };

  return (
    <div className="field-group">
      <label htmlFor="ownerName">카드 소유자 이름</label>
      <input
        className="input"
        type="text"
        id="ownerName"
        value={name}
        onChange={handleInputChange}
        placeholder="Card Holder Name"
      />
    </div>
  );
};

const CVCNumberInput = ({ cvc, setCvc }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvc(value);
    }
  };

  return (
    <div className="field-group">
      <label htmlFor="cvc">보안 코드(CVC/CVV)</label>
      <input
        className="input"
        type="text"
        id="cvc"
        value={cvc}
        onChange={handleInputChange}
        placeholder="CVC"
        maxLength="3"
      />
    </div>
  );
};

const CPWD = ({ pwd, setPwd }) => {
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setPwd(value);
    }
  };

  return (
    <div className="field-group">
      <label htmlFor="pwd">카드 비밀번호</label>
      <input
        className="input"
        type="password"
        id="pwd"
        value={pwd}
        onChange={handleInputChange}
        placeholder="Card Password"
        maxLength="2"
      />
    </div>
  );
};

export {
  CardNumberInput,
  ExpiredMonthInput,
  ExpiredYearInput,
  OwnerName,
  CVCNumberInput,
  CPWD,
};
