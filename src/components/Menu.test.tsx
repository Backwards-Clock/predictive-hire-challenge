import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders Menu', () => {
  // renders without error
  render(<Menu />);
});
