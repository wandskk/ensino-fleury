import CustomMap from "@/components/CustomMap/CustomMap";
import React from "react";
import Button from "@/components/Button/Button";
import { CourseCardProps } from "@/types/Course/CourseCardProps.types";

import "@/styles/Course/CourseDetails.scss";
import { convertDoubleToBrl } from "@/resouces/helpers/money/convertDoubleToBrl";

const CourseDetails: React.FC<CourseCardProps> = ({
  titulo,
  cargaHoraria,
  modalidade,
  metodologia,
  area,
  investimento,
  qtdParcelas,
  urlCurso,
}) => {
  const investimentoConvertido = convertDoubleToBrl(investimento);
  const valorParcela =
    qtdParcelas && convertDoubleToBrl(Math.floor(investimento / qtdParcelas));
  return (
    <div className="courseDetails">
      <h2 className="courseDetails__title">{titulo}</h2>
      <div className="courseDetails__content">
        <div className="courseDetails__details">
          <div className="courseDetails__detail">
            <h4 className="courseDetails__detail__title">Carga Horária</h4>
            <p className="courseDetails__detail__text">{cargaHoraria}</p>
          </div>
          <div className="courseDetails__detail">
            <h4 className="courseDetails__detail__title">Modadelidade</h4>
            <p className="courseDetails__detail__text">{modalidade?.rotulo}</p>
          </div>
        </div>

        <div className="courseDetails__details">
          <div className="courseDetails__detail">
            <h4 className="courseDetails__detail__title">Metodologia</h4>
            <p className="courseDetails__detail__text">{metodologia}</p>
          </div>
          <div className="courseDetails__detail">
            <h4 className="courseDetails__detail__title">Área</h4>
            <p className="courseDetails__detail__text">{area?.rotulo}</p>
          </div>
        </div>
        <div className="courseDetails__map">
          <h4 className="courseDetails__detail__title">Endereço</h4>
          <div className="courseDetails__detail__map">
            {/* <CustomMap lat={addressMap.lat} lng={addressMap.lng} /> */}
          </div>
        </div>
        <div className="courseDetails__investment">
          <h4 className="courseDetails__detail__title">Investimento</h4>
          <p className="courseDetails__detail__text">
            {investimentoConvertido} (em até {qtdParcelas}x de {valorParcela})
          </p>
        </div>
        <div className="courseDetails__action">
          <Button href={urlCurso}>Inscreva-se</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
