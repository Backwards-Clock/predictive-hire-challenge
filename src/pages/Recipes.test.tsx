import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipes from './Recipes';

test('renders Recipes page', () => {
  render(<Recipes />);
  const someText = screen.getByText(/Scones/);
  expect(someText).toBeInTheDocument();
});
