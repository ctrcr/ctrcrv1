import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

import { journalArticles } from "@/data/journalData";

const ServiceSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 767 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 6500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      className="h-[400px] sm:h-[350px]"
    >
      {journalArticles.map((article) => (
        <SwiperSlide key={article.id}>
          <div className="h-full rounded-lg px-6 py-4 flex flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300">
            <Image
              src={article.cover}
              width={400}
              height={400}
              alt={article.title}
              className="border-1 border-black"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="leading-normal text-black text-lg font-bold my-4">
                {article.title}
              </p>
              <Link href={article.pdf} target="_blank">
                <div className="text-black hover:text-white border border-black hover:bg-black p-2 rounded-md mt-2 h-8 w-32 flex items-center justify-center">
                  <span className="text-sm">Read More</span>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
