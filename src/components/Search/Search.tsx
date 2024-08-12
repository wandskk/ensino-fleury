"use client";

import React from "react";
import Container from "@/components/Container/Container";
import Pagination from "@/components/Pagination/Pagination";

import "@/styles/Search/Search.scss";

interface SearchProps {
  data: {
    title: string;
    description: string;
    href: string;
  }[];
}

const Search: React.FC<SearchProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const controls = {
    next: () => {
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage))
      );
    },
    previous: () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    },
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="search">
      <Container>
        <div className="search__content">
          <ul className="search__list">
            {selectedItems &&
              selectedItems.map((search, index) => {
                const { title, description, href } = search;

                return (
                  <li key={index} className="search__item">
                    <a className="search__link" href={href} title={title}>
                      <h2 className="search__title">{title}</h2>
                      <p className="search__description">{description}</p>
                    </a>
                  </li>
                );
              })}
          </ul>

          <Pagination
            handleNext={controls.next}
            handlePrevious={controls.previous}
            currentPage={currentPage}
            maxPage={Math.ceil(data.length / itemsPerPage)}
          />
        </div>
      </Container>
    </section>
  );
};

export default Search;
