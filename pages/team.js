import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "@/components/Team/TeamCard";
import loader from "@/public/loader.svg";
import Image from "next/image";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/v1/team");
        const members = response.data.data;

        const groupedMembers = members.reduce((acc, member) => {
          const { position } = member;
          if (!acc[position]) acc[position] = [];
          acc[position].push(member);
          return acc;
        }, {});

        setTeamMembers(groupedMembers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

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
        <span className="text-5xl max-md:text-4xl max-md:underline  italic font-bold ">
          Our Team
        </span>

        <div className={"flex justify-end  mt-2 font-bold"}>
          <hr className="w-16 h-1 max-md:hidden bg-black" />
        </div>
        {/* <h1 className="hidden w-full max-md:block text-4xl flex justify-center items-center">
          Our Team
        </h1> */}
      </h2>
      {Object.keys(teamMembers).map((position) => (
        <div key={position} className="my-8">
          <h2 className="text-2xl font-bold mb-6">{position}</h2>
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {teamMembers[position].map((member) => (
              <TeamCard
                key={member.memberID}
                image={member.image}
                name={member.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
