import React from "react";
import Logo from "@/components/Logo/Logo";
import Container from "@/components/Container/Container";
import HeaderNav from "@/components/Header/HeaderNav";
import HeaderSearchField from "@/components/Header/HeaderSearchField";
import Button from "@/components/Button/Button";

import { HeaderServices } from "@/services/modules/header";

import "@/styles/Header/Header.scss";

const Header = async () => {
  const data = await HeaderServices.getHeader();

  const { logo, menuItens, cta } = data;

  if (data)
    return (
      <header className="header">
        <Container>
          <div className="header__content">
            <Logo
              classNames="header__logo"
              alternativeText="Logo Ensino Fleury"
              url={`${logo.url}`}
              width={415}
              height={48}
            />
            <HeaderNav data={menuItens} />
            <HeaderSearchField />
            <Button href={cta.url} title={cta.rotulo} variant="red">
              Entrar
            </Button>
          </div>
        </Container>
      </header>
    );
};

export default Header;
