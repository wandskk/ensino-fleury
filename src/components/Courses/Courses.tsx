"use client";

import React from "react";
import Container from "@/components/Container/Container";
import InputSearch from "@/components/InputSearch/InputSearch";
import CoursesFilter from "@/components/Courses/CoursesFilter";
import CourseCard from "@/components/CourseCard/CourseCard";
import Pagination from "@/components/Pagination/Pagination";
import Button from "@/components/Button/Button";

import { CourseFilterItemProps } from "@/types/Course/CourseFilterItemProps.types";
import { MdClose } from "react-icons/md";
import { coursesRequestWithFilters } from "@/resouces/helpers/courses/coursesRequestWithFilters";
import { CoursesServices } from "@/services/modules/courses";
import { CourseCardProps } from "@/types/Course/CourseCardProps.types";
import { PaginationProps } from "@/types/Pagination/PaginationProps.types";

import "@/styles/Courses/Courses.scss";

interface CoursesProps {
  courseformats: CourseFilterItemProps[];
  knowledgeAreas: CourseFilterItemProps[];
}

const Courses: React.FC<CoursesProps> = ({ courseformats, knowledgeAreas }) => {
  const [coursesListFiltered, setCoursesListFiltered] = React.useState<
    CourseCardProps[]
  >([]);
  const [pagination, setPagination] = React.useState<PaginationProps>();
  const [showFilters, setShowFilters] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [courseformatsSelected, setCourseformatsSelected] = React.useState<
    string[]
  >([]);
  const [knowledgeAreasSelected, setKnowledgeAreasSelected] = React.useState<
    string[]
  >([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(6);

  const handleShowFilters = () => setShowFilters(!showFilters);

  const getCoursesList = React.useCallback(async () => {
    const courseList = await CoursesServices.getCoursesWithPagination(
      currentPage,
      itemsPerPage
    );

    if (courseList) {
      setCoursesListFiltered(courseList.data);
      setPagination(courseList.meta.pagination);
    }
  }, []);

  const paginationControls = {
    next: () => {
      setCurrentPage((prevPage) =>
        Math.min(
          prevPage + 1,
          Math.ceil((pagination?.pageCount ?? 1) / itemsPerPage)
        )
      );
    },
    previous: () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    },
  };

  React.useEffect(() => {
    window && window.innerWidth <= 991
      ? setItemsPerPage(4)
      : setItemsPerPage(6);
  }, []);

  React.useEffect(() => {
    getCoursesList();
  }, [getCoursesList]);

  React.useEffect(() => {
    setCurrentPage(1);

    const resultUrl = coursesRequestWithFilters(
      searchValue,
      courseformatsSelected,
      knowledgeAreasSelected,
      currentPage,
      itemsPerPage
    );

    const resultData = async () => {
      const response = await CoursesServices.getCoursesWithFilters(resultUrl);

      if (response) setCoursesListFiltered(response.data);
    };

    resultUrl.length > 0 && resultData();
  }, [
    searchValue,
    courseformatsSelected,
    knowledgeAreasSelected,
    currentPage,
    itemsPerPage,
  ]);

  return (
    <section className="courses">
      <Container>
        <div className="courses__main">
          <div className="courses__filters">
            <InputSearch
              placeholder="Buscar cursos"
              onChange={setSearchValue}
            />

            <div className="courses__filterButton">
              <Button outline onClick={handleShowFilters}>
                {showFilters ? <MdClose /> : "Filtros"}
              </Button>
            </div>

            <div className={`courses__filter ${showFilters ? "show" : ""}`}>
              <CoursesFilter
                courseformats={courseformats}
                setformatsSelected={setCourseformatsSelected}
                knowledgeAreas={knowledgeAreas}
                setAreasSelected={setKnowledgeAreasSelected}
              />
            </div>
          </div>

          <div className="courses__content">
            <RenderCourses courses={coursesListFiltered} />

            <div className="courses__pagination">
              {pagination && pagination.pageCount > 1 && (
                <Pagination
                  handleNext={paginationControls.next}
                  handlePrevious={paginationControls.previous}
                  currentPage={currentPage}
                  maxPage={pagination?.pageCount ?? 0}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const RenderCourses = ({ courses }: { courses: CourseCardProps[] }) => {
  return (
    <ul className="courses__gridCourses">
      {courses &&
        courses.map((course, index) => {
          return (
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
          );
        })}
    </ul>
  );
};

export default Courses;
