import React from "react";
import backgroundImage from "../../public/home_background.svg";
import JournalSlider from "./Carousal/HomeSlider";
import ContactForm from "./Form/Contact";

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
            <div className="text-black absolute ">
              <ContactForm />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
