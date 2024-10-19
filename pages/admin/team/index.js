import React, { useState, useEffect } from "react";
import axios from "axios";
import EditTeamCard from "@/components/Team/EditTeamCard";
import loader from "@/public/loader.svg";
import Image from "next/image";
import withAuth from "@/components/Auth/withAuth";
import AddMemberModal from "@/components/Team/AddMemberModal";
import EditMemberModal from "@/components/Team/EditMemberModal";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [uniquePositions, setUniquePositions] = useState([]);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get("/api/v1/team");
      const members = response.data.data
        .filter((member) => member.index)
        .sort((a, b) => a.index - b.index);

      const uniquePositions = [
        ...new Set(members.map((member) => member.position)),
      ];

      const groupedMembers = members.reduce((acc, member) => {
        const { position } = member;
        if (!acc[position]) acc[position] = [];
        acc[position].push(member);
        return acc;
      }, {});

      setTeamMembers(groupedMembers);
      setUniquePositions(uniquePositions);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  console.log(uniquePositions);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleEdit = (member) => {
    setEditingMember(member);
    setIsEditModalOpen(true);
  };

  const handleAddMember = async (newMember) => {
    try {
      const response = await axios.post("/api/v1/team", newMember);
      setTeamMembers((prev) => {
        const newMembers = { ...prev };
        const position = newMember.position;
        newMembers[position] = newMembers[position] || [];
        newMembers[position].push(response.data.data);
        return newMembers;
      });
      setIsAddModalOpen(false);
    } catch (error) {}
  };

  const handleSubmitEdit = async (updatedMember) => {
    try {
      const response = await axios.put(
        `/api/v1/team/${updatedMember.memberID}`,
        updatedMember
      );

      setTeamMembers((prev) => {
        const newMembers = { ...prev };
        const position = updatedMember.position;

        if (!newMembers[position]) {
          newMembers[position] = [];
        }

        newMembers[position] = newMembers[position].map((member) =>
          member.memberID === updatedMember.memberID
            ? response.data.data
            : member
        );

        return newMembers;
      });

      handleCloseEditModal();
    } catch (error) {}
  };

  const handleDeleteMember = async (memberID) => {
    try {
      await axios.delete(`/api/v1/team/${memberID}`);
      setTeamMembers((prev) => {
        const newMembers = { ...prev };
        Object.keys(newMembers).forEach((position) => {
          newMembers[position] = newMembers[position].filter(
            (member) => member.memberID !== memberID
          );
        });
        return newMembers;
      });
      handleCloseEditModal();
    } catch (error) {}
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingMember(null);
    fetchTeamMembers();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Image src={loader} alt="Loading..." width={200} height={200} />
      </div>
    );
  }

  return (
    <div className="font-montserrat container mx-auto p-8 min-h-screen mt-10">
      <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
        <hr className="w-16 max-md:hidden h-1 mb-2 bg-black" />
        <span className="text-5xl max-md:text-4xl max-md:underline italic font-bold ">
          Our Team
        </span>
        <div className={"flex justify-end mt-2 font-bold"}>
          <hr className="w-16 h-1 max-md:hidden bg-black" />
        </div>
      </h2>
      <div className="flex justify-between items-center">
        <h1 className="text-red-500 text-3xl">
          <strong>⚠</strong>ADMIN PAGE<strong>⚠</strong>
        </h1>
        <button
          className="my-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => {
            setIsAddModalOpen(true);
          }}
        >
          Add New Member
        </button>
      </div>
      {Object.keys(teamMembers).map((position) => (
        <div key={position} className="my-8">
          <h2 className="text-2xl font-bold mb-6">{position}</h2>
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers[position].map((member) => (
              <EditTeamCard
                key={member.memberID}
                member={member}
                onEdit={() => handleEdit(member)}
                onDelete={() => handleDeleteMember(member.memberID)}
              />
            ))}
          </div>
        </div>
      ))}
      <AddMemberModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSubmit={handleAddMember}
        positions={uniquePositions}
      />
      <EditMemberModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        member={editingMember}
        onSubmit={handleSubmitEdit}
        onDelete={handleDeleteMember}
        positions={uniquePositions}
      />
    </div>
  );
};

export default withAuth(TeamPage);
