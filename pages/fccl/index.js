import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import loader from "@/public/loader.svg";
import logo from "@/public/blog_logo.png";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/v1/blogs");

        const approvedBlogs = response.data.data
          .filter((blog) => blog.approved)
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

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(query) ||
      blog.author.toLowerCase().includes(query)
    );
  });

  if (error) return <p className="text-center">{error}</p>;

  return (
    <>
      <Head>
        <title>FCCL Blog - Forum for Commercial and Corporate Laws | CTRCR</title>
        <meta
          name="description"
          content="Explore the latest insights on corporate law, commercial regulations, and legal research from the Forum for Commercial and Corporate Laws at CTRCR, Mumbai National Law University."
        />
        <meta
          name="keywords"
          content="corporate law blog, commercial law, legal research, CTRCR, MNLU Mumbai, corporate governance, trade law, regulatory compliance"
        />
        <link rel="canonical" href="https://www.ctrcr.com/fccl" />

        {/* Open Graph */}
        <meta property="og:title" content="FCCL Blog - Forum for Commercial and Corporate Laws | CTRCR" />
        <meta property="og:description" content="Explore the latest insights on corporate law, commercial regulations, and legal research from the Forum for Commercial and Corporate Laws." />
        <meta property="og:url" content="https://www.ctrcr.com/fccl" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/blog_logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FCCL Blog - Forum for Commercial and Corporate Laws | CTRCR" />
        <meta name="twitter:description" content="Explore the latest insights on corporate law, commercial regulations, and legal research." />

        {/* Structured Data for Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Forum for Commercial and Corporate Laws",
              "description": "Legal research and insights on corporate law and commercial regulations",
              "url": "https://www.ctrcr.com/fccl",
              "publisher": {
                "@type": "Organization",
                "name": "CTRCR - Center for Training and Research in Commercial Regulations",
                "logo": "https://www.ctrcr.com/ctrcr_logo.png"
              }
            })
          }}
        />
      </Head>

      <div className="container min-h-screen mx-auto mt-12 max-md:mt-12 px-4 py-8">
        <div className="flex justify-between items-center mb-6 max-md:flex-col-reverse ">
          <div className="flex justify-center items-center max-md:text-center">
            <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
              <hr className="w-24 max-md:hidden h-1 mb-2 bg-black" />
              <span className="text-5xl max-md:text-4xl font-bold ">
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
        <div className="text-3xl my-8 underline">Recent Blogs:</div>

        {/* Search Bar */}
        {!loading && blogs.length > 0 && (
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-2">
                Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center w-full h-screen">
            <Image src={loader} alt="Loading..." width={200} height={200} />
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center flex items-center justify-center max-md:min-h-96 min-h-screen text-4xl font-semibold my-4">
            More blogs coming soon
          </p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center flex items-center justify-center min-h-96 text-2xl font-semibold my-4">
            No blogs found matching "{searchQuery}"
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBlogs.slice(0, showAll ? filteredBlogs.length : 6).map((blog) => (
              <div
                key={blog.blogId}
                className="bg-gray-200 shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-lg p-2 h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-justify">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2">{blog.description}</p>
                  <div>
                    <p className="text-gray-500 mt-4">
                      By {blog.author} on{" "}
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 my-2 cursor-pointer">
                    <a
                      href={`/fccl/${blog.slug || blog.blogId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Read More
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {filteredBlogs.length > 6 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
        <h2 className="text-4xl max-md:text-3xl block max-xs:hidden overflow-hidden my-12  font-semibold mb-2 tracking-wide w-fit">
          <hr className="w-16 h-1 bg-black" />
          <span className="font-bold ">Call For Submissions</span>
          <div className={"flex justify-end  font-bold"}>
            <hr className="w-16  h-1 bg-black " />
          </div>
        </h2>
        <div className="hidden max-xs:block text-3xl text-center my-6 font-bold">
          Call For Submissions
        </div>
        <p className="text-justify text-lg my-4">
          The Centre for Training and Research in Commercial Regulations (CTRCR)
          at Maharashtra National Law University, Mumbai, is excited to announce
          the inauguration of the CTRCR Forum on Commercial & Corporate Laws
          (FCCL). Submissions are encouraged from students and professionals
          within the legal and financial sectors.
        </p>
        <div className="text-2xl my-6 font-bold">Submission Guidelines</div>
        <div className="">
          <ul className="list-disc list-inside text-lg max-md:px-4 px-8">
            <li>A maximum of two authors per submission is allowed.</li>
            <li>Simultaneous submission shall lead to a ban from publication on FCCL for a period of 6months.</li>
            <li>
              Manuscripts should be between 1500-2000 words (excluding citations).
            </li>
            <li>
              The body text must be in Times New Roman, Font Size 12 with 1.5 line
              spacing.
            </li>
            <li>All citations must be hyperlinked.</li>
            <li>
              Each submission will undergo plagiarism checks and a double-blind
              peer review.
            </li>
            <li>Works will be published on a rolling basis.</li>
            <li>
              Expected timeline for the review of the Blog: 14 Days from the date
              of submission.
            </li>
            <li>
              Already published blogs and blogs sent for consideration to other
              places will result in blacklisting of the author(s)
            </li>
          </ul>
          <p className="text-lg my-4 font-bold">
            We look forward to your contributions!
          </p>
        </div>
        <div className="text-2xl my-6 font-bold">Submission Link</div>
        <div className=" mt-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScw-XXWk8mYtm3dNl-Z570sinCMQoqYGgSv2_BoRgnm5YRFpg/viewform"
            target="_blank"
          >
            <button className="bg-black hover:bg-gray-700 text-white text-2xl font-bold py-2 px-4 rounded">
              Visit Link
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
