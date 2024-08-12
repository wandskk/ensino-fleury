import React from "react";
import Container from "@/components/Container/Container";

import "../../styles/Home/HomeThirdSection.scss";

interface ThirdSection {
  titulo: string;
  listItems: {
    id: number;
    texto: string;
  }[];
}

const HomeThirdSection: React.FC<ThirdSection> = ({ titulo, listItems }) => {
  return (
    <section className="thirdSection">
      <Container>
        <div className="thirdSection__content">
          <h2 className="thirdSection__title">{titulo}</h2>
          <ul className="thirdSection__list">
            {listItems.map((item) => (
              <li className="thirdSection__item" key={item.id}>
                {item.texto}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default HomeThirdSection;
