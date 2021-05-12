import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/Menu";
import PageHeader from "../components/PageHeader";

const About = ({ path }: { path: string | string[] | undefined }) => (
  <Container>
    <Menu path={path} />
    <PageHeader title={"About"} />
    <p>
      An app for PredictiveHire coding challenge
    </p>
    <p>
      Named Apples because it was the first thing I saw on the bench when looking for inspiration
    </p>
  </Container>
);

export default About;
