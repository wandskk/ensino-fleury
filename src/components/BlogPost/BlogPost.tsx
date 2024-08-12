import BlogSection from "@/components/Blog/BlogSection";
import BlogPostBanner from "@/components/BlogPost/BlogPostBanner";
import BlogPostBreadcrumb from "@/components/BlogPost/BlogPostBreadcrumb";
import BlogPostContent from "@/components/BlogPost/BlogPostContent";
import BlogPostSocials from "@/components/BlogPost/BlogPostSocials";
import BlogPostTags from "@/components/BlogPost/BlogPostTags";
import BlogPostUserInteresting from "@/components/BlogPost/BlogPostUserInteresting";
import BlogPostHighlights from "@/components/BlogPost/BlogPostHighlights";
import BlogPostSimilars from "@/components/BlogPost/BlogPostSimilars";

import { BlogPostCardProps } from "@/types/BlogPost/BlogPostCardProps.types";
import { BlogPostContentProps } from "@/types/BlogPost/BlogPostContentProps.types";
import { ImageProps } from "@/types/Image/ImageProps.types";
import { LinkProps } from "@/types/Link/LinkProps.types";

import "@/styles/BlogPost/BlogPost.scss";

interface BlogPostProps {
  banner: ImageProps;
  breadcrumb: LinkProps[];
  content: BlogPostContentProps;
  tagsList: LinkProps[];
  highlights: BlogPostCardProps[];
  similars: BlogPostCardProps[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  banner,
  breadcrumb,
  content,
  tagsList,
  highlights,
  similars,
}) => {
  return (
    <>
      {/* <BlogPostBanner src={banner.src} alt={banner.alt} /> */}
      <BlogPostBreadcrumb breadcrumbList={breadcrumb} />

      <div className="blogPost__main">
        <div className="blogPost__content">
          <BlogPostContent
            category={content.category}
            title={content.title}
            subtitle={content.subtitle}
            date={content.date}
            readTime={content.readTime}
            content={content.content}
            contentWithImage={content.contentWithImage}
          />

          <div className="blogPost__footer">
            <hr className="blogPost__hr" />

            <div className="blogPost__socialsAndTags">
              <BlogPostSocials />

              <BlogPostTags tagsList={tagsList} />
            </div>

            <BlogPostUserInteresting />
          </div>
        </div>
        <BlogPostHighlights blogPosts={highlights} />
      </div>

      <BlogPostSimilars blogPosts={similars} />
    </>
  );
};

export default BlogPost;
