import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// data
const serviceData = [
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/1.webp?updatedAt=1712673512701",
    description:
      "BEYOND THE GREEN LABEL EVALUATING THE PROPOSED GREEN BOND FRAMEWORK VIS-À-VIS GREENWASHING IN INDIA",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/BEYOND%20THE%20GREEN%20LABEL%20EVALUATING%20THE%20PROPOSED%20GREEN%20BOND%20FRAMEWORK%20VIS-%C3%80-VIS%20GREENWASHING%20IN%20INDIA.pdf?updatedAt=1712672450134",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/2.webp?updatedAt=1712673512561",
    description:
      "THE DOCTRINE OF PUBLIC POLICY BACKDOOR STRATEGY TO REVIEW FOREIGN ARBITRAL AWARD OR NECESSARY EVIL",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/The%20Doctrine%20of%20Public%20Policy%20Backdoor%20Strategy%20to%20review%20Foreign%20Arbitral%20Award%20or%20Necessary%20Evil.pdf?updatedAt=1712672449949",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/3.webp?updatedAt=1712673512345",
    description:
      "BPO SERVICE PROVIDER NOT BE CONSIDERED AS AN “INTERMEDIARY” FOR THE PURPOSES OF IGST ACT",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/BPO%20SERVICE%20PROVIDER%20NOT%20BE%20CONSIDERED%20AS%20AN%20_INTERMEDIARY_%20FOR%20THE%20PURPOSES%20OF%20IGST%20ACT.pdf?updatedAt=1712672450017",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/4.webp?updatedAt=1712673512669",
    description:
      "AN ASSESSMENT OF THE LIABILITY OF PAYMENT AGGREGATORS IN INDIA UNDER THE RBI GUIDELINES",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/An%20Assessment%20of%20the%20Liability%20of%20Payment%20Aggregators%20in%20India%20Under%20the%20RBI%20Guidelines.pdf?updatedAt=1712672449836",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/8.webp?updatedAt=1712673512413",
    description:
      "CRIMINAL LIABILITY GETS STRINGENT IN COPYRIGHT VIOLATION CASES",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/Criminal%20liability%20gets%20stringent%20in%20copyright%20violation%20cases.pdf?updatedAt=1712672449971",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/5.webp?updatedAt=1712673512369",
    description:
      "DEMYSTIFYING SHADOW BANKS AS A SUBSTITUTE TO THE BANKING SECTOR: A CRITICAL STUDY",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/Demystifying%20shadow%20Banks%20as%20a%20Substitute%20to%20the%20banking%20sector%20A%20critical%20study.pdf?updatedAt=1712672450133",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/6.webp?updatedAt=1712673512392",
    description:
      "PARITY OBLIGATIONS IN THE ONLINE HOTEL BOOKING INDUSTRY- CRITICALLY ANALYSING CCI'S ORDER AGAINST MMT",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/Parity%20Obligations%20in%20the%20Online%20Hotel%20Booking%20Industry%20-%20Critically%20Analyzing%20CCI's%20order%20against%20MMT-Go.pdf?updatedAt=1712672449884",
  },
  {
    path: "https://ik.imagekit.io/ctrcr/Images/Issues/6.webp?updatedAt=1712673512392",
    description:
      "PRE-PAID INSTRUMENTS A COMPARATIVE ANALYSIS BETWEEN INDIA AND THE UNITED ARAB EMIRATES ",
    link: "https://ik.imagekit.io/ctrcr/PDF/issues/PRE-PAID%20INSTRUMENTS%20A%20COMPARATIVE%20ANALYSIS%20BETWEEN%20INDIA%20AND%20THE%20UNITED%20ARAB%20EMIRATES.pdf?updatedAt=1712672450188",
  },
];

const ServiceSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

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
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-full rounded-lg px-6 py-4 flex flex-col gap-x-6 sm:gap-x-0 cursor-pointer transition-all duration-300">
            <Image
              src={item.path}
              width={400}
              height={400}
              alt=""
              className="border-1 border-black"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="leading-normal text-black text-lg font-bold my-4">
                {item.description}
              </p>
              <Link href={item.link} target="_blank">
                <div
                  className={`text-black hover:text-white border border-black hover:bg-black p-2 rounded-md mt-2 h-8 w-32 flex items-center justify-center`}
                >
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
