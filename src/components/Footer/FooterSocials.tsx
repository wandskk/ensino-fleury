import React from "react";

import { FooterSocialsProps } from "@/types/Footer/FooterSocialsProps.types";
import { API_LOCALHOST } from "@/services";

import "@/styles/Footer/FooterSocials.scss";

const FooterSocials = async ({ data }: { data: FooterSocialsProps[] }) => {
  return (
    <nav className="footerSocials">
      <ul className="footerSocials__list">
        {data.map((item, index) => {
          const { url, rotulo, imagem } = item;
          const imageUrl = imagem[0].url;

          return (
            <li className="footerSocials__item" key={index}>
              <a
                className="footerSocials__link"
                href={url}
                title={rotulo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footerSocials__image"
                  src={`${API_LOCALHOST}${imageUrl}`}
                  alt={rotulo}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterSocials;
