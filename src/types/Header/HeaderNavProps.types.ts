export interface HeaderNavProps {
    id: number;
    url: string;
    rotulo: string;
    descricao: string;
    subItens?: {
        id: number;
        url: string;
        rotulo: string;
        descricao: string;
    }[];
}

