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
      <h3 className="text-xl font-semibold text-gray-600 text-bold mb-2">
        {name}
      </h3>
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
        name: "Prof. (Dr.) DILIP UKEY",
        designation: "Vice-Chancellor",
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
      {
        name: "DR. ROSMY JOAN",
        designation: "Assistant Professor",
        institution: "NLUJ",
        email: "rosmyjoan@gmail.com",
      },
      {
        name: "RAHUL SINGH",
        designation: "Associate Professor",
        institution: "NLISU",
        email: "rahulsingh@nls.ac.in",
      },
      {
        name: "MANOJ KUMAR",
        designation: "Assistant Professor",
        institution: "NLUJ",
        email: "mksingh@nlujodhpur.ac.in",
      },
      {
        name: "DR. SHUBHASH CHANDRA ROY",
        designation: "Associate Professor",
        institution: "CNLU",
        email: "Scroy@cnlu.ac.in",
      },
      {
        name: "DR. JEET SINGH MAAN",
        designation: "Teacher of Legal Education and Research",
        institution: "National Law University, Delhi",
        email: "jsmann@nludelhi.ac.in",
      },
      {
        name: "DR. RAJESH KUMAR",
        designation: "Associate Professor",
        institution: "NISM",
        email: "rajesh.kumar@nism.ac.in",
      },
      {
        name: "DEVASHREE NIMBHORKAR",
        designation: "Practicing Advocate",
        email: "devashreenimbhorkar@mnlumumbai.edu.in",
      },
      {
        name: "JANHAVEE PISE",
        designation: "LLM Candidate 2023",
        institution: "Boston University School of Law",
        email: "pisejanhavi@gmail.com",
      },
    ],
    student_editorial_board: [
      {
        name: "Sonakshi Babel",
        designation: "Editor-in-Chief",
        email: "Sonakshi.babel@mnlumumbai.edu.in",
      },
      {
        name: "Vishal Latange",
        designation: "Senior Editor",
        email: "Vishal.latange@mnlumumbai.edu.in",
      },
      {
        name: "Avisha Dhiman",
        designation: "Editor",
        email: "avisha.dhiman@mnlumumbai.edu.in",
      },
      {
        name: "Shivangi Agarwal",
        designation: "Editor",
        email: "shivangi.agarwal@mnlumumbai.edu.in",
      },
      {
        name: "Siddhant Shinde",
        designation: "Editor",
        email: "siddhant.shinde@mnlumumbai.edu.in",
      },
      {
        name: "Pranjal Kinjawadekar",
        designation: "Editor-in-Chief",
        email: "Pranjal.kinjawadekar@mnlumumbai.edu.in",
      },
      {
        name: "Niralee Jain",
        designation: "Senior Editor",
        email: "Niralee.jain@mnlumumbai.edu.in",
      },
      {
        name: "Parth Sharma",
        designation: "Editor",
        email: "Parth.sharma@mnlumumbai.edu.in",
      },
      {
        name: "Kirti Kapoor",
        designation: "Editor",
        email: "Kirti.kapoor@mnlumumbai.edu.in",
      },
      {
        name: "Harsh Loya",
        designation: "Editor",
        email: "harsh.loya@mnlumumbai.edu.in",
      },
      {
        name: "Neelchandra Buty",
        designation: "Student Editor",
        email: "Neelchandra.buty@mnlumumbai.edu.in",
      },
      {
        name: "Divya Ganeriwala",
        designation: "Associate Editor",
        email: "divya.ganeriwala@mnlumumbai.edu.in",
      },
      {
        name: "Dhairya Gawde",
        designation: "Associate Editor",
        email: "Dhairya.gawde@mnlumumbai.edu.in",
      },
      {
        name: "Nishit Rughwani",
        designation: "Associate Editor",
        email: "Nishit.rughwani@mnlumumbai.edu.in",
      },
      {
        name: "Geetanjali Lengre",
        designation: "Associate Editor",
        email: "2022034@mnlumumbai.edu.in",
      },
      {
        name: "Sanchi Khajuria",
        designation: "Associate Editor",
        email: "2022081@mnlumumbai.edu.in",
      },
      {
        name: "Satyam Sharma",
        designation: "Student Advisor",
        email: "Satyam@mnlumumbai.edu",
      },
      {
        name: "Pranav Athreya",
        designation: "Associate Editor",
        email: "2022063@mnlumumbai.edu.in",
      },
      {
        name: "Amaan Merchant",
        designation: "Associate Editor",
        email: "amaan.merchant@mnlumumbai.edu.in",
      },
      {
        name: "Ekam Khera",
        designation: "Associate Editor",
        email: "2022031@mnlumumbai.edu.in",
      },
      {
        name: "Dnyanada Parkale",
        designation: "Associate Editor",
        email: "2022030@mnlumumbai.edu.in",
      },
      {
        name: "Arya Kshirsagar",
        designation: "Associate Editor",
        email: "2022020@mnlumumbai.edu.in",
      },
      {
        name: "Atharva Kulkarni",
        designation: "Associate Editor",
        email: "2022121@mnlumumbai.edu.in",
      },
    ],
  };

  return (
    <div className="container  mx-auto py-16 px-8 flex flex-col gap-4 ">
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
