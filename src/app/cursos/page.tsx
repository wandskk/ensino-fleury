import React from "react";
import Heading from "@/components/Heading/Heading";
import Courses from "@/components/Courses/Courses";

import { coursesData } from "@/resouces/utils/courses/coursesData";
import { CoursesServices } from "@/services/modules/courses";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await CoursesServices.getCoursesSeo();
  const { title, description, ogTitle, ogDescription } = data.seo;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ["/og-image.png"],
    },
  };
}

const Page = async () => {
  const coursesModality = await CoursesServices.getModality();
  const coursesAreas = await CoursesServices.getAreas();
  const coursesSeo = await CoursesServices.getCoursesSeo();

  const { titulo: title } = coursesSeo;

  const { breadcrumb } = coursesData;

  return (
    <>
      <Heading title={title} breadcrumb={breadcrumb} />
      <Courses courseformats={coursesModality} knowledgeAreas={coursesAreas} />
    </>
  );
};

export default Page;
