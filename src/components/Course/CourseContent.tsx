import React from "react";
import BlockRendererClient from "@/components/BlockRendererClient/BlockRendererClient";

import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { NavContentItemProps } from "@/types/NavContent/NavContentItemProps.types";

import "@/styles/Course/CourseContent.scss";
const CourseContent: React.FC<NavContentItemProps> = ({
  rotulo,
  descricao,
}) => {
  const content: BlocksContent = Array.isArray(descricao)
    ? (descricao as BlocksContent)
    : ([descricao] as BlocksContent);
  return (
    <div className="courseContent">
      <h2 className="courseContent__title">{rotulo}</h2>
      <div className="courseContent__content">
        <BlockRendererClient content={content} />
      </div>
    </div>
  );
};

export default CourseContent;
