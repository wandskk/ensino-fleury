import React from "react";


import "@/styles/Footer/FooterNav.scss";
import { HeaderNavProps } from "@/types/Header/HeaderNavProps.types";

const FooterNav = ({ data }: { data: HeaderNavProps[] }) => {
  return (
    <nav className="footerNav">
      <ul className="footerNav__list">
        {data.map((item, index) => (
          <li className="footerNav__item" key={index}>
            <a className="footerNav__link" href={item.url} title={item.descricao}>
              {item.rotulo}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
