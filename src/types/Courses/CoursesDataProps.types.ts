import { CourseCardProps } from "@/types/Course/CourseCardProps.types";
import { PaginationProps } from "@/types/Pagination/PaginationProps.types";

export interface CoursesDataProps {
    data: CourseCardProps[];
    meta: {
        pagination: PaginationProps
    };
}