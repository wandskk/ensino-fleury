import React from "react";

import "@/styles/About/AboutContent.scss";

interface AboutContentProps {
  content: {
    banner: string;
    title: string;
    subtitle: string;
    paragraphs: string;
  };
}

const AboutContent: React.FC<AboutContentProps> = ({ content }) => {
  return (
    <div className="aboutContent">
      <div className="aboutContent__header">
        <h2 className="aboutContent__title">{content.title}</h2>
        <p className="aboutContent__subtitle">{content.subtitle}</p>
      </div>
      <div className="aboutContent__image">
        <img width={100} height={100} src={content.banner} alt="About banner" />
      </div>

      <div
        className="aboutContent__content"
        dangerouslySetInnerHTML={{ __html: content.paragraphs }}
      ></div>
    </div>
  );
};

export default AboutContent;
