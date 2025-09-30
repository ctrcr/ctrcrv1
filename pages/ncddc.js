import React from "react";
import Head from "next/head";
import Image from "next/image";
import { generateBreadcrumbSchema, generateEventSchema } from "@/utils/seoHelpers";

const NCDDC = () => {
    const timelineItems = [
        {
            title: "Registration Open",
            date: "24th September 2025",
            status: "active"
        },
        {
            title: "Registrations Close",
            date: "20th October 2025",
            status: "upcoming"
        },
        {
            title: "Announcement of Selected Teams",
            date: "22nd October 2025",
            status: "upcoming"
        },
        {
            title: "Proposition Release",
            date: "27th October 2025",
            status: "upcoming"
        },
        {
            title: "Submission of Documents",
            date: "4th November 2025",
            status: "upcoming"
        },
        {
            title: "Competition Day",
            date: "8th November 2025",
            status: "final"
        }
    ];

    const contacts = [
        {
            name: "Omkar Tamhane",
            role: "Event Head",
            phone: "9022717016"
        },
        {
            name: "Omkar Wagh",
            role: "Event Co-Head",
            phone: "87939 92204"
        }
    ];

    return (
        <>
            <Head>
                <title>MNLU-M National Corporate Due Diligence Competition (NCDDC) - CTRCR</title>
                <meta
                    name="description"
                    content="The inaugural MNLU-M National Corporate Due Diligence Competition organized by CTRCR at Maharashtra National Law University Mumbai. Testing participants on Merger & Acquisition through Share Purchase Agreement (SPA)."
                />
                <meta
                    name="keywords"
                    content="NCDDC, due diligence competition, corporate law, merger acquisition, SPA, MNLU Mumbai, CTRCR, legal competition, law students"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="MNLU-M National Corporate Due Diligence Competition - CTRCR" />
                <meta
                    property="og:description"
                    content="Join the inaugural National Corporate Due Diligence Competition focusing on M&A and Share Purchase Agreements"
                />
                <meta property="og:type" content="event" />
                <meta property="og:url" content="https://www.ctrcr.com/ncddc" />
                <meta property="og:image" content="https://www.ctrcr.com/DD/DD%20Logo%20(1)%20(1).png" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MNLU-M National Corporate Due Diligence Competition" />
                <meta
                    name="twitter:description"
                    content="Inaugural competition on corporate due diligence focusing on M&A"
                />
                <meta name="twitter:image" content="https://www.ctrcr.com/DD/DD%20Logo%20(1)%20(1).png" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateEventSchema({
                            title: "MNLU-M National Corporate Due Diligence Competition (NCDDC)",
                            description: "Inaugural competition testing participants on corporate due diligence, focusing on Merger & Acquisition through Share Purchase Agreement",
                            startDate: "2025-11-08",
                            location: "Maharashtra National Law University Mumbai",
                            organizer: "Centre for Training & Research in Commercial Regulations (CTRCR)"
                        }))
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateBreadcrumbSchema([
                            { name: 'Home', url: 'ctrcr.mnlumumbai.edu.in' },
                            { name: 'NCDDC', url: 'https://www.ctrcr.com/ncddc' }
                        ]))
                    }}
                />
            </Head>

            <div className="overflow-y-hidden min-h-screen">
                <div className="px-[6%] mb-[6%] mt-20 container mx-auto text-[#0F111F] p-4 space-y-[10%]">

                    {/* Hero Section */}
                    <div className="space-y-[5%]">
                        <div className="flex my-12">
                            <h1 className="text-4xl md:text-5xl font-semibold mb-2 tracking-wide w-fit">
                                <hr className="w-16 h-1 bg-black" />
                                <span className="font-bold">NCDDC 2025</span>
                                <div className="flex justify-end font-bold">
                                    <hr className="w-16 h-1 bg-black" />
                                </div>
                            </h1>
                        </div>
                    </div>

                    {/* Logo and Title Section */}
                    <div className="text-center space-y-8">
                        <div className="flex justify-center">
                            <Image
                                src="/DD/DD Logo (1) (1).png"
                                alt="NCDDC Logo"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F111F]">
                                MNLU-M National Corporate Due Diligence Competition
                            </h2>
                            <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-700">
                                (NCDDC)
                            </h3>
                            <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto">
                                Organised by the Centre for Training & Research in Commercial Regulations (CTRCR)
                                at Maharashtra National Law University Mumbai
                            </p>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0F111F] border-b-2 border-gray-300 pb-2">
                            About the Competition
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p className="text-gray-700">
                                The MNLU-M National Corporate Due Diligence Competition (NCDDC), organised by the Centre for Training & Research in Commercial Regulations (CTRCR) at Maharashtra National Law University Mumbai, establishes a novel benchmark in Corporate Due Diligence by testing participants on the key area of <strong>Merger and Acquisition</strong> which is for this edition on a <strong>Share Purchase Agreement (SPA)</strong>.
                            </p>
                            <p className="text-gray-700">
                                The inaugural edition of this prestigious competition aims to unite top legal talents throughout the country, providing a platform to hone their skills of due diligence, document risk-spotting, and negotiation abilities in a simulated corporate setting.
                            </p>
                            <p className="text-gray-700">
                                The competition is carefully designed to replicate real-world corporate legal complexities, providing participants an intellectually enriching experience.
                            </p>
                        </div>
                    </div>

                    {/* Downloads Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0F111F] border-b-2 border-gray-300 pb-2">
                            Competition Documents
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-[#0F111F]">Competition Brochure</h3>
                                <p className="text-gray-600 mb-4">
                                    Download the official brochure for detailed information about the competition format, rules, and guidelines.
                                </p>
                                <a
                                    href="/DD/DD Brochure.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-[#0F111F] text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Brochure
                                </a>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold mb-4 text-[#0F111F]">Competition Rulebook</h3>
                                <p className="text-gray-600 mb-4">
                                    Access the complete rulebook containing all competition rules, judging criteria, and procedural guidelines.
                                </p>
                                <a
                                    href="/DD/DD Rulebook.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-[#0F111F] text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Rulebook
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0F111F] border-b-2 border-gray-300 pb-2">
                            Competition Timeline
                        </h2>
                        <div className="space-y-4">
                            {timelineItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className={`w-4 h-4 rounded-full ${item.status === 'active' ? 'bg-green-500' :
                                        item.status === 'final' ? 'bg-blue-500' : 'bg-gray-400'
                                        }`}></div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[#0F111F]">{item.title}</h3>
                                    </div>
                                    <div className="text-gray-600 font-medium">
                                        {item.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0F111F] border-b-2 border-gray-300 pb-2">
                            Contact Information
                        </h2>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <p className="text-lg font-semibold mb-6 text-[#0F111F]">
                                In case of any queries, please feel free to contact:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {contacts.map((contact, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-300">
                                        <h3 className="text-xl font-semibold text-[#0F111F] mb-2">{contact.name}</h3>
                                        <p className="text-gray-600 mb-2">{contact.role}</p>
                                        <a
                                            href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {contact.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center space-y-6 bg-[#0F111F] text-white p-8 rounded-lg">
                        <h2 className="text-3xl font-bold">Ready to Participate?</h2>
                        <p className="text-xl">
                            Join the inaugural National Corporate Due Diligence Competition and showcase your legal expertise!
                        </p>
                        <p className="text-lg opacity-90 mb-6">
                            Registrations are now open until 20th October 2025
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeFhMkDFvgkASwG4QTth4FK6uwdOC9wThitxuEhyBJoMEjYIQ/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-[#0F111F] font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Register Here
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default NCDDC;