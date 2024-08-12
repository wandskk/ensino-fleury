"use client";

import React from "react";

import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

import "@/styles/BlogPost/BlogPostUserInteresting.scss";

const BlogPostUserInteresting = () => {
  const [starsSelected, setStarsSelected] = React.useState<number | null>(null);
  const starsArray = Array(5).fill(0);

  return (
    <div className="blogPostUserInteresting">
      <h5 className="blogPostUserInteresting__title">
        Você achou esse conteúdo interessante?
      </h5>
      
      <ul className="blogPostUserInteresting__list">
        {starsArray.map((_, index) => {
          const isSelected = starsSelected !== null && index <= starsSelected;
          const isSelectedClass = index === starsSelected ? "--selected" : "";

          return (
            <li
              className={`blogPostUserInteresting__item ${isSelectedClass}`}
              key={index}
              onClick={() => setStarsSelected(index)}
            >
              {isSelected ? (
                <MdOutlineStarPurple500 />
              ) : (
                <MdOutlineStarOutline />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPostUserInteresting;
