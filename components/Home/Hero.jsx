import React from "react";
import backgroundImage from "../../public/home_background.svg";

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
      <section className="flex items-center justify-center text-white text-2xl">
        <div className="-mt-3">
          <img src="landing1.svg" />
        </div>
      </section>
    </>
  );
};

export default Hero;
