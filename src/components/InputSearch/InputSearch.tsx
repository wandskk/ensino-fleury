"use client";

import React from "react";

import { LiaSearchSolid } from "react-icons/lia";

import "@/styles/InputSearch/InputSearch.scss";

interface InputSearchProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ placeholder, onChange }) => {
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => onChange(searchValue), [searchValue]);

  return (
    <div className="inputSearch">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        className="inputSearch__input"
        placeholder={placeholder}
      />
      <button className="inputSearch__submit">
        <LiaSearchSolid />
      </button>
    </div>
  );
};

export default InputSearch;
