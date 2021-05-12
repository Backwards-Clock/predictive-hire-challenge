import React, { useEffect } from "react";
import { Container } from "reactstrap";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  useEffect(() => {
    if (!title) return;
    document.title = `Apples - ${title}`;
  });

  if (!title) return null;

  return (
    <section className="title-section">
      <Container className="title-container">
        {subtitle && <h2>{subtitle}</h2>}
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default PageHeader;
