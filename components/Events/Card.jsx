import React from "react";
import { GoClock } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

const Card = ({ image, title, description, date, regLink }) => {
  // Function to format the date
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString(); // Returns date in local format
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
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

        <div className="flex text-[#4C555D] mt-10 border-t-2 py-2 text-xs justify-between">
          <span className="flex items-center gap-1">
            <TbCalendarTime size={20} />
            {formatDate(date)} {/* Display formatted date */}
          </span>
          {/* <span className="flex items-center gap-1">
            <GoClock size={20} />
            {time}
          </span> */}
          <span className="flex items-center gap-1 bg-blue-400 py-2 px-4 text-white rounded-full hover:underline cursor-pointer">
            <a
              href={regLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              Link
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
