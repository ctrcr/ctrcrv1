import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import loader from "@/public/loader.svg";
import logo from "@/public/ctrcr_pfp.png";
import withAuth from "@/components/Auth/withAuth";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/v1/blogs");

        const approvedBlogs = response.data.data
          // .filter((blog) => blog.approved)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setBlogs(approvedBlogs);
      } catch (err) {
        setError("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">{error}</p>;

  return (
    <div className="container mx-auto mt-8 max-md:mt-12 px-4 py-8">
      <div className="flex justify-between items-center mb-6 max-md:flex-col-reverse ">
        <div className="flex justify-center items-center max-md:text-center">
          <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
            <hr className="w-24 max-md:hidden h-1 mb-2 bg-black" />
            <span className="text-5xl max-md:text-3xl italic font-bold ">
              Forum for Commercial and Corporate Laws
            </span>

            <div className={"flex justify-end  mt-2 font-bold"}>
              <hr className="w-24 h-1 max-md:hidden bg-black" />
            </div>
            <p className="text-lg mt-2 max-md:text-sm text-gray-600">
              Under the aegis of the Centre for Corporate and Commercial
              Regulations
            </p>
          </h2>
        </div>
        <div>
          <Image src={logo} alt="Blogs" width={150} height={150} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-4">All Blogs</h1>

        <h1 className="text-red-500 text-3xl">
          <strong>⚠</strong>ADMIN PAGE<strong>⚠</strong>
        </h1>
        <span className="flex items-center gap-1 my-2 cursor-pointer">
          <a
            href="/admin/blogs/new"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Blog
          </a>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="flex justify-center items-center w-full h-screen">
            <Image src={loader} alt="Loading..." width={200} height={200} />
          </div>
        ) : (
          blogs.slice(0, showAll ? blogs.length : 6).map((blog) => (
            <div
              key={blog.blogId}
              className="bg-gray-200 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 line-clamp-2">{blog.description}</p>
                <div>
                  {" "}
                  <p className="text-gray-500 mt-4">
                    By {blog.author} on{" "}
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="text-gray-500">
                  Approved: {blog.approved ? "Yes" : "No"}
                </div>
                <div className="text-gray-500">Blog ID: {blog.blogId}</div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1 my-2 cursor-pointer">
                    <a
                      href={`/admin/blogs/${blog.blogId}`}
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Preview
                    </a>
                  </span>
                  <span className="flex items-center gap-1 my-2 cursor-pointer">
                    <a
                      href={`/admin/blogs/edit?blogId=${blog.blogId}`}
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {blogs.length > 6 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default withAuth(BlogsPage);
