import React from "react";
import Container from "@/components/Container/Container";
import CustomMap from "@/components/CustomMap/CustomMap";
import ContactForm from "@/components/ContactForm/ContactForm";

import { FooterSocialsProps } from "@/types/Footer/FooterSocialsProps.types";
import { API_LOCALHOST } from "@/services";
import { extractLatLongFromGoogleMapsUrl } from "@/resouces/helpers/googleMaps/extractLatLongFromGoogleMapsUrl";

import "@/styles/Contact/Contact.scss";

interface ContactProps {
  info: {
    titulo: string;
    descricao: string;
    tituloMapa: string;
    endereco: string;
  };
  socialsLink: FooterSocialsProps[];
  formContato: { titulo: string; descricao: string };
}

const Contact: React.FC<ContactProps> = ({
  info,
  socialsLink,
  formContato,
}) => {
  const { titulo, descricao, tituloMapa, endereco } = info;
  const coordinates = extractLatLongFromGoogleMapsUrl(endereco) ?? "";

  return (
    <section className="contact">
      <Container>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__contact">
              <h2 className="contact__title">{titulo}</h2>
              <p className="contact__description">{descricao}</p>

              <ul className="contact__socialList">
                {socialsLink &&
                  socialsLink.map((social) => (
                    <li className="contact__socialItem" key={social.id}>
                      <a
                        href={social.url}
                        target="_blank"
                        className="contact__socialLink"
                      >
                        <img src={`${API_LOCALHOST}${social.imagem[0].url}`} />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="contact__address">
              <h2 className="contact__title">{tituloMapa}</h2>
              <div className="contact__map">
                {coordinates && (
                  <CustomMap lat={coordinates.lat} lng={coordinates.lng} />
                )}
              </div>
            </div>
          </div>
          <div className="contact__form">
            <ContactForm
              titulo={formContato.titulo ?? ""}
              descricao={formContato.descricao ?? ""}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
