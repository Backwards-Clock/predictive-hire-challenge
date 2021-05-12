import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Welcome", () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});
