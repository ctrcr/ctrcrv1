import React from "react";
import Image from "next/image";

const NCCCC = () => {
  const partners = [
    {
      name: "Luthra and Luthra",
      type: "Partner",
      logo: "https://luthra.com/wp-content/uploads/2022/09/logo-2.png",
    },
    {
      name: "Lexport",
      type: "Advisory Partner",
      logo: "https://www.lexport.in/lexport/assets/img/lexport-logo/logo.png",
    },
    {
      name: "Ashlar Law",
      type: "Strategic Partner",
      logo: "/ncccc/ashlarlaw.png",
    },
    {
      name: "Ex Curia",
      type: "Networking Partner",
      logo: "/ncccc/excuria.png",
    },
    {
      name: "SCC Times",
      type: "Knowledge and Media Partner",
      logo: "https://www.scconline.com/blog/wp-content/uploads/2024/02/scc-blog-logo.png",
    },
    {
      name: "SCC Online",
      type: "Knowledge and Media Partner",
      logo: "/ncccc/scconline.png",
    },
  ];

  const committee = [
    {
      name: "Dr. Kiran Rai",
      role: "Faculty Convenor",
      image:
        "https://res.cloudinary.com/daagkkrlr/image/upload/v1729368375/gytlorsgb5fpfheqcw1x.jpg",
    },
    {
      name: "Arjun Kapur",
      role: "Convenor",
      image:
        "https://res.cloudinary.com/daagkkrlr/image/upload/v1729368456/nyiaikpogbkxsdxlvmt3.jpg",
    },
    {
      name: "Suhasini Thakur",
      role: "Associate Convenor",
      image:
        "https://res.cloudinary.com/daagkkrlr/image/upload/v1729369576/vondaqbql1vx6n5m3iiu.jpg",
    },
    {
      name: "Ekam Khera",
      role: "Event Coordinator",
      image:
        "https://res.cloudinary.com/daagkkrlr/image/upload/v1729623241/blz4adxlwarks9zyw5lb.png",
    },
    {
      name: "Alisha Jain",
      role: "Event Coordinator",
      image:
        "https://res.cloudinary.com/daagkkrlr/image/upload/v1729368456/nyiaikpogbkxsdxlvmt3.jpg",
    },
  ];

  const documents = [
    {
      name: "Rulebook",
      filename: "Rulebookncccc.pdf",
      image: "/ncccc/Rulebook.png",
    },
    {
      name: "Competition Itinerary",
      filename: "Itineraryonlinerounds.pdf",
      image: "/ncccc/Itinerary.png",
    },
    {
      name: "Competition Brochure",
      filename: "1stMNLU-MNCCCC.pdf",
      image: "/ncccc/MNLU-MNCCCC.png",
    },
    {
      name: "Competition Report",
      filename: "report.pdf",
      image: "/ncccc/report.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
      <div className="text-center mb-12">
        <div className="relative w-64 h-64 mx-auto mb-6">
          <Image
            src="/ncccc/ncccc_logo.jpg"
            alt="NCCCC 2025 Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold">
          MNLU-M National Corporate Client Counselling Competition 2025
        </h1>
      </div>

      <div className="mb-12 text-justify">
        <p className="text-lg mb-4">
          The MNLU-M National Corporate Client Counselling Competition (NCCCC),
          organised by the Centre for Training & Research in Commercial
          Regulations (CTRCR) at Maharashtra National Law University Mumbai,
          sets a new benchmark in corporate client counselling by challenging
          participants in critical areas of Competition Law, Contract Law,
          Insolvency Law, Company Law, Securities Law, Taxation Law, and other
          commercial laws.
        </p>
        <p className="text-lg mb-4">
          As the inaugural edition of this prestigious national-level event,
          NCCCC 2025 aims to bring together some of the brightest legal minds
          from across the country, offering them a unique opportunity to hone
          their advisory and negotiation skills in a simulated corporate legal
          environment. The competition is meticulously designed to mirror
          real-world corporate legal challenges, providing participants with an
          immersive and intellectually stimulating experience.
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Competition Format & Schedule
        </h2>
        <ul className="space-y-4">
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-semibold md:w-48">Preliminary Rounds:</span>
            <span>21st – 23rd February 2025 (Online Mode)</span>
          </li>
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-semibold md:w-48">Advanced Rounds:</span>
            <span>
              12th – 14th April 2025 (Offline Mode at MNLU Mumbai Campus)
            </span>
          </li>
        </ul>
      </div>

      {/* <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Leadership & Organizing Committee</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {committee.map((member, index) => (
                        <div key={index} className="p-4 border rounded-lg text-center">
                            <h3 className="font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div> */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Leadership & Organizing Committee
        </h2>
        <div className="flex flex-col items-center gap-6">
          <div className="w-80">
            {committee
              .filter((member) => member.role === "Faculty Convenor")
              .map((member, index) => (
                <div key={index} className="p-4 border rounded-lg text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
          </div>

          <div className="flex gap-6 flex-col md:flex-row justify-center">
            {committee
              .filter(
                (member) =>
                  member.role.includes("Convenor") &&
                  !member.role.includes("Faculty")
              )
              .map((member, index) => (
                <div
                  key={index}
                  className="w-80 p-4 border rounded-lg text-center"
                >
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
          </div>

          <div className="flex gap-6 flex-col md:flex-row justify-center">
            {committee
              .filter((member) => member.role === "Event Coordinator")
              .map((member, index) => (
                <div
                  key={index}
                  className="w-80 p-4 border rounded-lg text-center"
                >
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Leadership & Organizing Committee</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {committee.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg w-80 h-82 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mx-auto"
                        >
                            <div className="relative h-64 w-64 mx-auto rounded-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

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

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Competition Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={`/ncccc/${doc.filename}`}
              target="_blank"
              className="block p-6 border rounded-lg text-center hover:bg-gray-50 transition duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={doc.image}
                  alt="PDF icon"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <span className="font-medium">{doc.name}</span>
              <p className="text-sm text-gray-600 mt-2">Click to download</p>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          A Commitment to Excellence
        </h2>
        <p className="text-lg text-justify">
          The MNLU-M NCCCC 2025 is a testament to our university's unwavering
          commitment to academic excellence, corporate legal training, and
          client counselling mastery. By bridging the gap between legal
          education and industry practice, the competition seeks to shape the
          next generation of corporate legal professionals, equipping them with
          the practical expertise and professional acumen required to thrive in
          the corporate legal domain.
        </p>
      </div>
    </div>
  );
};

export default NCCCC;
