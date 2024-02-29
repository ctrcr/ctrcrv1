import React from "react";
import backgroundImage from "../../public/home_background.svg";

const Hero = () => {
  return (
    <>
      <section className="hero bg-cover bg-center h-screen flex items-center justify-center text-white text-2xl">
        {/* <div
          style={{
            // use the src property of the image object
            backgroundImage: `url(${backgroundImage.src})`,
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: 50, color: "white" }}>Welcome to Ctrcr!</h1>
          
        </div> */}

        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="h-screen w-screen bg-cover bg-center flex items-center justify-center text-white text-2xl"
        >
          <h1 classname="text-[32px] text-white">Welcome to Ctrcr!</h1>
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
