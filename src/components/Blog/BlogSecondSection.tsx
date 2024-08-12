import React from "react";
import BlogSection from "@/components/Blog/BlogSection";
import BlogPostCard from "@/components/Blog/BlogPostCard";

import { BlogPostCardProps } from "@/types/BlogPost/BlogPostCardProps.types";

import "@/styles/Blog/BlogSecondSection.scss";

interface BlogSecondSectionProps {
  title: string;
  blogPosts: BlogPostCardProps[];
}

const BlogSecondSection: React.FC<BlogSecondSectionProps> = ({
  title,
  blogPosts,
}) => {
  return (
    <BlogSection>
      <div className="secondSection">
        <h2 className="secondSection__title">{title}</h2>
        <ul className="secondSection__listGrid">
          {blogPosts &&
            blogPosts.map((post, index) => {
              const { title, url, description, postImage } = post;
              const isFirstPost = index === 0;
              const firstPostClass = isFirstPost ? "--first" : "";

              return (
                <li
                  key={index}
                  className={`secondSection__item ${firstPostClass}`}
                >
                  <BlogPostCard
                    bigger={isFirstPost}
                    title={title}
                    url={url}
                    description={description ?? ""}
                    postImage={postImage}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </BlogSection>
  );
};

export default BlogSecondSection;
