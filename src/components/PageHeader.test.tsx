import React from "react";
import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";

test("renders PageHeader with title", () => {
  render(<PageHeader title="Test Page" />);
  const titleElement = screen.getByText(/test page/i);
  expect(titleElement).toBeInTheDocument();
});
