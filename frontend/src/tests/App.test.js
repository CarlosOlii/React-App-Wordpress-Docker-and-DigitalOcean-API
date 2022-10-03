import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders react logo with alt', () => {
  render(<App />);

  const paragraphElement = screen.getByAltText(/logo react/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('renders loading', () => {
  render(<App />);

  const paragraphElement = screen.getByText(/loading/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);

  const paragraphElement = screen.getByText(/geral@mypointi.com/i);
  expect(paragraphElement).toBeInTheDocument();
});
