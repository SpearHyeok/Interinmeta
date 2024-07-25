import React from 'react';
import CardForm from './CardForm';

const CardFormPage = () => {
  return (
    <div className="card-form-page">
        <h1>이건가?</h1>
      <button className="back-button" onClick={() => window.history.back()}>뒤로 가기</button>
      <CardForm />
    </div>
  );
};

export default CardFormPage;
