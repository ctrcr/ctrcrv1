// pages/admin/blogs/edit.js

import React from "react";
import EditBlog from "@/components/Blogs/EditBlog";
import { useRouter } from "next/router";

const EditBlogPage = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const handleSave = () => {
    router.push("/admin/blogs");
  };

  return (
    <div className="container h-screen mx-auto p-4 mt-12 min-h-screen">
      <h1 className="text-2xl font-bold my-4">Edit Blog</h1>
      <EditBlog blogId={blogId} onSave={handleSave} />
    </div>
  );
};

export default EditBlogPage;
