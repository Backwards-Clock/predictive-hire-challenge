import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";

test("renders PublicRoute", () => {
  render(<PublicRoute header={{ title: "Public Route" }} />, { wrapper: MemoryRouter });
});
