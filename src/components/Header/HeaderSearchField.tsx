"use client";

import React from "react";

import { LiaSearchSolid } from "react-icons/lia";
import { slugify } from "@/resouces/helpers/slug/slugify";

import "@/styles/Header/HeaderSearchField.scss";

const HeaderSearchField = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSubmit = () => {
    const url = `/search/${slugify(searchValue, true)}`;

    window.location.href = url;
  };

  return (
    <div className="headerSearchField">
      <input
        type="text"
        className="headerSearchField__input"
        placeholder="Buscar no site"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSubmit} className="headerSearchField__submit">
        <LiaSearchSolid />
      </button>
    </div>
  );
};

export default HeaderSearchField;
