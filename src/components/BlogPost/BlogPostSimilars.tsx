import React from "react";
import BlogPostCard from "@/components/Blog/BlogPostCard";

import { BlogPostCardProps } from "@/types/BlogPost/BlogPostCardProps.types";

import "@/styles/BlogPost/BlogPostSimilars.scss";

const BlogPostSimilars = ({
  blogPosts,
}: {
  blogPosts: BlogPostCardProps[];
}) => {
  return (
    <div className="blogPostSimilars">
      <h5 className="blogPostSimilars__title">Você pode se interessar por:</h5>
      <ul className="blogPostSimilars__list">
        {blogPosts &&
          blogPosts.map((post) => {
            const { title, url, postImage } = post;
            return (
              <li className="blogPostSimilars__item" key={title}>
                <BlogPostCard title={title} url={url} postImage={postImage} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BlogPostSimilars;
