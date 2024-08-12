import React from "react";
import Container from "@/components/Container/Container";

import "@/styles/Blog/BlogSection.scss";

interface BlogSectionProps {
  children: React.ReactNode;
}

const BlogSection: React.FC<BlogSectionProps> = ({ children }) => {
  return (
    <section className="blogSection">
      <Container className="blogSection__container">
        <div className="blogSection__main">{children}</div>
      </Container>
    </section>
  );
};

export default BlogSection;
