import React from "react";
import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      name: "Luthra and Luthra",
      type: "Title Partner",
      logo: "/article-competition/luthra.png",
    },
    {
      name: "Shardul Amarchand Mangaldas",
      type: "Law Firm Partner",
      logo: "/article-competition/sam.jpg",
    },
    {
      name: "Dentons",
      type: "Assesment Partner",
      logo: "/article-competition/dentons.png",
    },
    {
      name: "Insolvency Law Academy",
      type: "Knowledge Partner",
      logo: "/article-competition/ila.png",
    },
    {
      name: "SCC Online",
      type: "Media Partner",
      logo: "/article-competition/scc.jpg",
    },
    {
      name: "HSA Advocates",
      type: "Partner",
      logo: "/article-competition/HSA.png",
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col shadow-md items-center transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden"
          >
            <div className="relative h-44 w-44 md:h-64 md:w-64 lg:h-64 lg:w-64 mb-2 mx-auto rounded-xl">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain w-full rounded-lg"
              />
            </div>
            <h3 className="text-center font-semibold text-lg">
              {partner.name}
            </h3>
            <p className="text-gray-600 text-center">{partner.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners; 