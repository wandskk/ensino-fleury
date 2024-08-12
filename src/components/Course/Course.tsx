"use client";

import React from "react";
import Container from "@/components/Container/Container";
import CourseBanner from "@/components/Course/CourseBanner";
import CourseContent from "@/components/Course/CourseContent";
import CourseDetails from "@/components/Course/CourseDetails";
import CourseVideo from "@/components/Course/CourseVideo";
import NavContent from "@/components/NavContent/NavContent";
import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";

import { ImageProps } from "@/types/Image/ImageProps.types";
import { NavContentItemProps } from "@/types/NavContent/NavContentItemProps.types";
import { CourseDetailsProps } from "@/types/Course/CourseDetailsProps.types";
import { CourseVideoProps } from "@/types/Course/CourseVideoProps.types";
import { CourseCardProps } from "@/types/Course/CourseCardProps.types";

import "@/styles/Course/Course.scss";

interface CourseProps {
  courseData: CourseCardProps;
}

const Course: React.FC<CourseProps> = ({ courseData }) => {
  const { banner, menuInfo } = courseData;
  const [navSelected, setNavSelected] = React.useState(0);

  const handleSelectNav = (index: number) => setNavSelected(index); 

  if (courseData)
    return (
      <>
        <section className="course">
          <Container>
            <div className="course__main">
              <CourseBanner
                url={banner?.url ?? ""}
                alternativeText={banner?.alternativeText ?? ""}
              />

              <div className="course__content">
                <NavContent
                  nav={menuInfo || []}
                  selected={navSelected}
                  onChange={handleSelectNav}
                />

                <CourseContent
                  rotulo={menuInfo && menuInfo[navSelected].rotulo}
                  descricao={
                    (menuInfo && menuInfo[navSelected].descricao) ?? []
                  }
                />

                <CourseDetails
                  titulo={courseData.titulo}
                  cargaHoraria={courseData.cargaHoraria}
                  modalidade={courseData.modalidade}
                  metodologia={courseData.metodologia}
                  area={courseData.area}
                  investimento={courseData.investimento}
                  qtdParcelas={courseData.qtdParcelas}
                  urlCurso={courseData.urlCurso}
                />
              </div>
              <div className="course__footer">
                <CourseVideo
                  src={courseData?.video?.url ?? ""}
                  thumb={courseData?.banner?.url ?? ""}
                />

                <SubscribeForm />
              </div>
            </div>
          </Container>
        </section>
      </>
    );
};

export default Course;
