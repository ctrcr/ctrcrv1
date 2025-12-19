import React from "react";

export default function TeamCards() {
  const teamMembers = [
    {
      domain: "Board of Advisors",
      members: [
        {
          name: "John Doe",
          role: "Developer",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "John Doe",
          role: "Developer",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "John Doe",
          role: "Developer",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
      ],
    },
    {
      domain: "Peer Review Panel",
      members: [
        {
          name: "Jane Smith",
          role: "Designer",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Jane Smith",
          role: "Designer",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Jane Smith",
          role: "Designer",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
      ],
    },
    {
      domain: "Meet our Team",
      members: [
        {
          name: "Mike Johnson",
          role: "Project Manager",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/ayush.jpg",
        },
        {
          name: "Mike Johnson",
          role: "Project Manager",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
        {
          name: "Mike Johnson",
          role: "Project Manager",
          img: "https://bmf-bucket.s3.ap-south-1.amazonaws.com/882_Photo.jpg",
        },
      ],
    },
    // Add more domains as needed
  ];

  return (
    <section className="min-h-screen px-[4%] max-md:px-[6%] lg:space-y-24 sm:space-y-12 space-y-6">
      {teamMembers.map(({ domain, members }, domainIndex) => (
        <div
          key={domainIndex}
          className="lg:space-y-12 sm:space-y-12 space-y-6"
        >
          <h2 className="text-3xl font-semibold mb-2 tracking-wide w-fit">
            <hr className="w-32 h-1 bg-black" />
            <span className="">{domain}</span>
            <div className="flex justify-end w-64">
              <hr className="w-32 h-1 bg-black " />
            </div>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-24 sm:gap-12 gap-6 ">
            {members.map(({ name, role, img }, memberIndex) => (
              <div
                key={memberIndex}
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
