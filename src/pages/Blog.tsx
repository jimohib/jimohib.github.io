import React from "react";
import SEO from '@/components/SEO';
import BlogPage from "@/components/BlogPage";

const Blog: React.FC = () => {
  return (
    <>
      <SEO title="Blog" />
      <BlogPage />
    </>
  );
};

export default Blog;
