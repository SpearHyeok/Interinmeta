import React from 'react';
import './App.css';

function App() {
  const handleCardClick = () => {
    alert('상품 상세 페이지로 이동');
  };

  return (
    <div>
      <div className="Products">
        <div className='prd_Card' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
          <div className='prd_img_div'>
            <img src="/img/11384888983_l.png" className='prd_img' alt='상품 이미지' />
          </div>
          <div className='prd_name'>상품 이름</div>
          <div className='prd_description'>상품 설명</div>
          <div className='prd_price'>가격: 2000원</div>
        </div>
      </div>
    </div>
  );
}

export default App;
