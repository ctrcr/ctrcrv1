import React from "react";
import backgroundImage from "../../public/home_background.svg";
import JournalSlider from "./Carousal/HomeSlider";
import ContactForm from "./Form/ContactForm";

const Hero = () => {
  return (
    <>
      <section className="hero bg-cover bg-center h-screen flex items-center justify-center text-white text-2xl">
        <div
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
          className="h-screen w-screen bg-cover bg-center flex items-center justify-center bg-no-repeat text-white text-2xl"
        >
          <h1 className="text-[32px] text-white">Welcome to Ctrcr!</h1>
        </div>
      </section>
      <section className="bg-white h-[200vh]">
        <section className="flex flex-col items-center justify-center text-white text-2xl">
          <div className="-mt-3">
            <img src="landing1.svg" />
          </div>

          <div className="mt-[4rem] w-[100vw]">
            <JournalSlider />
          </div>

          <div className="text-black flex flex-col justify-center items-center text-center w-[60vw] mt-7">
            <p className="text-4xl">lorem, random text, dummy text</p>
            <p className="mt-5">
              lorem, random text, dummy text, lorem, random text, dummy text
              lorem, random text, dummy text lorem, random text, dummy text
              lorem, random text, dummy text lorem, random text, dummy text
            </p>
          </div>
        </section>
        <section className=" flex items-center justify-center text-white text-2xl">
          <div className=" w-[80vw] flex items-center justify-center">
            <img src="boxframehorizontal.svg" className="" />
            <div className="text-black absolute flex items-center justify-center gap-[5vw]">
              <ContactForm />

              <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.738987415271!2d72.91266857520641!3d19.11910318209439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ee945fd769%3A0x9d653864cdd43e39!2sMaharashtra%20National%20Law%20University%20Mumbai!5e0!3m2!1sen!2sin!4v1709800789414!5m2!1sen!2sin"
                  width="450"
                  height="600"
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
