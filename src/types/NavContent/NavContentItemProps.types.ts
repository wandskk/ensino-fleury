import { CourseContentItemProps } from "@/types/Course/CourseContentItemProps.types";

export interface NavContentItemProps {
    descricao: {
        type: string;
        format: string;
        children: CourseContentItemProps[]
        level: number;
    }[];
    id?: number;
    rotulo?: string;
    url?: string;
}