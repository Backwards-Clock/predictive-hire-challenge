import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/Menu";

const Home = ({ path } : { path: string | string[] | undefined }) => (
  <Container>
    <Menu path={path} />
    <h1>Home</h1>
    <p>
      <a href="/login">Log In</a>.
    </p>
  </Container>
);

export default Home;
