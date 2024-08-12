export interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    variant?: string;
    title?: string;
    classNames?: string;
    outline?: boolean;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}