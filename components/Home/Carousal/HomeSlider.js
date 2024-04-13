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
    path: "https://ik.imagekit.io/ctrcr/Images/Home/1.jpg?updatedAt=1712915002248",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/2.jpg?updatedAt=1712915002342",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/3.jpg?updatedAt=1712915002175",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/4.jpeg?updatedAt=1712915002162",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/5.jpg?updatedAt=1712915002273",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/6.jpg?updatedAt=1712915002231",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/7.jpg?updatedAt=1712915002345",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/8.jpg?updatedAt=1712915002335",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/9.jpg?updatedAt=1712915002166",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/10.jpeg?updatedAt=1712915002335",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/11.jpeg?updatedAt=1712915005259",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Home/12.jpeg?updatedAt=1712915004920",
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
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, EffectCoverflow]}
      // className="h-[30vh] sm:h-auto"
      className=""
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className=" rounded-lg flex flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300">
            <Image
              src={item.path}
              // layout="fill"
              alt="Latest Events Images"
              className="object-cover "
              height={1300}
              width={1000}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
