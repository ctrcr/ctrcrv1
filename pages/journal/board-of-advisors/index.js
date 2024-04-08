import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ text }) => (
  <h2 className="text-3xl font-bold mb-6">{text}</h2>
);

const Card = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-in-out"
  >
    {children}
  </motion.div>
);

const MemberCard = ({ name, designation, institution, email }) => (
  <Card>
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{designation}</p>
      {institution && <p className="text-gray-600 mb-2">{institution}</p>}
      <p className="text-gray-600 mb-2">{email}</p>
    </div>
  </Card>
);

const AboutPage = () => {
  const data = {
    leadership: {
      vice_chancellor: {
        name: "Vice-Chancellor",
        institution: "Maharashtra National Law University, Mumbai",
        email: "vc@mnlumumbai.edu.in",
      },
      chief_editor: {
        name: "DR. KIRAN RAI",
        designation: "Associate Prof.",
        institution: "Maharashtra National Law University, Mumbai",
        email: "Kiran@mnlumumbai.edu.in",
      },
    },
    members: [
      {
        name: "DR. ANINDHYA TIWARI",
        designation: "Assistant Professor",
        institution: "HNLU",
        email: "Anindhya.tiwari@hnlu.ac.in",
      },
      // More members here...
    ],
    student_editorial_board: [
      {
        name: "Sonakshi Babel",
        designation: "Editor-in-Chief",
        email: "Sonakshi.babel@mnlumumbai.edu.in",
      },
      // More student editorial board members here...
    ],
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionHeader text="Leadership" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MemberCard {...data.leadership.vice_chancellor} />
          <MemberCard {...data.leadership.chief_editor} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <SectionHeader text="Members" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <SectionHeader text="Student Editorial Board" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.student_editorial_board.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
