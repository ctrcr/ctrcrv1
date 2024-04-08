import React from "react";
import { motion } from "framer-motion";

export default function BoardAdvisors() {
  const teamMembers = [
    {
      domain: "Board of Advisors",
      style: "w-64",
      members: [
        {
          name: "Kapil Sharma",
          role: "Partner, LKS",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Samir Malik",
          role: "Partner, DSK Legal",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Smriti Yadav",
          role: "Partner, Khaitan",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
        {
          name: "Sandeep Parekh",
          role: "Managing Partner, Finsec Law Advisors",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Nitin Podar",
          role: "Partner, JSA",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Jatin Arora",
          role: "Partner, Phoenix Legal",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Sahil Kanuga",
          role: "Partner, NDA",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
        {
          name: "Piyush Mishra",
          role: "Partner, Luthra & Lutha",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
      ],
    },
    {
      domain: "Editorial Board Members",
      style: "w-96",
      members: [
        {
          name: "Dr. Anindhya Tiwari",
          role: "Assistant Professor, HNLU",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Dr. Rosmy Joan",
          role: "Assistant Professor, NLUJ",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Prof. Subhash Chandra Roy",
          role: "Associate Professor, CNLU",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
        {
          name: "Manoj Kumar",
          role: "Associate Professor, NLUJ",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Janhavee Pise",
          role: "Alumni, MNLU Mumbai",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Rahul Singh",
          role: "Associate Professor, NLSIU",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Dr. Jeet Singh Maan",
          role: "Associate Professor, NLUD",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
        {
          name: "Dr. Rajesh Kumar",
          role: "Associate Professor, NISM",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
        {
          name: "Devashree Nimbhorkar",
          role: "Practising Advocate",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen px-[4%] max-md:px-[6%] lg:space-y-24 sm:space-y-12 space-y-6 py-20">
      {teamMembers.map(({ domain, members }, domainIndex) => (
        <motion.div
          key={domainIndex}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:space-y-12 sm:space-y-12 space-y-6"
        >
          <h2 className="text-3xl font-semibold mb-2 tracking-wide w-fit">
            <hr className="w-32 h-1 bg-black" />
            <span className="">{domain}</span>
            <div className={`flex justify-end ${domain.style}`}>
              <hr className="w-32 h-1 bg-black " />
            </div>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 sm:gap-12 gap-6 ">
            {members.map(({ name, role, img }, memberIndex) => (
              <motion.div
                key={memberIndex}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
              >
                <div className="relative flex h-80 overflow-hidden rounded-t-xl">
                  <img
                    src={img}
                    alt="product image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-4 px-5 pb-5">
                  <h5 className="text-xl font-semibold text-slate-900">
                    {name}
                  </h5>
                  <h5 className="text-lg tracking-wider text-slate-900">
                    {role}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
