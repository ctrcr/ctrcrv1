import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import TeamCard from "@/components/Team/TeamCard";
import loader from "@/public/loader.svg";
import Image from "next/image";
import { generateTeamSchema, generateBreadcrumbSchema } from "@/utils/seoHelpers";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState({});
  const [loading, setLoading] = useState(true);
  const [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/v1/team");
        const members = response.data.data
          .filter((member) => member.isCurrent)
          .filter((member) => member.index)
          .sort((a, b) => a.index - b.index);

        const groupedMembers = members.reduce((acc, member) => {
          const { position } = member;
          if (!acc[position]) acc[position] = [];
          acc[position].push(member);
          return acc;
        }, {});

        setTeamMembers(groupedMembers);
        setAllMembers(members);
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

  // Generate dynamic SEO data
  const memberNames = allMembers.map(member => member.name).join(', ');
  const positions = Object.keys(teamMembers).join(', ');
  const totalMembers = allMembers.length;

  return (
    <>
      <Head>
        <title>Our Team - CTRCR</title>
        <meta 
          name="description" 
          content={`Meet our expert team of ${totalMembers} professionals including ${positions}. Leading researchers and practitioners in corporate law, commercial regulations, and legal education.`} 
        />
        <meta 
          name="keywords" 
          content={`CTRCR team, corporate law experts, commercial regulations team, legal researchers, ${memberNames}, Maharashtra National Law University, legal education`}
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Team - CTRCR | Leading Experts in Corporate Law" />
        <meta 
          property="og:description" 
          content={`Meet our expert team of ${totalMembers} professionals in corporate law and commercial regulations`} 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ctrcr.com/team" />
        <meta property="og:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team - CTRCR" />
        <meta 
          name="twitter:description" 
          content={`Meet our expert team of ${totalMembers} professionals in corporate law and commercial regulations`} 
        />
        <meta name="twitter:image" content="https://www.ctrcr.com/ctrcr_logo.png" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateTeamSchema(allMembers))
          }}
        />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.ctrcr.com' },
              { name: 'Team', url: 'https://www.ctrcr.com/team' }
            ]))
          }}
        />
      </Head>
      
      <div className="font-montserrat container mx-auto p-8 min-h-screen mt-16">
      <div className="flex  my-12">
        <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
          <hr className="w-16 h-1 bg-black" />
          <span className="font-bold ">OUR TEAM</span>
          <div className={"flex justify-end  font-bold"}>
            <hr className="w-16 h-1 bg-black " />
          </div>
        </h2>
      </div>
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
    </>
  );
};

export default TeamPage;
