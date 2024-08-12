import BlogNav from "@/components/Blog/BlogNav";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogNav />
      {children}
    </>
  );
}
