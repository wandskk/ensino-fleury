import BlogSection from "@/components/Blog/BlogSection";
import BlogPost from "@/components/BlogPost/BlogPost";

import { blogPost } from "@/resouces/utils/blogPost/blogPost";

interface PageProps {
  params: { slug: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { banner, breadcrumb, content, tagsList, highlights, similars } =
    blogPost;

  return null;

  // return (
  //   <BlogSection>
  //     <BlogPost
  //       banner={banner}
  //       breadcrumb={breadcrumb}
  //       content={content}
  //       tagsList={tagsList}
  //       highlights={highlights}
  //       similars={similars}
  //     />
  //   </BlogSection>
  // );
};

export default Page;
