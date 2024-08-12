import Heading from "@/components/Heading/Heading";
import React from "react";

import { aboutData } from "@/resouces/utils/about/aboutData";
import About from "@/components/About/About";

const AboutPage = () => {
  const { title, breadcrumb, navContent } = aboutData;
  return (
    <>
      <Heading title={title} breadcrumb={breadcrumb} />
      <About aboutNav={navContent} />
    </>
  );
};

export default AboutPage;
