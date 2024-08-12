import React from "react";
import Container from "@/components/Container/Container";
import FAQ from "@/components/FAQ/FAQ";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

import { FAQItemProps } from "@/types/FAQ/FAQItemProps.types";

import "@/styles/Home/HomeFifthSection.scss";

interface FifthSectionProps {
  titulo: string;
  listaDePerguntas: FAQItemProps[];
}

const HomeFifthSection: React.FC<FifthSectionProps> = ({
  titulo,
  listaDePerguntas,
}) => {
  return (
    <section className="fifthSection">
      <Container>
        <div className="fifthSection__main">
          <h2 className="fifthSection__title">{titulo}</h2>

          <div className="fifthSection__content">
            <div className="fifthSection__faq">
              <FAQ questionsList={listaDePerguntas} />
            </div>

            <div className="fifthSection__form">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeFifthSection;
