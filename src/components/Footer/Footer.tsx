"use server";

import React from "react";
import Logo from "@/components/Logo/Logo";
import Container from "@/components/Container/Container";
import FooterNav from "@/components/Footer/FooterNav";
import FooterSocials from "@/components/Footer/FooterSocials";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

import { FooterServices } from "@/services/modules/footer";

import "@/styles/Footer/Footer.scss";

const Footer = async () => {
  const data = await FooterServices.getFooter();
  const {
    logo,
    menuItens,
    info,
    iconesLinksMediasSociais,
    linkFlutuanteRodape,
  } = data;

  return (
    <footer className="footer">
      <Whatsapp url={linkFlutuanteRodape.url} />

      <Container>
        <div className="footer__content">
          <div className="footer__main">
            <Logo
              classNames="footer__logo"
              alternativeText="Logo Ensino Fleury"
              url={logo.url}
              width={363}
              height={42}
            />
            <div className="footer__navigations">
              <FooterNav data={menuItens} />
              <FooterSocials data={iconesLinksMediasSociais} />
            </div>
          </div>
          <div className="footer__copyright">
            {info &&
              info.map(({ id, texto }: { id: number; texto: string }) => (
                <p key={id}>{texto}</p>
              ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
