import React from "react";
import BlogFirstSection from "@/components/Blog/BlogFirstSection";

import { blogSectionsData } from "@/resouces/utils/blog/blogSectionsData";
import BlogSecondSection from "@/components/Blog/BlogSecondSection";
import BlogThirdSection from "@/components/Blog/BlogThirdSection";

export default async function Blog() {
  const { firstSection, secondSection, thirdSection } = blogSectionsData;

  return (
    <>
      <BlogFirstSection
        title={firstSection.title}
        description={firstSection.description}
        backgroundImage={firstSection.backgroundImage}
      />
      <BlogSecondSection
        title={secondSection.title}
        blogPosts={secondSection.blogPosts}
      />
      <BlogThirdSection
        title={thirdSection.title}
        subtitle={thirdSection.subtitle}
        blogPosts={thirdSection.blogPosts}
      />
    </>
  );
}
