import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import TeamCard from "@/components/Team/TeamCard";
import loader from "@/public/loader.svg";
import Image from "next/image";
import logo from "@/public/blog_logo.png";
import { generateTeamSchema, generateBreadcrumbSchema } from "@/utils/seoHelpers";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState({});
  const [loading, setLoading] = useState(true);
  const [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("/api/v1/blogs/editorial");
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
        <title>FCCL Editorial Board - Forum for Commercial and Corporate Laws | CTRCR</title>
        <meta 
          name="description" 
          content={`Meet the ${totalMembers} distinguished editorial board members of Forum for Commercial and Corporate Laws (FCCL) including ${positions}. Expert editors in corporate law and commercial regulations.`} 
        />
        <meta 
          name="keywords" 
          content={`FCCL editorial board, Forum Commercial Corporate Laws, editorial board members, ${memberNames}, corporate law editors, commercial regulations experts, legal journal editors`}
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="FCCL Editorial Board - Forum for Commercial and Corporate Laws" />
        <meta 
          property="og:description" 
          content={`Distinguished editorial board of ${totalMembers} experts in corporate law and commercial regulations`} 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ctrcr.com/fccl/editorial-board" />
        <meta property="og:image" content="https://www.ctrcr.com/blog_logo.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FCCL Editorial Board - CTRCR" />
        <meta 
          name="twitter:description" 
          content={`Distinguished editorial board of ${totalMembers} experts in corporate law`} 
        />
        <meta name="twitter:image" content="https://www.ctrcr.com/blog_logo.png" />
        
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
              { name: 'FCCL', url: 'https://www.ctrcr.com/fccl' },
              { name: 'Editorial Board', url: 'https://www.ctrcr.com/fccl/editorial-board' }
            ]))
          }}
        />
      </Head>
      
      <div className="font-montserrat container mx-auto p-8 min-h-screen mt-16">
      <div className="flex justify-between items-center mb-6 max-md:flex-col-reverse ">
        <div className="flex justify-center items-center max-md:text-center">
          <h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
            <hr className="w-24 max-md:hidden h-1 mb-2 bg-black" />
            <span className="text-5xl max-md:text-4xl font-bold ">
              Forum for Commercial and Corporate Laws
            </span>

            <div className={"flex justify-end  mt-2 font-bold"}>
              <hr className="w-24 h-1 max-md:hidden bg-black" />
            </div>
            <p className="text-lg mt-2 max-md:text-sm text-gray-600">
              Under the aegis of the Centre for Training and Research in
              Commercial Regulations
            </p>
          </h2>
        </div>
        <div>
          <Image src={logo} alt="Blogs" width={200} height={200} />
        </div>
      </div>
      <div className="flex  my-12">
        <h2 className="text-5xl font-semibold  max-md:text-4xl max-md:text-center mb-2 tracking-wide w-fit">
          <hr className="w-16 max-md:hidden h-1 bg-black" />
          <span className="font-bold">Editorial Board</span>
          <div className={"flex justify-end  font-bold"}>
            <hr className="w-16 max-md:hidden h-1 bg-black " />
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
