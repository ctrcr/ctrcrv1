import React from "react";

const Card = ({ image, title, regLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-80">
      <div
        className="w-full h-80 object-cover rounded-t-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="py-4 px-6">
        <h2 className="text-lg font-semibold text-center text-[#0F111F] leading-none mb-5">
          {title}
        </h2>
        <div className="flex text-[#4C555D] mt-10 border-t-2 py-6 text-xs justify-around">
          {" "}
          <a
            href={regLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <span className="flex items-center gap-1 px-6 py-3 rounded-md text-white bg-[#24292F] hover:bg-[#24292F]/70 transition duration-300">
              Read More
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
