import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders login username input", () => {
  render(<Login />);
  const usernameInput = screen.getByLabelText(/Email Address:/);
  expect(usernameInput).toBeInTheDocument();
});

test("renders login password input", () => {
  render(<Login />);
  const passwordInput = screen.getByLabelText(/Password:/);
  expect(passwordInput).toBeInTheDocument();
});

