import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { generateTeamSchema, generateBreadcrumbSchema } from "@/utils/seoHelpers";
import TeamCard from "@/components/Team/TeamCard";

const SectionHeader = ({ text }) => (
  <h2 className="text-3xl font-semibold mb-6 tracking-wide w-fit">
    <hr className="w-16 h-1 bg-black" />
    <span className="">{text}</span>
    <div className="flex justify-end">
      <hr className="w-16 h-1 bg-black" />
    </div>
  </h2>
);

const Card = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out border border-gray-200"
  >
    {children}
  </motion.div>
);

const MemberCard = ({ name, designation, image }) => (
  <Card>
    {image && (
      <div className="relative flex h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
    )}
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {name}
      </h3>
      <p className="text-gray-600 text-sm">{designation}</p>
    </div>
  </Card>
);

const AboutPage = () => {
  const data = {
    editorial_board: [
      {
        name: "Dr. Kiran Rai",
        designation: "Professor, RMLNLU",
      },
      {
        name: "Dr. Ankeeta Gupta",
        designation: "Assistant Professor, DU",
      },
      {
        name: "Dr. Ishita Das",
        designation: "Assistant Professor, NALSAR",
      },
      {
        name: "Dr. Padma Singh",
        designation: "Assistant Professor, NLIU",
      },
      {
        name: "Dr. Neha Sharma",
        designation: "Assistant Professor, NLIU",
      },
      {
        name: "Dr. Divya Singh Rathor",
        designation: "Assistant Professor, NLUO",
      },
      {
        name: "Saisha Bacha",
        designation: "LLM Candidate, University of Cambridge",
      },
      {
        name: "Jai Sanyal",
        designation: "Associate, Rashmikant & Partners",
      },
      {
        name: "Sonakshi Babel",
        designation: "Member, Nishith Desai Associates",
      },
      {
        name: "Shubh Kansal",
        designation: "",
      },
      {
        name: "Arjun Kapur",
        designation: "",
      },
      {
        name: "Suhasini Thakur",
        designation: "Convenor, Centre for Training & Research in Commercial Regulations",
      },
    ],
    student_editorial_board: [
      {
        name: "Ekam Khera",
        designation: "Editor-in-Chief",
        image: "https://via.placeholder.com/300x400?text=Ekam+Khera",
      },
      {
        name: "Kalyani Renjith Krishna",
        designation: "Editor-in-Chief",
        image: "https://via.placeholder.com/300x400?text=Kalyani+Renjith+Krishna",
      },
      {
        name: "Alisha Jain",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Alisha+Jain",
      },
      {
        name: "Anjnay Bansal",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Anjnay+Bansal",
      },
      {
        name: "Deepak Tiwari",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Deepak+Tiwari",
      },
      {
        name: "Dhanashri Dutta",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Dhanashri+Dutta",
      },
      {
        name: "Nidhi Dalvi",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Nidhi+Dalvi",
      },
      {
        name: "Omkar Tamhane",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Omkar+Tamhane",
      },
      {
        name: "Omkar Wagh",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Omkar+Wagh",
      },
      {
        name: "Rachita Bohra",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Rachita+Bohra",
      },
      {
        name: "Sambhavi Singh",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Sambhavi+Singh",
      },
      {
        name: "Shubhi Agarwal",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Shubhi+Agarwal",
      },
      {
        name: "Vedant Khalapurkar",
        designation: "Editor",
        image: "https://via.placeholder.com/300x400?text=Vedant+Khalapurkar",
      },
      {
        name: "Jacob N J",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Jacob+N+J",
      },
      {
        name: "Manishi Lohiya",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Manishi+Lohiya",
      },
      {
        name: "Veeha Gupta",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Veeha+Gupta",
      },
      {
        name: "Ananya Vasdev",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Ananya+Vasdev",
      },
      {
        name: "Arshiya",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Arshiya",
      },
      {
        name: "Padmanabh Rajesh",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Padmanabh+Rajesh",
      },
      {
        name: "Sukriti Maheshwari",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Sukriti+Maheshwari",
      },
      {
        name: "Tejaswini Wayal",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Tejaswini+Wayal",
      },
      {
        name: "Vaibhav Raut",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Vaibhav+Raut",
      },
      {
        name: "Viraaj Verma",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Viraaj+Verma",
      },
      {
        name: "Yadavi Agrawal",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Yadavi+Agrawal",
      },
      {
        name: "Zinniia Manna",
        designation: "Associate Editor",
        image: "https://via.placeholder.com/300x400?text=Zinniia+Manna",
      },
    ],
  };

  // Generate dynamic SEO data
  const allMembers = [...data.editorial_board, ...data.student_editorial_board];
  const memberNames = allMembers.map(member => member.name).join(', ');
  const totalEditorial = data.editorial_board.length;
  const totalStudents = data.student_editorial_board.length;

  return (
    <>
      <Head>
        <title>Journal Editorial Board | Corporate Law & Commercial Regulations Journal - CTRCR</title>
        <meta
          name="description"
          content={`Meet our journal editorial board: ${totalEditorial} editorial board members and ${totalStudents} student editors for the Journal on Corporate Law and Commercial Regulations. Board includes ${memberNames.split(', ').slice(0, 5).join(', ')}.`}
        />
        <meta
          name="keywords"
          content={`journal editorial board, corporate law journal editors, commercial regulations journal, legal journal editorial, ${memberNames}, law journal student editors, academic journal board`}
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Journal Editorial Board - Corporate Law Journal - CTRCR" />
        <meta
          property="og:description"
          content={`Editorial board of ${allMembers.length} members for our Journal on Corporate Law and Commercial Regulations`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ctrcr.com/journal/editorial-board" />
        <meta property="og:image" content="https://www.ctrcr.com/ctrcr_logo.png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Journal Editorial Board - CTRCR" />
        <meta
          name="twitter:description"
          content={`Editorial board for our Journal on Corporate Law and Commercial Regulations`}
        />
        <meta name="twitter:image" content="https://www.ctrcr.com/ctrcr_logo.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateTeamSchema(allMembers.map(member => ({
              name: member.name,
              image: null,
              position: member.designation,
              role: member.designation
            }))))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema([
              { name: 'Home', url: 'https://www.ctrcr.com' },
              { name: 'Journal', url: 'https://www.ctrcr.com/journal' },
              { name: 'Editorial Board', url: 'https://www.ctrcr.com/journal/editorial-board' }
            ]))
          }}
        />
      </Head>

      <div className="container mx-auto py-16 px-8 flex flex-col gap-8 mt-12">
        <h2 className="text-4xl font-semibold mb-2 tracking-wide w-fit">
          <hr className="w-16 h-1 bg-black" />
          <span className="font-bold">Editorial Board</span>
          <div className="flex justify-end font-bold">
            <hr className="w-16 h-1 bg-black" />
          </div>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader text="Editorial Board" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.editorial_board.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SectionHeader text="Student Editorial Board" />
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {data.student_editorial_board.map((member, index) => (
              <TeamCard key={index} image={member.image} name={member.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
