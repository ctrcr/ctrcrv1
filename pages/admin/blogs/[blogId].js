import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/public/ctrcr_pfp.png";
import loader from "@/public/loader.svg";
import withAuth from "@/components/Auth/withAuth";

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

  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Image src={loader} alt="Loading..." width={200} height={200} />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="container min-h-screen  mx-auto mt-12 px-4 py-8">
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
        <h1 className="text-2xl font-bold my-4">Preview Blog</h1>
        <h1 className="text-red-500 text-3xl">
          <strong>⚠</strong>ADMIN PAGE<strong>⚠</strong>
        </h1>
        <span className="flex items-center gap-1 my-2 cursor-pointer">
          <a
            href="/admin/blogs"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Back
          </a>
        </span>
      </div>
      {blog ? (
        <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden p-4">
          <h1 className="text-5xl text-center font-bold mb-4">{blog.title}</h1>
          {/* <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover mb-4"
          /> */}
          {/* <p className="text-gray-600 mb-4">{blog.description}</p> */}
          <p className="text-gray-500 mr-8 text-right text-xl">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="prose"
          ></div>
        </div>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default withAuth(BlogDetailPage);
