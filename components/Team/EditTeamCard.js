import React, { useState } from "react";
import Image from "next/image";
import loader from "@/public/loader.svg";

const TeamCard = ({ member }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      {loading && (
        <div className="w-16 h-16 flex justify-center items-center mb-4">
          <Image src={loader} alt="Loading..." width={64} height={64} />
        </div>
      )}
      <img
        src={member.image}
        alt={member.name}
        className={`rounded-lg object-cover mb-4 ${
          loading ? "hidden" : "block"
        }`}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
      <h3 className="text-lg font-semibold text-gray-700">{member.name}</h3>
      <div className="text-gray-500">
        Is Current Member: {member.isCurrent ? "Yes" : "No"}
      </div>
      <div className="text-gray-500">MemberID: {member.memberID}</div>
      <div className="text-gray-500">Index: {member.index}</div>
    </div>
  );
};

export default TeamCard;
