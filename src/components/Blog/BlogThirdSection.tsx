"use client";

import React from "react";
import BlogSection from "@/components/Blog/BlogSection";
import BlogPostCard from "@/components/Blog/BlogPostCard";
import Pagination from "@/components/Pagination/Pagination";

import { BlogPostCardProps } from "@/types/BlogPost/BlogPostCardProps.types";

import "@/styles/Blog/BlogThirdSection.scss";

interface BlogThirdSectionProps {
  title: string;
  subtitle: string;
  blogPosts: BlogPostCardProps[];
}

const BlogThirdSection: React.FC<BlogThirdSectionProps> = ({
  title,
  subtitle,
  blogPosts,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;

  const controls = {
    next: () => {
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, Math.ceil(blogPosts.length / itemsPerPage))
      );
    },
    previous: () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    },
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = blogPosts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <BlogSection>
      <div className="thirdSection">
        <div className="thirdSection__header">
          <h2 className="thirdSection__title">{title}</h2>
          <p className="thirdSection__subtitle">{subtitle}</p>
        </div>

        <ul className="thirdSection__postsGrid">
          {selectedItems &&
            selectedItems.map((post, index) => {
              const { title, url, postImage } = post;

              return (
                <li key={index} className="thirdSection__item">
                  <BlogPostCard title={title} url={url} postImage={postImage} />
                </li>
              );
            })}
        </ul>

        <div className="thirdSection__pagination">
          <Pagination
            handleNext={controls.next}
            handlePrevious={controls.previous}
            currentPage={currentPage}
            maxPage={Math.ceil(blogPosts.length / itemsPerPage)}
          />
        </div>
      </div>
    </BlogSection>
  );
};

export default BlogThirdSection;
