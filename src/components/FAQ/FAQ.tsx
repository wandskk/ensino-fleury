"use client";

import React from "react";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FAQItemProps } from "@/types/FAQ/FAQItemProps.types";

import "@/styles/FAQ/FAQ.scss";

const FAQ = ({ questionsList }: { questionsList: FAQItemProps[] }) => {
  const [selected, setSelected] = React.useState<number | null>(null);

  const handleSelectQuestion = (index: number) => {
    selected !== index ? setSelected(index) : setSelected(null);
  };

  return (
    <ul className="faq">
      {questionsList &&
        questionsList.map((question, index) => {
          const isSelected = selected === index;

          return (
            <li
              key={question.id}
              className={`faq__item ${isSelected ? "--selected" : ""}`}
              onClick={() => handleSelectQuestion(index)}
            >
              <div className="faq__question">
                <h3 className="faq__title">{question.pergunta}</h3>
                <span className="faq__icon">
                  {isSelected ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </div>
              <p className="faq__answer">{question.resposta}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default FAQ;
