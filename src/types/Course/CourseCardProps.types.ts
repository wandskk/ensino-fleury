import { ImageProps } from "@/types/Image/ImageProps.types";
import { NavContentItemProps } from "@/types/NavContent/NavContentItemProps.types";
import { VideoProps } from "@/types/Video/VideoProps.types";
import { CourseAreaProps } from "@/types/Course/CourseAreaProps.types";
import { CourseModalityProps } from "@/types/Course/CourseModalityProps.types";

export interface CourseCardProps {
    id?: number;
    documentId?: string;
    titulo: string;
    slug?: string;
    qtdParcelas?: number;
    cargaHoraria?: string;
    metodologia?: string;
    investimento: number;
    dataIInicio?: string;
    horaInicio?: string;
    endereco?: string;
    urlCurso?: string;
    menuInfo?: NavContentItemProps[]
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale?: string | null;
    descricaoSimplificada?: string | null;
    modalidade: CourseModalityProps;
    area?: CourseAreaProps;
    banner?: ImageProps;
    video?: VideoProps;
}