import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app to Home screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
