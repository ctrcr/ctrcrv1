// Card.jsx
import React from "react";
import { GoClock } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

const Card = ({ title, description, date, time, regLink, image }) => (
  <div className="bg-white rounded-lg shadow-md w-fit">
    <div
      className="w-full h-64 object-cover rounded-t-lg"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
    <div className="py-4 px-6">
      <h2 className="text-lg font-semibold text-[#0F111F] leading-none mb-5">
        {title}
      </h2>
      <p className="text-[#677685] leading-none text-base">{description}</p>
      <div className="flex mt-10 text-[#4C555D] border-t-2 py-2 text-xs justify-around">
        <span className="flex items-center gap-1">
          <TbCalendarTime size={20} />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <GoClock size={20} />
          {time}
        </span>
        <span className="flex items-center gap-1">
          <a
            href={regLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <MdOutlineRemoveRedEye size={20} />
            Register
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Card;
