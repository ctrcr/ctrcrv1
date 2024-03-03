import React from "react";
import img from "@/public/vercel.svg";
import Link from "next/link";
import Image from "next/image";

export default function TeamLanding() {
  return (
    <div className="flex min-h-screen w-full lg:justify-between max-lg:flex-col-reverse max-md:justify-start max-lg:items-center md:gap-10 font-medium px-[4%] max-md:px-[6%]">
      {/* <span className="absolute top-0 left-0 bg-gradient-to-b from-[#06AED0] to-[#0819B5] hover:bg-[#21FCC7] h-80 w-72 opacity-60 z-0 rounded-br-full"></span> */}
      <div className="flex justify-center items-start flex-col gap-4 md:gap-10 lg:w-3/5 md:w-2/3 max-lg:h-[70vh] max-md:h-[75vh] z-10">
        <h2 className="text-4xl tracking-wider font-semibold lineUp max-md:px-4">
          What do we do?
        </h2>

        <p className="text-justify font-normal">
          What do we do? consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        </p>

        <Link href="/" className="max-lg:justify-end w-full flex">
          <button className="tracking-widest h-14 w-48 md:w-60 font-normal rounded-md uppercase border-2 border-black sm:mt-10">
            Read More
          </button>
        </Link>
      </div>
      <div className="flex justify-center flex-col items-center max-md:px-4 lg:w-2/5 md:w-1/3 max-lg:h-[30vh] max-md:h-[25vh] z-10">
        <Image
          src={img}
          height={400}
          width={400}
          className="max-md:w-2/3 max-md:h-2/3 mb-6 text-white bg-white"
        />
      </div>

      {/* <span className="absolute bottom-0 right-0 bg-gradient-to-b from-[#06AED0] to-[#0819B5] hover:bg-[#21FCC7] h-80 w-72 opacity-60 z-0 rounded-tl-full"></span> */}
    </div>
  );
}
