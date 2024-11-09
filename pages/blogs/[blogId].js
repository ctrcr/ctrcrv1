import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/public/blog_logo.png";
import loader from "@/public/loader.svg";

const BlogDetailPage = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) return;

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

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hdden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedImage]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Image src={loader} alt="Loading..." width={200} height={200} />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto mt-12 px-4 py-8">
      <div className="flex justify-between items-center mb-6 max-md:flex-col-reverse ">
        <div className="flex justify-center items-center max-md:text-center">
          <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
            <hr className="w-24 max-md:hidden h-1 mb-2 bg-black" />
            <span className="text-5xl max-md:text-3xl font-bold ">
              Forum for Commercial and Corporate Laws
            </span>

            <div className={"flex justify-end  mt-2 font-bold"}>
              <hr className="w-24 h-1 max-md:hidden bg-black" />
            </div>
            <p className="text-lg mt-2 max-md:text-sm text-gray-600">
              Under the aegis of the Centre for Training and Research in
              Commercial Regulations
            </p>
          </h2>
        </div>
        <div>
          <Image src={logo} alt="Blogs" width={200} height={200} />
        </div>
      </div>
      {blog ? (
        <div className="bg-gray-200 shadow-lg rounded-lg border-2 border-black overflow-hidden p-4">
          <h1 className="text-4xl max-md:text-3xl text-center font-bold mb-4">
            {blog.title}
          </h1>
          <hr className="h-1 mb-2 bg-black" />
          <p className="text-gray-500 mr-8 max-md:mr-0 text-right max-md:text-center text-xl">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-500 mr-8 max-md:mr-0 text-right text-xl max-md:text-center mb-4">
            By: {blog.author}
          </p>
          <hr className="h-1 mb-2 bg-black" />
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="prose max-w-full mx-auto [&_img]:w-full [&_img]:max-w-full [&_img]:h-auto"
            onClick={(e) => {
              if (e.target.tagName === "IMG") {
                handleImageClick(e.target.src);
              }
            }}
          ></div>
        </div>
      ) : (
        <p>Blog not found</p>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseZoom}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <button
              onClick={handleCloseZoom}
              className="absolute top-4 right-4 text-white text-xl font-bold p-2"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetailPage;
