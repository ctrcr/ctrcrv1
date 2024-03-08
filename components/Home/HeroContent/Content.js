import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center text-black w-[65vw] gap-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-5xl font-medium">
          Welcome to the Center for Training and Research in
        </h1>
        <h1 className="text-5xl font-medium">Commercial Regulations</h1>
      </div>
      <h2 className="font-light">Uncovering the Latest Findings</h2>
      <p className="text-center font-light">
        Our focus is to provide an environment of debate, discussion, research
        and training in Corporate Law and the areas intertwined with it by
        bringing together academicians, professionals, legal experts,
        economists, regulators, judges and students.
      </p>
    </div>
  );
};

export default Content;
