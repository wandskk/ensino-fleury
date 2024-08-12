import React from "react";
import Course from "@/components/Course/Course";
import Heading from "@/components/Heading/Heading";

import { courseData } from "@/resouces/utils/course/courseData";
import { CoursesServices } from "@/services/modules/courses";

interface PageProps {
  params: { slug: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const data = await CoursesServices.getCourseBySlug(params.slug);
  const resultData = data.data[0];
  const { titulo } = resultData;

  const { breadcrumb } = courseData;
  return (
    <>
      <Heading title={titulo} breadcrumb={breadcrumb} />
      <Course courseData={resultData} />
    </>
  );
};

export default Page;
