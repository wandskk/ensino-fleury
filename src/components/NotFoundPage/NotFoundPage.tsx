import React from "react";
import Container from "@/components/Container/Container";

import { MdOutlineArrowBack } from "react-icons/md";

import "@/styles/NotFoundPage/NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <section className="notFoundPage">
      <Container>
        <div className="notFoundPage__content">
          <span className="notFoundPage__404">404</span>
          <h1 className="notFoundPage__title">Oops! Página não encontrada.</h1>
          <p className="notFoundPage__subtitle">
            Parece que você está perdido...
          </p>

          <div className="notFoundPage__action">
            <MdOutlineArrowBack />
            <a href="/" className="notFoundPage__link">
              Voltar para a home
            </a>
          </div>
        </div>
      </Container>
      <img className="notFoundPage__simbolo" src="/simbolo.png" alt="simbolo" />
    </section>
  );
};

export default NotFoundPage;
