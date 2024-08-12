import React from "react";

import { CourseVideoProps } from "@/types/Course/CourseVideoProps.types";
import { PUBLIC_API_LOCALHOST } from "@/services";

import "@/styles/Course/CourseVideo.scss";

const CourseVideo: React.FC<CourseVideoProps> = ({ src, thumb }) => {
  return (
    <div className="courseVideo">
      <video
        width="100%"
        height="480"
        poster={`${PUBLIC_API_LOCALHOST}${thumb}`}
        controls
      >
        <source src={`${PUBLIC_API_LOCALHOST}${src}`} type="video/mp4" />O seu
        navegador não suporta a tag vídeo
      </video>
    </div>
  );
};

export default CourseVideo;
