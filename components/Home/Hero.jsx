import React from "react";
import backgroundImage from "../../public/home_background.svg";
import JournalSlider from "./Carousal/HomeSlider";
import ContactForm from "./Form/ContactForm";
import Content from "./HeroContent/Content";

const Hero = () => {
  return (
    <>
      <section className="hero bg-cover bg-center overflow-hidden flex items-center justify-center text-white text-2xl">
        <div
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
          className="h-screen w-screen bg-cover bg-center flex items-center justify-center bg-no-repeat text-white text-2xl"
        >
          <Content />
        </div>
      </section>
      <section className="bg-white ">
        <section className="flex flex-col items-center justify-center text-white text-2xl">
          <div className="-mt-3">
            <img
              src="landing1.svg"
              alt="Latest Events"
              className="sm:block hidden"
            />
            <h1 className="text-center max-sm:block hidden text-4xl text-black font-bold mt-8 mb-6">
              Latest Events
            </h1>
          </div>

          <div className="sm:mt-[4rem] w-[100vw] overflow-hidden ">
            <JournalSlider />
          </div>

          <div className="text-black flex flex-col justify-center items-center text-center w-[60vw] mt-7">
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
              lorem, random text, dummy text
            </p>
            <p className="mt-5 lg:text-2xl md:text-xl sm:text-lg text-base">
              lorem, random text, dummy text, lorem, random text, dummy text
              lorem, random text, dummy text lorem, random text, dummy text
              lorem, random text, dummy text lorem, random text, dummy text
            </p>
          </div>
        </section>
        <section className=" flex items-center justify-center text-white text-2xl max-lg:min-h-[65vh]">
          <div className=" w-[80vw] flex overflow-hidden  items-center justify-center">
            <img
              src="boxframehorizontal.svg"
              className="h-full hidden xl:block"
            />
            <div className="h-screen xl:h-0"></div>

            <div className="text-black overflow-hidden absolute flex gap-[5vw]">
              <ContactForm />

              <div className="hidden lg:block">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.738987415271!2d72.91266857520641!3d19.11910318209439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ee945fd769%3A0x9d653864cdd43e39!2sMaharashtra%20National%20Law%20University%20Mumbai!5e0!3m2!1sen!2sin!4v1709800789414!5m2!1sen!2sin"
                  width="400"
                  height="500"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
