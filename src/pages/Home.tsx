import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/Menu";
import PageHeader from "../components/PageHeader";

const Home = ({ path } : { path: string | string[] | undefined }) => (
  <Container>
    <Menu path={path} />
    <PageHeader title={"Home"} />
    <p>
      <a href="/login">Log In</a>.
    </p>
  </Container>
);

export default Home;
