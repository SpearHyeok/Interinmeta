import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders product card with correct details', () => {
  render(<App />);
  
  const productName = screen.getByText(/상품 이름/i);
  const productDescription = screen.getByText(/상품 설명/i);
  const productPrice = screen.getByText(/가격: 999원/i);

  expect(productName).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});

test('alerts when product card is clicked', () => {
  render(<App />);
  
  const productCard = screen.getByText(/상품 이름/i).closest('.prd_Card');

  window.alert = jest.fn();
  userEvent.click(productCard);

  expect(window.alert).toHaveBeenCalledWith('상품 상세 페이지로 이동');
});
