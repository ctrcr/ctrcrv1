import React from "react";
import mnlu from "@/public/mnlu_logo.png";
import ctrcr from "@/public/ctrcr_logo.png";
import Image from "next/image";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black max-sm:px-8 sm:w-[65vw] gap-4 sm:gap-10 max-md:-mt-8 lg:text-2xl md:text-xl sm:text-lg text-base">
      <div className="flex flex-col items-center text-center justify-center gap-3">
        <div className="flex items-center gap-40 max-md:gap-24 mb-4">
          <Image src={mnlu} alt="MNLU" width={70} />
          <Image src={ctrcr} alt="CTRCR" width={70} />
        </div>
        <h1 className="lg:text-5xl md:text-4xl max-md:text-center text-3xl font-serif font-bold">
          Welcome to the Center for Training and Research in Commercial
          Regulations
        </h1>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-serif font-bold"></h1>
      </div>
      <h2 className="max-sm:text-xl text-center text-4xl font-serif font-bold">
        Mumbai National Law University
      </h2>
      <h2 className="max-sm:text-lg font-serif font-bold">
        Uncovering the Latest Findings
      </h2>
      <p className=" text-justify font-serif">
        Our focus is to provide an environment of debate, discussion, research
        and training in Corporate Law and the areas intertwined with it by
        bringing together academicians, professionals, legal experts,
        economists, regulators, judges and students.
      </p>
    </div>
  );
};

export default Content;
