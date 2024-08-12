import React from "react";
import Container from "@/components/Container/Container";
import CourseCard from "@/components/CourseCard/CourseCard";
import Button from "@/components/Button/Button";

import { CourseCardProps } from "@/types/Course/CourseCardProps.types";
import { ImageProps } from "@/types/Image/ImageProps.types";
import { API_LOCALHOST } from "@/services";

import "@/styles/Home/HomeFourthSection.scss";

interface HomeFourthSectionProps {
  titulo: string;
  backgroundImage: ImageProps;
  coursesList: CourseCardProps[];
}

const HomeFourthSection: React.FC<HomeFourthSectionProps> = ({
  titulo,
  backgroundImage,
  coursesList,
}) => {
  return (
    <section
      className="fourthSection"
      style={{
        backgroundImage: `url('${API_LOCALHOST}${backgroundImage.url}')`,
      }}
    >
      <Container>
        <div className="fourthSection__content">
          <h2 className="fourthSection__title">{titulo}</h2>

          <ul className="fourthSection__coursesList">
            {coursesList &&
              coursesList.map((course, index) => (
                <li key={index}>
                  <CourseCard
                    titulo={course.titulo}
                    modalidade={course.modalidade}
                    banner={course.banner}
                    descricaoSimplificada={course.descricaoSimplificada}
                    investimento={course.investimento}
                    dataIInicio={course.dataIInicio}
                    horaInicio={course.horaInicio}
                    slug={course.slug}
                  />
                </li>
              ))}
          </ul>
          <div className="fourthSection__button">
            <Button href="/cursos" variant="red">
              Mostrar todas as áreas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeFourthSection;
