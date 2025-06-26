import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const CompetitionPhotos = () => {
  const competitionPhotos = [
    {
      path: "https://ik.imagekit.io/ctrcr/Images/NCCCC/1.JPG?updatedAt=1750956285639",
    },
    {
      path: "https://ik.imagekit.io/ctrcr/Images/NCCCC/2.JPG?updatedAt=1750956285666",
    },
    {
      path: "https://ik.imagekit.io/ctrcr/Images/NCCCC/3.JPG?updatedAt=1750956285654",
    },
    {
      path: "https://ik.imagekit.io/ctrcr/Images/NCCCC/4.JPG?updatedAt=1750956285624",
    },
    {
      path: "https://ik.imagekit.io/ctrcr/Images/NCCCC/5.JPG?updatedAt=1750956285661",
    },
  ];

  // Carousel state management
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [imagesLoaded, setImagesLoaded] = useState(
    competitionPhotos.map(() => false)
  );

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth <= 767 ? 1 : 2;
      setSlidesPerView(newSlidesPerView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageLoad = (index) => {
    setImagesLoaded((prevState) => {
      const updatedImagesLoaded = [...prevState];
      updatedImagesLoaded[index] = true;
      return updatedImagesLoaded;
    });
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Competition Photos
      </h2>
      <div className="px-4">
        <Swiper
          slidesPerView={slidesPerView}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 20,
            depth: -120,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, EffectCoverflow]}
          className="competition-photos-carousel"
        >
          {competitionPhotos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg flex p-2 flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300">
                {!imagesLoaded[index] && (
                  <div className="flex justify-center items-center">
                    <p className="text-black">Loading Image...</p>
                  </div>
                )}
                <Image
                  src={item.path}
                  alt="Competition Event Photos"
                  className="object-cover"
                  height={2000}
                  width={4000}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompetitionPhotos; 