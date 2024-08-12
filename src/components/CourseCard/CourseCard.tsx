import React from "react";
import Button from "@/components/Button/Button";

import { CourseCardProps } from "@/types/Course/CourseCardProps.types";
import { PUBLIC_API_LOCALHOST } from "@/services";
import { convertDoubleToBrl } from "@/resouces/helpers/money/convertDoubleToBrl";
import { convertDate } from "@/resouces/helpers/date/convertDate";
import { formatTime } from "@/resouces/helpers/time/formatTime";

import "@/styles/CourseCard/CourseCard.scss";

const CourseCard: React.FC<CourseCardProps> = ({
  titulo,
  modalidade,
  descricaoSimplificada,
  investimento,
  dataIInicio,
  horaInicio,
  banner,
  slug,
}) => {
  return (
    <div className="courseCard">
      <div className="courseCard__header">
        <p className="courseCard__title">{titulo}</p>
        <span className="courseCard__type">{modalidade?.rotulo}</span>
      </div>

      <img
        className="courseCard__image"
        src={`${PUBLIC_API_LOCALHOST}${banner?.url}`}
        width="auto"
        height="auto"
        alt={titulo}
      />

      <div className="courseCard__content">
        <p className="courseCard__description">{descricaoSimplificada}</p>

        <div className="courseCard__details">
          <p className="courseCard__price">
            {convertDoubleToBrl(investimento)}
          </p>

          <div className="courseCard__dateHour">
            <p className="courseCard__date">
              {dataIInicio && convertDate(dataIInicio)}
            </p>
            <p className="courseCard__hour">
              {horaInicio && formatTime(horaInicio)}
            </p>
          </div>
        </div>

        <div className="courseCard__button">
          <Button href={`/cursos/${slug}`} variant="red">
            Inscreva-se
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
