"use client";

import React from "react";
import { CoursesContextProps } from "@/types/Context/CoursesContextProps.types";
import { CourseProps } from "@/types/Course/CourseProps.types";

export const CoursesContext = React.createContext<
  CoursesContextProps | undefined
>(undefined);

interface CoursesStorageProps {
  children: React.ReactNode;
}

export const CoursesStorage: React.FC<CoursesStorageProps> = ({ children }) => {
  const [search, setSearch] = React.useState("");
  const [courses, setCourses] = React.useState<CourseProps[]>([]);

  return (
    <CoursesContext.Provider
      value={{
        search,
        courses,
        setCourses,
        setSearch,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
