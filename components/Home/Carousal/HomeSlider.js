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
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
  {
    path: "/home_background.svg",
  },
];

const ServiceSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth <= 767 ? 1 : 6;
      setSlidesPerView(newSlidesPerView);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 20,
        // stretch: 10,
        depth: -120,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="h-[30vh] sm:h-auto"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-full rounded-lg flex flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300 ">
            <Image src={item.path} width={475} height={525} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
