import Image from "next/image";
import React from "react";

import { ImageProps } from "@/types/Image/ImageProps.types";

import "@/styles/BlogPost/BlogPostBanner.scss";

const BlogPostBanner: React.FC<ImageProps> = ({ url, alternativeText }) => {
  return (
    <Image
      className="blogPostBanner"
      src={url}
      alt={alternativeText ?? ""}
      width={1280}
      height={400}
    />
  );
};

export default BlogPostBanner;
