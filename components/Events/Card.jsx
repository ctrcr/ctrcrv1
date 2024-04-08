import Image from "next/image";
import React from "react";
import { GoClock } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import Link from "next/link";

const Card = ({ image, title, description, date, time, regLink }) => (
  <div className="bg-white rounded-lg shadow-md w-fit ">
    <Image
      src={image}
      alt="Profile"
      className="w-full object-cover rounded-lg "
      width={0}
      height={0}
    />
    <div className="py-4 px-6 ">
      <h2 className="text-lg font-semibold text-[#0F111F] leading-none mb-5">
        {title}
      </h2>
      <p className="text-[#677685] leading-none text-base">{description}</p>

      <div className="flex text-[#4C555D] mt-10 border-t-2 py-2 text-xs justify-around">
        <span className="flex items-center gap-1">
          <TbCalendarTime size={20} />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <GoClock size={20} />
          {time}
        </span>
        <Link href={regLink}>
          <span className="flex items-center gap-1 bg-blue-400 p-2 text-white rounded-full hover:underline cursor-pointer">
            Register
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
