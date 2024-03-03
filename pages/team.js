import TeamLanding from "@/components/Team/Landing";
import TeamCards from "@/components/Team/TeamCards";
import Timeline from "@/components/Team/Timeline";
import React from "react";

const TeamPage = () => {
  const teamMembers = [
    { name: "John Doe", role: "Developer" },
    { name: "Jane Smith", role: "Designer" },
    { name: "Mike Johnson", role: "Project Manager" },
    { name: "Sara Brown", role: "Marketing" },
  ];

  return (
    <div className="text-black font-montserrat ">
      {/* <h1 className="text-2xl font-bold mb-4">Our Team</h1>
      <div className="grid grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-200 p-4">
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div> */}
      <TeamLanding />
      <div className="absolute bottom-10 hidden lg:flex justify-center items-center w-full">
        <hr className="bg-black w-[70vw] h-1" />
      </div>
      <Timeline />
      <TeamCards />
    </div>
  );
};

export default TeamPage;
