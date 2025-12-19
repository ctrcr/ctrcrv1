import React from "react";
import EditBlog from "@/components/Blogs/EditBlog";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/public/blog_logo.png";
import withAuth from "@/components/Auth/withAuth";

const EditBlogPage = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const handleSave = () => {
    router.push("/admin/blogs");
  };

  return (
    <div className="container min-h-screen mx-auto p-4 mt-12">
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
          <Image src={logo} alt="Blogs" width={150} height={150} />
        </div>
      </div>
      <hr className="h-1 bg-black" />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-4">Edit Blog</h1>
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
      </div>{" "}
      <EditBlog blogId={blogId} onSave={handleSave} />
    </div>
  );
};

export default withAuth(EditBlogPage);
