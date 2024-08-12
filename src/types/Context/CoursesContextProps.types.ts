import { SetStateAction } from "react";
import { CourseProps } from "@/types/Course/CourseProps.types";

export interface CoursesContextProps {
    search: string;
    courses: CourseProps[];
    setCourses: React.Dispatch<SetStateAction<CourseProps[]>>;
    setSearch: React.Dispatch<SetStateAction<string>>;
}