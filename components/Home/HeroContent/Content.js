import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black max-sm:px-8 sm:w-[65vw] gap-4 sm:gap-10 lg:text-2xl md:text-xl sm:text-lg text-base">
      <div className="flex flex-col items-center text-center justify-center gap-3">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-serif font-bold">
          Welcome to the Center for Training and Research in
        </h1>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-serif font-bold">
          Commercial Regulations
        </h1>
      </div>
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
