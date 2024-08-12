import React from "react";
import Container from "@/components/Container/Container";

import { blogNav } from "@/resouces/utils/blog/blogNav";

import "@/styles/Blog/BlogNav.scss";

const BlogNav = () => {
  return (
    <section className="blogNav">
      <Container>
        <nav className="blogNav__navigation">
          <ul className="blogNav__list">
            {blogNav &&
              blogNav.map((navItem) => (
                <li className="blogNav__item" key={navItem.title}>
                  <a href={navItem.link} className="blogNav__link">
                    {navItem.title}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
};

export default BlogNav;
