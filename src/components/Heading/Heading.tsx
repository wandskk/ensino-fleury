import Image from "next/image";
import React from "react";
import Container from "@/components/Container/Container";

import { LinkProps } from "@/types/Link/LinkProps.types";
import { LiaSearchSolid } from "react-icons/lia";

import "@/styles/Heading/Heading.scss";

interface HeadingProps {
  breadcrumb: LinkProps[];
  title: string;
  isSearch?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, breadcrumb, isSearch }) => {
  return (
    <section className="heading">
      <Container>
        <div className="heading__content">
          <HeadingBreadcrumb breadcrumb={breadcrumb} />
          <HeadingTitle title={title} isSearch={isSearch} />
        </div>
      </Container>

      <Image
        className="heading__image"
        src="/other-simbolo.png"
        width={167}
        height={200}
        alt="Simbolo do ensino fleury"
      />
    </section>
  );
};

const HeadingTitle = ({
  title,
  isSearch,
}: {
  title: string;
  isSearch?: boolean;
}) => {
  return (
    <h1 className="heading__title">
      {isSearch && <LiaSearchSolid />}
      {title}
    </h1>
  );
};

const HeadingBreadcrumb = ({ breadcrumb }: { breadcrumb: LinkProps[] }) => {
  return (
    <nav className="heading__breadcrumb">
      <ul className="heading__breadcrumb__list">
        {breadcrumb.map((item: LinkProps) => (
          <li className="heading__breadcrumb__item" key={item.label}>
            <a className="heading__breadcrumb__link" href={item.href}>
              {item.label}
            </a>
            <span>/</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Heading;
