import Image from "next/image";
import React from "react";

import { ImageProps } from "@/types/Image/ImageProps.types";
import { PUBLIC_API_LOCALHOST } from "@/services";

import "@/styles/Course/CourseBanner.scss";

const CourseBanner: React.FC<ImageProps> = ({ url, alternativeText }) => {
  return (
    <Image
      className="courseBanner"
      src={`${PUBLIC_API_LOCALHOST}${url}`}
      alt={alternativeText || ""}
      width={1280}
      height={400}
    />
  );
};

export default CourseBanner;
