import React from "react";
import CardsSlide from "@/components/CardsSlider/CardsSlider";
import Container from "@/components/Container/Container";

import { CardSlideProps } from "@/types/CardSlide/CardSlideProps.types";
import { ImageProps } from "@/types/Image/ImageProps.types";
import { API_LOCALHOST } from "@/services";

import "@/styles/Home/HomeFirstSection.scss";

interface FirstSection {
  backgroundImage: ImageProps;
  slideList: CardSlideProps[];
}

const HomeFirstSection: React.FC<FirstSection> = ({
  backgroundImage,
  slideList,
}) => {
  return (
    <section
      className="homeFirstSection"
      style={{
        backgroundImage: `url('${API_LOCALHOST}${backgroundImage.url}')`,
      }}
    >
      <Container>
        <div className="homeFirstSection__cardsSlider">
          <CardsSlide slideList={slideList} />
        </div>
      </Container>
    </section>
  );
};

export default HomeFirstSection;
