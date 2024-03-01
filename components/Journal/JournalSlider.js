import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// data
const serviceData = [
  {
    path: "/Frame1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    path: "/Frame2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    path: "/Frame3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    path: "/Frame3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    path: "/Frame2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    path: "/Frame1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth <= 767 ? 1 : 3;
      setSlidesPerView(newSlidesPerView);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Swiper
      slidesPerView={slidesPerView}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 20,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="h-[400px] sm:h-[350px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-full rounded-lg px-6 py-4 flex sm:flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300">
            {/* image */}
            <Image src={item.path} width={750} height={470} alt="" />
            {/* description */}
            <div className="flex flex-col justify-center items-center">
              <p className="leading-normal text-black">
                {showFullDescription
                  ? item.description
                  : `${item.description.slice(0, 100)}...`}
              </p>
              {/* Toggle button for description */}
              <button
                className={`text-black hover:text-white border border-black hover:bg-black p-2 rounded-md mt-2 h-8 w-32 flex items-center justify-center`}
                onClick={toggleDescription}
              >
                <span className="text-sm">
                  {showFullDescription ? "Read Less" : "Read More"}
                </span>
              </button>
              {/* Download button */}
              <button
                className={`text-white hover:text-black border border-black bg-black hover:bg-white p-2 rounded-md mt-2 h-8 w-32 flex items-center justify-center`}
                style={{ fontSize: "1rem" }}
              >
                <span className="text-sm">Download</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
