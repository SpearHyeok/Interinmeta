import React from 'react';

function ProductCard({ product, onAddToCart, isInCart }) {
  const handleCardClick = () => {
    alert(`${product.name} 상세 페이지로 이동`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div className='prd_Card' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className='prd_img_div'>
        <img src={product.image} className='prd_img' alt='상품 이미지' />
      </div>
      <div className='prd_name'>{product.name}</div>
      <div className='prd_description'>{product.description}</div>
      <div className='prd_price'>가격: {product.price.toLocaleString()}원</div>
      <button 
        onClick={handleButtonClick}
        className={isInCart ? 'btn-in-cart' : ''}
      >
        {isInCart ? '담김!' : '담기'}
      </button>
    </div>
  );
}
  
  export default ProductCard;
  