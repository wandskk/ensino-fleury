import React from "react";
import Heading from "@/components/Heading/Heading";
import Search from "@/components/Search/Search";

import { searchData } from "@/resouces/utils/search/searchData";
import { slugify } from "@/resouces/helpers/slug/slugify";

interface SearchPageProps {
  params: { slug: string };
}

const SearchPage: React.FC<SearchPageProps> = ({ params }) => {
  const { breadcrumb, results } = searchData;
  const { slug } = params;
  const title = slugify(slug, false);

  return (
    <>
      <Heading title={title} breadcrumb={breadcrumb} isSearch />
      <Search data={results} />
    </>
  );
};

export default SearchPage;
