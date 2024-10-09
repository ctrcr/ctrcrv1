import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const BlogDetailPage = () => {
  const router = useRouter();
  const { blogId } = router.query; // Get blogId from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) return; // Don't fetch until blogId is available

      try {
        const response = await axios.get(`/api/v1/blogs/${blogId}`);
        setBlog(response.data.data);
        console.log(response.data.data.content);
      } catch (err) {
        setError("Error fetching blog details");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover mb-4"
          />
          <p className="text-gray-600 mb-4">{blog.description}</p>
          <p className="text-gray-500 mb-4">
            By {blog.author} on {new Date(blog.date).toLocaleDateString()}
          </p>
          {/* Render rich text content */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="prose" // Optional: Tailwind CSS class for better formatting
          ></div>
        </>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetailPage;
