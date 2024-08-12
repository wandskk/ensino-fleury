import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";

import { MdHearing } from "react-icons/md";
import { BlogPostContentProps } from "@/types/BlogPost/BlogPostContentProps.types";

import "@/styles/BlogPost/BlogPostContent.scss";

const BlogPostContent: React.FC<BlogPostContentProps> = ({
  category,
  title,
  subtitle,
  date,
  readTime,
  content,
  contentWithImage,
}) => {
  return (
    <article className="blogPostContent">
      <div className="blogPostContent__header">
        <p className="blogPostContent__category">{category}</p>
        <h1 className="blogPostContent__title">{title}</h1>
        <p className="blogPostContent__subtitle">{subtitle}</p>
        <div className="blogPostContent__details">
          <small className="blogPostContent__date">Publicado em {date}</small>
          <small className="blogPostContent__readTime">
            Tempo de leitura: {readTime}
          </small>
        </div>
        <div className="blogPostContent__listen">
          <Button outline>
            <MdHearing /> <strong>Ouça este artigo</strong>
          </Button>
        </div>
      </div>
      <article
        className="blogPostContent__content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>

      <article className="blogPostContent__contentWithImage">
        <Image
          className="blogPostContent__contentWithImage__image"
          width={400}
          height={400}
          src={contentWithImage.image.url}
          alt={contentWithImage.image.alternativeText ?? ""}
        />
        <div
          className="blogPostContent__contentWithImage__content"
          dangerouslySetInnerHTML={{ __html: contentWithImage.content }}
        ></div>
      </article>
    </article>
  );
};

export default BlogPostContent;
