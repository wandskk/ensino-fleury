import React from "react";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import Image from "next/image";

import "@/styles/Home/HomeSixthSection.scss";

interface HomeSixthSectionProps {
  titulo: string;
  buttons: {
    id: number;
    tipo: string;
    rotulo: string;
    url: string;
  }[];
}

const HomeSixthSection: React.FC<HomeSixthSectionProps> = ({
  titulo,
  buttons,
}) => {
  return (
    <section className="sixthSection">
      <Container>
        <div className="sixthSection__content">
          <h2 className="sixthSection__title">{titulo}</h2>

          <div className="sixthSection__buttons">
            {buttons &&
              buttons.map((button, index) => {
                return index % 2 === 0 ? (
                  <Button href={button.url} variant="red" outline>
                    {button.rotulo}
                  </Button>
                ) : (
                  <Button href={button.url} variant="red">
                    {button.rotulo}
                  </Button>
                );
              })}
          </div>

          <div className="sixthSection__image">
            <Image
              src="/simbolo.png"
              width={116}
              height={217}
              alt="Imagem do símbolo"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSixthSection;
