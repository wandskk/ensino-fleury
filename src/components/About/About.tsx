"use client";

import React from "react";
import Container from "@/components/Container/Container";
import NavContent from "@/components/NavContent/NavContent";
import AboutContent from "@/components/About/AboutContent";

import "@/styles/About/About.scss";

interface AboutProps {
  aboutNav: {
    title: string;
    content: {
      banner: string;
      title: string;
      subtitle: string;
      paragraphs: string;
    };
  }[];
}

const About: React.FC<AboutProps> = ({ aboutNav }) => {
  const [navSelected, setNavSelected] = React.useState(0);

  const aboutNavSimplified =
    aboutNav &&
    aboutNav.map((navItem) => ({
      title: navItem.title,
    }));

  const handleSelectNav = (index: number) => setNavSelected(index);

  return (
    <>
      <section className="about">
        <Container>
          <div className="about__main">
            <div className="about__nav">
              {/* <NavContent
                nav={aboutNavSimplified}
                selected={navSelected}
                onChange={handleSelectNav}
              /> */}
            </div>
            <div className="about__content">
              <AboutContent content={aboutNav[navSelected].content} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
