import React from "react";

import { LinkProps } from "@/types/Link/LinkProps.types";

import "@/styles/BlogPost/BlogPostTags.scss";

const BlogPostTags = ({ tagsList }: { tagsList: LinkProps[] }) => {
  return (
    <nav className="blogPostTags">
      <ul className="blogPostTags__list">
        {tagsList &&
          tagsList.map((tag, index) => (
            <li className="blogPostTags__item" key={index}>
              <a
                href={tag.href}
                className="blogPostTags__link"
                title={tag.label}
              >
                {tag.label}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default BlogPostTags;
