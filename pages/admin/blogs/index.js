import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/v1/blogs");
        setBlogs(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto mt-8 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.blogId}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <p className="text-gray-500 text-sm mt-2">
                By {blog.author} on {new Date(blog.date).toLocaleDateString()}
              </p>
              <Link href={`/blogs/${blog.blogId}`}>Read More</Link>
              <div className="text-gray-500">
                Approved: {blog.approved ? "Yes" : "No"}
              </div>
              <div>Blog ID: {blog.blogId}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
