import React from "react";
import BlogSection from "@/components/Blog/BlogSection";

import "@/styles/Blog/BlogFirstSection.scss";

interface BlogFirstSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const BlogFirstSection: React.FC<BlogFirstSectionProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <BlogSection>
      <div
        className="firstSection"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="firstSection__card">
          <h1 className="firstSection__title">{title}</h1>
          <p className="firstSection__description">{description}</p>
        </div>
      </div>
    </BlogSection>
  );
};

export default BlogFirstSection;
