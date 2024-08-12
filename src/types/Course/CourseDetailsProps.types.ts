import { CourseAreaProps } from "@/types/Course/CourseAreaProps.types";

export interface CourseDetailsProps {
    titulo: string;
    cargaHoraria: string;
    modalidade: string;
    metodologia: string;
    area: CourseAreaProps;
    addressMap?: { lat: number, lng: number };
    investimento: string;
    qtdParcelas: number;
    urlCurso: string;
}