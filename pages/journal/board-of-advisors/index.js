import React from "react";

const Leadership = ({ viceChancellor, chiefEditor }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Vice-Chancellor</h3>
            <p className="text-gray-600 mb-2">{viceChancellor.name}</p>
            <p className="text-gray-600 mb-2">{viceChancellor.institution}</p>
            <p className="text-gray-600 mb-2">{viceChancellor.email}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Chief Editor</h3>
            <p className="text-gray-600 mb-2">{chiefEditor.name}</p>
            <p className="text-gray-600 mb-2">{chiefEditor.designation}</p>
            <p className="text-gray-600 mb-2">{chiefEditor.institution}</p>
            <p className="text-gray-600 mb-2">{chiefEditor.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Members = ({ members }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.designation}</p>
              {member.institution && (
                <p className="text-gray-600 mb-2">{member.institution}</p>
              )}
              <p className="text-gray-600 mb-2">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StudentEditorialBoard = ({ studentEditorialBoard }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Student Editorial Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {studentEditorialBoard.map((member, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.designation}</p>
              <p className="text-gray-600 mb-2">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
    <div className="py-10 px-4">
      <Leadership
        viceChancellor={data.leadership.vice_chancellor}
        chiefEditor={data.leadership.chief_editor}
      />
      <Members members={data.members} />
      <StudentEditorialBoard
        studentEditorialBoard={data.student_editorial_board}
      />
    </div>
  );
};

export default AboutPage;
