import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black w-[65vw] gap-10">
      <div className="flex flex-col items-center text-center justify-center gap-3">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium">
          Welcome to the Center for Training and Research in
        </h1>
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium">
          Commercial Regulations
        </h1>
      </div>
      <h2 className="lg:text-2xl md:text-xl sm:text-lg text-base font-light">
        Uncovering the Latest Findings
      </h2>
      <p className="lg:text-2xl md:text-xl sm:text-lg text-base text-center font-light">
        Our focus is to provide an environment of debate, discussion, research
        and training in Corporate Law and the areas intertwined with it by
        bringing together academicians, professionals, legal experts,
        economists, regulators, judges and students.
      </p>
    </div>
  );
};

export default Content;
