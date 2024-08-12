import React from "react";

import { CourseFilterItemProps } from "@/types/Course/CourseFilterItemProps.types";

import "@/styles/Courses/CoursesFilter.scss";

interface CoursesFilterProps {
  courseformats: CourseFilterItemProps[];
  setformatsSelected: React.Dispatch<React.SetStateAction<string[]>>;
  knowledgeAreas: CourseFilterItemProps[];
  setAreasSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

interface RenderListFilterProps {
  title: string;
  list: CourseFilterItemProps[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  selectedList: string[];
  onClick: (
    courseFormat: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => void;
}

const CoursesFilter: React.FC<CoursesFilterProps> = ({
  courseformats,
  setformatsSelected,
  knowledgeAreas,
  setAreasSelected,
}) => {
  const [selectedCourseformats, setSelectedCourseformats] = React.useState<
    string[]
  >([]);
  const [selectedKnowledgeAreas, setSelectedKnowledgeAreas] = React.useState<
    string[]
  >([]);

  const handleSelect = (
    courseFormat: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const index = list.findIndex((id) => id === courseFormat);

    index === -1
      ? setList([...list, courseFormat])
      : setList(list.filter((id) => id !== courseFormat));
  };

  const handleClearFilters = () => {
    setSelectedCourseformats([]);
    setSelectedKnowledgeAreas([]);
  };

  React.useEffect(() => {
    setformatsSelected(selectedCourseformats);
    setAreasSelected(selectedKnowledgeAreas);
  }, [selectedCourseformats, selectedKnowledgeAreas]);

  return (
    <div className="coursesFilter">
      <div className="coursesFilter__header">
        <p className="coursesFilter__title">Filtros</p>
        <button className="coursesFilter__clear" onClick={handleClearFilters}>
          Limpar filtros
        </button>
      </div>

      <div className="coursesFilter__filters">
        <RenderListFilter
          title="Formato do curso"
          list={courseformats}
          setList={setSelectedCourseformats}
          selectedList={selectedCourseformats}
          onClick={handleSelect}
        />

        <RenderListFilter
          title="Áreas de conhecimento"
          list={knowledgeAreas}
          setList={setSelectedKnowledgeAreas}
          selectedList={selectedKnowledgeAreas}
          onClick={handleSelect}
        />
      </div>
    </div>
  );
};

const RenderListFilter: React.FC<RenderListFilterProps> = ({
  title,
  list,
  selectedList,
  setList,
  onClick,
}) => {
  return (
    <div className="coursesFilter__filter">
      <p className="coursesFilter__filter__title">{title}</p>
      <ul className="coursesFilter__filter__list">
        {list &&
          list.map((item) => {
            const isSelected = selectedList.includes(item.rotulo);
            const selectedClass = isSelected ? "--selected" : "";

            return (
              <li
                key={item.id}
                className={`coursesFilter__filter__item ${selectedClass}`}
                onClick={() => onClick(item.rotulo, selectedList, setList)}
              >
                {item.rotulo}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CoursesFilter;
