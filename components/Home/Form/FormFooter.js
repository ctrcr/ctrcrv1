import React from "react";
import Image from "next/image";

import cfemail from "../assets/cfemail.svg";
import cffax from "../assets/cffax.svg";
import cfphone from "../assets/cfphone.svg";

const details = [
  { img: cfphone, heading: "PHONE", detail: "345343434" },
  { img: cffax, heading: "FAX", detail: "345343434" },
  { img: cfemail, heading: "EMAIL", detail: "dummy@gmail.com" },
];

const FormFooter = () => {
  return (
    <div>
      <div className="flex flex-row justify-between align-center mt-6">
        {details.map((details) => (
          <div className="flex">
            <div className="flex justify-center items-center mr-3">
              <Image
                src={details.img}
                alt="Profile"
                className="w-[90%]"
                width={10}
                height={10}
              />
            </div>
            <div>
              <h1 className="text-sm font-bold">{details.heading}</h1>
              <h3 className="text-xs font-light">{details.detail}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormFooter;
