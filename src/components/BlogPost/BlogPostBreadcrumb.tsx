import React from "react";

import { LinkProps } from "@/types/Link/LinkProps.types";

import "@/styles/BlogPost/BlogPostBreadcrumb.scss";

const BlogPostBreadcrumb = ({
  breadcrumbList,
}: {
  breadcrumbList: LinkProps[];
}) => {
  return (
    <nav className="blogPostBreadcrumb">
      <ul className="blogPostBreadcrumb__list">
        {breadcrumbList.map((item, index) => (
          <li className="blogPostBreadcrumb__list" key={item.label}>
            <a
              className="blogPostBreadcrumb__link"
              href={item.href}
              title={item.label}
            >
              {item.label}
            </a>
            <span>/</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogPostBreadcrumb;
