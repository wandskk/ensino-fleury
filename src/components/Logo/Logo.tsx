import { API_LOCALHOST } from "@/services";
import { ImageProps } from "@/types/Image/ImageProps.types";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC<ImageProps> = ({
  url,
  classNames,
  alternativeText,
  width,
  height,
}) => {
  return (
    <Link href="/" title="Voltar para a página inicial">
      <img
        src={`${API_LOCALHOST}${url}`}
        className={classNames ?? ""}
        alt={alternativeText ?? ""}
        width={width}
        height={height}
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
