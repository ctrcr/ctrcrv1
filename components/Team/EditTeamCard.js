// components/Team/EditTeamCard.js
import React, { useState } from "react";
import Image from "next/image";
import loader from "@/public/loader.svg";
import Modal from "@/components/Team/EditMemberModal";

const EditTeamCard = ({ member, onEdit }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
    onEdit(member);
  };

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
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleEditClick}
      >
        EDIT
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Modal content for editing the member */}
        {/* You can add your form here */}
        <div>Edit Member: {member.name}</div>
      </Modal>
    </div>
  );
};

export default EditTeamCard;
