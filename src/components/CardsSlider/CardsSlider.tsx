"use client";

import React from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CardSlideProps } from "@/types/CardSlide/CardSlideProps.types";

import "@/styles/CardsSlider/CardsSlider.scss";

const CardsSlider = ({ slideList }: { slideList: CardSlideProps[] }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleChangeSlide = (direction: string) => {
    setCurrentSlide(
      (currentSlide + (direction === "left" ? -1 : 1) + slideList.length) %
        slideList.length
    );
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      handleChangeSlide("right");
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, handleChangeSlide]);

  return (
    <div className="cardsSlider">
      <ul className="cardsSlider__list">
        {slideList &&
          slideList.map((slide, index) => (
            <li
              key={slide.id}
              className={`cardsSlider__item ${
                index === currentSlide ? "--active" : ""
              }`}
            >
              <h2 className="cardsSlider__title">{slide.titulo}</h2>
              <p className="cardsSlider__content">{slide.texto}</p>
            </li>
          ))}
      </ul>
      <div className="cardsSlider__controls">
        <button
          className="cardsSlider__button"
          onClick={() => handleChangeSlide("left")}
        >
          <FaChevronLeft />
        </button>
        <button
          className="cardsSlider__button"
          onClick={() => handleChangeSlide("right")}
        >
          <FaChevronRight />
        </button>
      </div>
      <ul className="cardsSlider__pagination">
        {slideList &&
          slideList.map((_, index) => (
            <li
              onClick={() => setCurrentSlide(index)}
              key={index}
              className={`cardsSlider__pagination__item ${
                index === currentSlide ? "--active" : ""
              }`}
            />
          ))}
      </ul>
    </div>
  );
};

export default CardsSlider;
