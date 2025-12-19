import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import logo from "@/public/blog_logo.png";
import loader from "@/public/loader.svg";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/utils/seoHelpers";

const BlogDetailPage = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [showVoiceSelector, setShowVoiceSelector] = useState(false);

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

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      // Filter for English voices only
      const englishVoices = availableVoices.filter(voice =>
        voice.lang.startsWith('en')
      );
      setVoices(englishVoices);

      // Auto-select a high-quality voice if none selected
      if (!selectedVoice && englishVoices.length > 0) {
        const premiumVoice = englishVoices.find(voice =>
          voice.name.includes('Google') ||
          voice.name.includes('Natural') ||
          voice.name.includes('Premium') ||
          voice.name.includes('Enhanced') ||
          voice.name.includes('Samantha') ||
          voice.name.includes('Daniel') ||
          voice.name.includes('Karen') ||
          voice.name.includes('Microsoft Zira') ||
          voice.name.includes('Microsoft David')
        );
        setSelectedVoice(premiumVoice || englishVoices[0]);
      }
    };

    loadVoices();

    // Some browsers load voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  // Text-to-Speech functionality
  const stripHtmlTags = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const handleTextToSpeech = () => {
    if (!blog) return;
    // Check if browser supports Speech Synthesis
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser does not support text-to-speech.');
      return;
    }

    const synthesis = window.speechSynthesis;

    if (isSpeaking && !isPaused) {
      // Pause speech
      synthesis.pause();
      setIsPaused(true);
    } else if (isSpeaking && isPaused) {
      // Resume speech
      synthesis.resume();
      setIsPaused(false);
    } else {
      // Start new speech
      // Extract text from HTML content
      const textContent = stripHtmlTags(blog.content);
      const fullText = `${blog.title}. By ${blog.author}. ${textContent}`;

      const utterance = new SpeechSynthesisUtterance(fullText);

      // Configure speech settings for more natural sound
      utterance.rate = 1.2; // Slightly slower for better clarity
      utterance.pitch = 1.0; // Natural pitch
      utterance.volume = 1.0; // Full volume

      // Use the selected voice
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      utterance.onerror = (event) => {
        console.error('Speech error:', event);
        setIsSpeaking(false);
        setIsPaused(false);
      };

      synthesis.speak(utterance);
    }
  };

  const handleStopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setIsPaused(false);
  };

  // Cleanup speech on component unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Image src={loader} alt="Loading..." width={200} height={200} />
      </div>
    );
  if (error) return <p>{error}</p>;

  if (!blog) return <p>Blog not found</p>;

  // Generate SEO data
  const pageTitle = blog.metaTitle || `${blog.title} | CTRCR - FCCL Blog`;
  const pageDescription = blog.metaDescription || blog.description;
  const pageUrl = `https://www.ctrcr.com/fccl/${blog.slug || blog.blogId}`;
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.ctrcr.com' },
    { name: 'FCCL Blog', url: 'https://www.ctrcr.com/fccl' },
    { name: blog.title, url: pageUrl }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={blog.keywords?.join(', ') || 'corporate law, commercial law, legal research'} />
        <meta name="author" content={blog.author} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={blog.featuredImage || blog.image} />
        <meta property="og:site_name" content="CTRCR - Center for Training and Research in Commercial Regulations" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={blog.featuredImage || blog.image} />

        {/* Article specific meta tags */}
        <meta property="article:published_time" content={new Date(blog.date).toISOString()} />
        <meta property="article:author" content={blog.author} />
        <meta property="article:section" content={blog.category || 'Corporate Law'} />
        {blog.keywords?.map(keyword => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleSchema(blog))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs))
          }}
        />
      </Head>

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

          {/* Text-to-Speech Controls */}
          <div className="flex justify-end items-center gap-2 my-4 flex-wrap">
            {/* Voice Selector */}
            <div className="relative">
              <button
                onClick={() => setShowVoiceSelector(!showVoiceSelector)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-md text-sm font-medium transition-all"
                title="Select voice"
              >
                <span className="text-base">🎤</span>
                <span className="max-w-[150px] truncate">
                  {selectedVoice ? selectedVoice.name : 'Select Voice'}
                </span>
                <span className="text-xs">▼</span>
              </button>

              {showVoiceSelector && (
                <div className="absolute right-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {voices.length === 0 ? (
                    <div className="px-3 py-2 text-sm text-gray-500">Loading voices...</div>
                  ) : (
                    voices.map((voice, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedVoice(voice);
                          setShowVoiceSelector(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${selectedVoice?.name === voice.name ? 'bg-gray-200 font-semibold' : ''
                          }`}
                      >
                        <div className="font-medium">{voice.name}</div>
                        <div className="text-xs text-gray-500">
                          {voice.lang} {voice.localService ? '(Local)' : '(Online)'}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            <button
              onClick={handleTextToSpeech}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${isSpeaking && !isPaused
                ? 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                }`}
              title={isSpeaking && !isPaused ? 'Pause reading' : isPaused ? 'Resume reading' : 'Listen to article'}
            >
              {isSpeaking && !isPaused ? (
                <>
                  <span className="text-base">⏸</span>
                  <span>Pause</span>
                </>
              ) : isPaused ? (
                <>
                  <span className="text-base">▶️</span>
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <span className="text-base">🔊</span>
                  <span>Listen</span>
                </>
              )}
            </button>

            {isSpeaking && (
              <button
                onClick={handleStopSpeech}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-md text-sm font-medium transition-all"
                title="Stop reading"
              >
                <span className="text-base">⏹</span>
                <span>Stop</span>
              </button>
            )}
          </div>

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
    </>
  );
};

export default BlogDetailPage;
