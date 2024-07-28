import React from 'react';
import {
  CardNumberInput,
  ExpiredMonthInput,
  ExpiredYearInput,
  OwnerName,
  CVCNumberInput,
  CPWD,
} from './CardInputs';
import './CardForm.css';

const CardForm = ({ cardNumber, setCardNumber, month, setMonth, year, setYear, name, setName, cvc, setCvc, pwd, setPwd, onSubmit }) => {

  return (
    <form className="card-form" onSubmit={onSubmit}>
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <div className="field-group inline">
        <ExpiredMonthInput month={month} setMonth={setMonth} />
        <ExpiredYearInput year={year} setYear={setYear} />
      </div>
      <OwnerName name={name} setName={setName} />
      <div className="field-group inline">
        <CVCNumberInput cvc={cvc} setCvc={setCvc} />
        <CPWD pwd={pwd} setPwd={setPwd} />
      </div>
      <button type="submit" className="submit-button">작성 완료</button>
    </form>
  );
};

export default CardForm;
