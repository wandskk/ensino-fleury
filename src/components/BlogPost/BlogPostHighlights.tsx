import React from "react";
import BlogPostCard from "@/components/Blog/BlogPostCard";

import { BlogPostCardProps } from "@/types/BlogPost/BlogPostCardProps.types";

import "@/styles/BlogPost/BlogPostHighlights.scss";

const BlogPostHighlights = ({
  blogPosts,
}: {
  blogPosts: BlogPostCardProps[];
}) => {
  return (
    <div className="blogPostHighlights">
      <h5 className="blogPostHighlights__title">Em alta</h5>
      <ul className="blogPostHighlights__list">
        {blogPosts &&
          blogPosts.map((post) => {
            const { title, url, postImage } = post;
            return (
              <li className="blogPostHighlights__item" key={title}>
                <BlogPostCard title={title} url={url} postImage={postImage} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BlogPostHighlights;
