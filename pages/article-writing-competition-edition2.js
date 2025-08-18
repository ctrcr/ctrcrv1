import React from 'react'
import Head from "next/head"
import Image from "next/image"
import linkedin from "@/public/linkedin_logo.png";
import instagram from "@/public/instagram-logo.png";
import Partners from "@/components/Partners";

const ArticleWritingCompetition = () => {
    const committee = [
        {
            name: "Veeha Gupta",
            role: "Event Head",
            contact: "+91 93154 09466",
        },
        {
            name: "Anjnay Bansal",
            role: "Event Head",
            contact: "+91 98189 04029",
        },
    ]

    return (
        <>
            <Head>
                <title>2nd National Article Writing Competition on Antitrust Laws 2025 | CTRCR</title>
                <meta
                    name="description"
                    content="Join the 2nd National Article Writing Competition on Antitrust Laws with specialized workshop. Platform for law students to demonstrate research skills and legal analysis in competition law."
                />
                <meta
                    name="keywords"
                    content="Article Writing Competition 2025, Antitrust Laws, Competition Law, CTRCR, MNLU Mumbai, legal writing, law students, legal analysis, research competition"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="2nd National Article Writing Competition on Antitrust Laws 2025 | CTRCR" />
                <meta
                    property="og:description"
                    content="2nd National Article Writing Competition on Antitrust Laws with specialized workshop on competition law"
                />
                <meta property="og:type" content="event" />
                <meta property="og:url" content="https://www.ctrcr.com/article-writing-competition-edition2" />
                <meta property="og:image" content="https://www.ctrcr.com/ctrcr_logo.png" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="2nd National Article Writing Competition on Antitrust Laws 2025" />
                <meta
                    name="twitter:description"
                    content="National competition on Antitrust Laws with workshop on competition law"
                />
                <meta name="twitter:image" content="https://www.ctrcr.com/ctrcr_logo.png" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Event",
                            "name": "2nd National Article Writing Competition on Antitrust Laws",
                            "description": "National article writing competition coupled with specialized workshop on Antitrust Laws for law students",
                            "startDate": "2025-10-04",
                            "organizer": {
                                "@type": "Organization",
                                "name": "CTRCR - Center for Training and Research in Commercial Regulations",
                                "url": "https://www.ctrcr.com"
                            },
                            "url": "https://www.ctrcr.com/article-writing-competition-edition2"
                        })
                    }}
                />
            </Head>

            <div className="max-w-6xl mx-auto px-4 py-8 pt-32">
                <div className="text-center mb-12">
                    <div className="relative w-64 h-64 mx-auto mb-6">
                        <Image
                            src="/ctrcr_logo.png"
                            alt="CTRCR Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">
                        2nd National Article Writing Competition
                    </h1>
                    <h2 className="text-xl text-gray-700 mb-2">
                        on Antitrust Laws
                    </h2>
                    <p className="text-lg text-gray-600 mb-2">
                        Coupled with Specialized Workshop
                    </p>
                    <p className="text-base text-blue-600 font-semibold">
                        4th October 2025 | 2nd Edition
                    </p>
                </div>

                <div className="mb-12 text-justify">
                    <h2 className="text-2xl font-semibold mb-6">About the Competition</h2>
                    <p className="text-lg mb-4">
                        The 2nd National Article Writing Competition on Antitrust Laws, organized by CTRCR at MNLU Mumbai,
                        aims to foster in-depth research and critical thinking on competition laws. It offers students a
                        platform to enhance their analytical and writing skills, propose innovative legal solutions, and
                        engage with practical challenges in competition law.
                    </p>
                    <p className="text-lg mb-4">
                        The competition bridges academia and practice through a workshop and internship opportunities,
                        while recognizing and rewarding emerging talent in this dynamic field. Participants are
                        encouraged to explore evolving jurisprudence, address systemic gaps, and contribute original
                        perspectives that could inform future legal and policy reforms.
                    </p>
                    <p className="text-lg mb-4">
                        With a focus on academic rigour and practical relevance, the competition aspires to shape
                        a new generation of antitrust law experts.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Workshop Details</h2>
                    <p className="text-lg mb-4">
                        <span className="font-semibold">Date:</span> 4th October 2025
                    </p>
                    <p className="text-lg mb-4">
                        A workshop on Antitrust Laws will be held and is open to both students and legal professionals.
                        It will offer focused discussions on recent amendments, landmark judgments, and practical aspects
                        of the competition law.
                    </p>
                    <p className="text-lg mb-4">
                        The sessions will be led by distinguished antitrust professionals, practitioners, and legal scholars.
                        Workshop participants will gain a well-rounded view of current antitrust practice and policy.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                        Note: Participants in the Competition need not pay the registration fees for the Workshop.
                    </p>
                </div>

                {/* <Partners /> */}

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Competition Document</h2>
                    <div className="flex justify-center">
                        <a
                            href="/article-competition/2nd National Article Writing Competition and Workshop on the Antitrust laws.pdf"
                            target="_blank"
                            className="block p-6 border rounded-lg text-center hover:bg-gray-50 transition duration-300 max-w-sm"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <Image
                                    src="/article-competition/2nd edition.png"
                                    alt="Competition Brochure"
                                    fill
                                    className="object-contain rounded-xl"
                                />
                            </div>
                            <span className="font-medium text-lg">Competition Brochure</span>
                            <p className="text-sm text-gray-600 mt-2">Click to download detailed guidelines</p>
                        </a>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Registration Details</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">Article Writing Competition</h3>
                        <div className="space-y-3">
                            <p className="text-lg">
                                <span className="font-semibold">Eligibility:</span> Open to all undergraduate law students
                                enrolled in 3-year or 5-year LL.B. programmes from recognised institutions in India
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Last Date of Registration:</span> 20th September 2025
                            </p>
                            <div className="flex flex-col md:flex-row md:items-start">
                                <span className="font-semibold md:w-48">Registration Fees:</span>
                                <div className="space-y-2">
                                    <div>INR 300 - Single authorship</div>
                                    <div>INR 500 - Co-authorship (max 2 authors)</div>
                                </div>
                            </div>
                            <p className="text-lg">
                                <span className="font-semibold">Article Submission Deadline:</span> 27th September 2025
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-green-600">Workshop</h3>
                        <div className="space-y-3">
                            <p className="text-lg">
                                <span className="font-semibold">Date:</span> 4th October 2025
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Last Date of Registration:</span> 20th September 2025
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Registration Fee:</span> INR 200 (Free for competition participants)
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center">
                        <span className="font-semibold md:w-48">Registration Link:</span>
                        <a
                            href="https://forms.gle/z64RmYchewtoxq5o7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            https://forms.gle/z64RmYchewtoxq5o7
                        </a>
                    </div>

                    <p className="text-sm text-gray-600 mt-4 italic">
                        Note: All deadlines are at 11:59 PM IST on the respective dates. No registrations will be accepted after the deadline.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Competition Themes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Deal Value Thresholds and Killer Acquisitions
                            </h3>
                            <p className="text-gray-700">
                                In India's Startup Economy
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Competition Law in Public Procurement
                            </h3>
                            <p className="text-gray-700">
                                Ensuring Fairness, Transparency, and Market Integrity
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Evolving Dimensions of Merger Control
                            </h3>
                            <p className="text-gray-700">
                                From Traditional M&A to Innovative Corporate Structuring
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Evolving Approaches in Competition Law Enforcement
                            </h3>
                            <p className="text-gray-700">
                                And Procedural Reforms
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                The Leniency Regime in Competition Law
                            </h3>
                            <p className="text-gray-700">
                                Balancing Self-Reporting Incentives with Effective Cartel Enforcement
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Antitrust Law at Crossroads
                            </h3>
                            <p className="text-gray-700">
                                Intersection with Allied Legal Regimes like Intellectual Property Law, Foreign Investment Law, Space Law and other Laws
                            </p>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mt-6 italic">
                        Participants are free to write on related topics as long as they are within the ambit of the Antitrust Laws.
                    </p>
                </div>

                <div className="bg-green-50 p-8 rounded-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Awards & Recognition</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-green-600 text-2xl mr-3">💼</span>
                            <div>
                                <h3 className="font-semibold text-lg">Top 3 Submissions</h3>
                                <p className="text-gray-700">Authors will receive a 4-week internship opportunity with a top-tier Law Firm</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-green-600 text-2xl mr-3">🏆</span>
                            <div>
                                <h3 className="font-semibold text-lg">Top 10 Submissions</h3>
                                <p className="text-gray-700">Will be published in the Journal on Corporate Law and Commercial Regulations (subject to editorial review) and receive Certificates of Merit</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-green-600 text-2xl mr-3">🎖️</span>
                            <div>
                                <h3 className="font-semibold text-lg">All Valid Submissions</h3>
                                <p className="text-gray-700">Certificate of Participation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Submission Guidelines</h2>
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-lg mb-4 text-blue-600">General Requirements</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Submit in .doc/.docx format via Google Form</li>
                                    <li>• File name should be the Team Code allotted via email</li>
                                    <li>• Include 150-200 word abstract within the manuscript</li>
                                    <li>• Article length: 2500-3500 words (including abstract, excluding footnotes)</li>
                                    <li>• No identifying information in article body</li>
                                    <li>• Original, unpublished work only</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-4 text-blue-600">Formatting</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Font: Garamond throughout</li>
                                    <li>• Title: 14pt, Bold, Centered</li>
                                    <li>• Main text: 12pt, 1.5 line spacing</li>
                                    <li>• Footnotes: 10pt, single spacing</li>
                                    <li>• Margins: 1 inch on all sides</li>
                                    <li>• Citations: Bluebook 21st Edition</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Important:</span> Plagiarism exceeding 15% will result in disqualification.
                                AI-generated content (beyond basic grammar checks) is strictly prohibited.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
                    <div className="bg-white border rounded-lg">
                        <div className="space-y-4 p-6">
                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg mb-2 text-blue-600">Are we supposed to submit manuscripts only on the themes provided?</h3>
                                <p className="text-gray-700">Yes, the scope of the manuscript must be strictly limited to the themes mentioned in the brochure.</p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg mb-2 text-blue-600">Will a confirmation of registration email be sent?</h3>
                                <p className="text-gray-700">Yes, a confirmation email will be sent.</p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg mb-2 text-blue-600">What document format should be uploaded?</h3>
                                <p className="text-gray-700">Only Word documents (.doc/.docx) will be accepted.</p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg mb-2 text-blue-600">Will there be an extension to the submission deadline?</h3>
                                <p className="text-gray-700">No, there will be no extension to the submission deadline.</p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg mb-2 text-blue-600">Where do I have to submit my article/manuscript?</h3>
                                <p className="text-gray-700">A separate email confirming your registration will contain the link to the Google Form where you must upload your manuscript.</p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg mb-2 text-blue-600">Will I receive a certificate?</h3>
                                <p className="text-gray-700">Yes, a certificate of participation will be provided to all authors whose submissions comply with the guidelines.</p>
                            </div>

                            <div className="border-b pb-4">
                                <h3 className="font-semibold text-lg mb-2 text-blue-600">Are the words in the abstract included in the manuscript's word limit?</h3>
                                <p className="text-gray-700">Yes, the abstract is included within the overall word limit of 2,500–3,500 words.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Organizing Committee</h2>
                    <div className="flex gap-6 flex-col md:flex-row justify-center items-center">
                        {committee.map((member, index) => (
                            <div
                                key={index}
                                className="w-full max-w-sm p-6 border rounded-lg text-center bg-white shadow-sm"
                            >
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <p className="text-blue-600 font-medium">{member.contact}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                        <p className="text-lg">
                            <span className="font-semibold">For any queries, you may reach out:</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Email & Website</h3>
                                <div className="space-y-2">
                                    <p>📧 <a href="mailto:ctrcr@mnlumumbai.edu.in" className="text-blue-600 hover:text-blue-800">ctrcr@mnlumumbai.edu.in</a></p>
                                    <p>🌐 <a href="https://www.ctrcr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">www.ctrcr.com</a></p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Social Media</h3>
                                <div className="space-y-2">
                                    <p> <img src="/linkedin_logo.png" width={22} alt="LinkedIn" className="inline-block mr-2" /> <a href="https://www.linkedin.com/in/ctrcr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">CTRCR - MNLU Mumbai</a></p>
                                    <p> <img src="/instagram-logo.png" width={22} alt="Instagram" className="inline-block mr-2" /> <a href="https://www.instagram.com/ctrcr_mnlu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">@ctrcr_mnlu</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleWritingCompetition
