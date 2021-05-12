import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About page', () => {
  render(<About />);
  const someText = screen.getByText(/PredictiveHire/i);
  expect(someText).toBeInTheDocument();
});
