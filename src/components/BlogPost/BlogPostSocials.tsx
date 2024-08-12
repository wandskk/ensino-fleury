import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import "@/styles/BlogPost/BlogPostSocials.scss";

const BlogPostSocials = () => {
  return (
    <div className="blogPostSocials">
      <p className="blogPostSocials__text">Compartilhe</p>
      <nav className="blogPostSocials__nav">
        <ul className="blogPostSocials__list">
          <li className="blogPostSocials__item">
            <a
              className="blogPostSocials__link"
              href="/"
              title="Compartilhe este artigo no instagram"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="blogPostSocials__item">
            <a
              className="blogPostSocials__link"
              href="/"
              title="Compartilhe este artigo no linkedin"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="blogPostSocials__item">
            <a
              className="blogPostSocials__link"
              href="/"
              title="Compartilhe este artigo no facebook"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogPostSocials;
