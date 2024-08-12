import React from "react";
import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";

import { ImageProps } from "@/types/Image/ImageProps.types";

import "@/styles/Home/HomeSecondSection.scss";
import { API_LOCALHOST } from "@/services";

interface SecondSection {
  titulo?: string;
  descricao?: string;
  listItems: {
    id: number;
    imagem: ImageProps;
    titulo: string;
  }[];
}

const HomeSecondSection: React.FC<SecondSection> = ({
  titulo,
  descricao,
  listItems,
}) => {
  return (
    <section className="secondSection">
      <Container>
        <div className="secondSection__content">
          <div className="secondSection__header">
            <h2 className="secondSection__title">{titulo}</h2>
            <p className="secondSection__description">{descricao}</p>
          </div>

          <HomeSecondSectionIcons listItems={listItems} />

          <div className="secondSection__button">
            <Button variant="red" href="/cursos">
              Explorar mais temas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

const HomeSecondSectionIcons = ({
  listItems,
}: {
  listItems: {
    id: number;
    imagem: ImageProps;
    titulo: string;
  }[];
}) => {
  return (
    <ul className="secondSection__list">
      {listItems.map((item, index) => (
        <li key={index} className="secondSection__item">
          <img
            className="secondSection__image"
            src={`${API_LOCALHOST}${item.imagem.url}`}
            alt={item.titulo}
          />
          <span className="secondSection__text">{item.titulo}</span>
        </li>
      ))}
    </ul>
  );
};

export default HomeSecondSection;
