import React from "react";

import { NavContentItemProps } from "@/types/NavContent/NavContentItemProps.types";

import "@/styles/NavContent/NavContent.scss";
import { MdArrowRight } from "react-icons/md";

interface NavContentProps {
  nav: NavContentItemProps[];
  selected: number;
  onChange: (index: number) => void;
}

const NavContent: React.FC<NavContentProps> = ({ nav, selected, onChange }) => {
  return (
    <nav className="navContent">
      <ul className="navContent__list">
        {nav &&
          nav.map((navItem, index) => {
            const isSelected = index === selected;
            const className = isSelected
              ? "navContent__item --selected"
              : "navContent__item";

            return (
              <li
                className={className}
                key={navItem.rotulo}
                onClick={() => onChange(index)}
              >
                {navItem.rotulo}
                <MdArrowRight />
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default NavContent;
