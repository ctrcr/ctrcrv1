// pages/blogs/new.js

import React from "react";
import BlogEditor from "@/components/Blogs/BlogEditor";
import { useRouter } from "next/router";

const NewBlog = () => {
  const router = useRouter();

  const handleSave = () => {
    router.push("/admin/blogs");
  };

  return (
    <div className="container h-screen mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      <BlogEditor onSave={handleSave} />
    </div>
  );
};

export default NewBlog;
