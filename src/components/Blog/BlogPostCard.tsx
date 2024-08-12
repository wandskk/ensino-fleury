import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogPostCardProps } from "@/types/BlogPost/BlogPostCardProps.types";

import "@/styles/Blog/BlogPostCard.scss";

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  url,
  postImage,
  description,
  bigger,
}) => {
  return (
    <Link href={url} className={`blogPostCard ${bigger ? "--bigger" : ""}`}>
      <Image
        src={postImage}
        alt={title}
        className="blogPostCard__image"
        width={247}
        height={267}
      />
      <div className="blogPostCard__content">
        <h3 className="blogPostCard__title">{title}</h3>
        {description && (
          <p className="blogPostCard__description">{description}</p>
        )}
      </div>
    </Link>
  );
};

export default BlogPostCard;
