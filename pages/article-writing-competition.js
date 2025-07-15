import React from 'react'
import Head from "next/head"
import Image from "next/image"
import linkedin from "@/public/linkedin_logo.png";
import instagram from "@/public/instagram-logo.png";

const ArticleWritingCompetition = () => {
    const committee = [
        {
            name: "Arjun Kapur",
            role: "Convenor",
            contact: "+91 83788 98560",
        },
        {
            name: "Suhasini Thakur",
            role: "Associate Convenor",
            contact: "+91 75586 37950",
        },
    ]

    return (
        <>
            <Head>
                <title>National Article Writing Competition on IBC 2025 | CTRCR</title>
                <meta
                    name="description"
                    content="Join the 1st National Article Writing Competition on the Insolvency and Bankruptcy Code (IBC) with specialized online workshop. Platform for law students to demonstrate research skills and legal analysis."
                />
                <meta
                    name="keywords"
                    content="Article Writing Competition 2025, IBC, Insolvency and Bankruptcy Code, CTRCR, MNLU Mumbai, legal writing, law students, legal analysis, research competition"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="National Article Writing Competition on IBC 2025 | CTRCR" />
                <meta
                    property="og:description"
                    content="1st National Article Writing Competition on the Insolvency and Bankruptcy Code with specialized online workshop"
                />
                <meta property="og:type" content="event" />
                <meta property="og:url" content="https://www.ctrcr.com/article-writing-competition" />
                <meta property="og:image" content="https://www.ctrcr.com/article-competition/National-Article-Writing-Competitioni.pdf" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="National Article Writing Competition on IBC 2025" />
                <meta
                    name="twitter:description"
                    content="National competition on Insolvency and Bankruptcy Code with online workshop"
                />
                <meta name="twitter:image" content="https://www.ctrcr.com/article-competition/National-Article-Writing-Competitioni.pdf" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Event",
                            "name": "1st National Article Writing Competition on the Insolvency and Bankruptcy Code",
                            "description": "National article writing competition coupled with specialized online workshop on IBC for law students",
                            "organizer": {
                                "@type": "Organization",
                                "name": "CTRCR - Center for Training and Research in Commercial Regulations",
                                "url": "https://www.ctrcr.com"
                            },
                            "url": "https://www.ctrcr.com/article-writing-competition"
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
                        1st National Article Writing Competition
                    </h1>
                    <h2 className="text-xl text-gray-700 mb-2">
                        on the Insolvency and Bankruptcy Code (IBC)
                    </h2>
                    <p className="text-lg text-gray-600 mb-2">
                        Coupled with Specialized Online Workshop
                    </p>
                    <p className="text-base text-blue-600 font-semibold">
                        August 2025 | 1st Edition
                    </p>
                </div>

                <div className="mb-12 text-justify">
                    <h2 className="text-2xl font-semibold mb-6">About the Competition</h2>
                    <p className="text-lg mb-4">
                        The 1st National Article Writing Competition on the Insolvency and Bankruptcy Code (IBC),
                        organized by CTRCR at MNLU Mumbai, aims to foster in-depth research and critical thinking
                        on insolvency law. It offers students a platform to enhance their analytical and writing
                        skills, propose innovative legal solutions, and engage with practical challenges in IBC.
                    </p>
                    <p className="text-lg mb-4">
                        The competition bridges academia and practice through a workshop and internship opportunities,
                        while recognizing and rewarding emerging talent in this dynamic field. Participants are
                        encouraged to explore evolving jurisprudence, address systemic gaps, and contribute original
                        perspectives that could inform future legal and policy reforms.
                    </p>
                    <p className="text-lg mb-4">
                        With a focus on academic rigour and practical relevance, the competition aspires to shape
                        a new generation of insolvency law experts.
                    </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Online Workshop</h2>
                    <p className="text-lg mb-4">
                        <span className="font-semibold">Date:</span> 10th August 2025
                    </p>
                    <p className="text-lg mb-4">
                        An exclusive online workshop on the Insolvency and Bankruptcy Code will accompany the
                        article writing competition, offering participants in-depth insights into key provisions,
                        recent amendments, landmark judgments, and practical aspects of the IBC.
                    </p>
                    <p className="text-lg mb-4">
                        Led by eminent legal practitioners, academics, and insolvency professionals, the workshop
                        will provide valuable theoretical and practical perspectives. Both students and legal
                        professionals are eligible to participate in the workshop.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                        Note: Participants in the Competition need not pay the registration fees for the Online Workshop.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Competition Document</h2>
                    <div className="flex justify-center">
                        <a
                            href="/article-competition/National-Article-Writing-Competitioni.pdf"
                            target="_blank"
                            className="block p-6 border rounded-lg text-center hover:bg-gray-50 transition duration-300 max-w-sm"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <Image
                                    // src="/blog_logo.png"
                                    src="/article-competition/National.jpg"
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
                                <span className="font-semibold">Eligibility:</span> Open to all students currently pursuing
                                undergraduate law degrees from any recognised university/college in India
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Last Date of Registration:</span> 20th July 2025
                            </p>
                            <div className="flex flex-col md:flex-row md:items-start">
                                <span className="font-semibold md:w-48">Registration Fees:</span>
                                <div className="space-y-2">
                                    <div>INR 300 - Single authorship</div>
                                    <div>INR 500 - Co-authorship (max 2 authors)</div>
                                </div>
                            </div>
                            <p className="text-lg">
                                <span className="font-semibold">Article Submission Deadline:</span> 31st July 2025
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-green-600">Online Workshop</h3>
                        <div className="space-y-3">
                            <p className="text-lg">
                                <span className="font-semibold">Date:</span> 10th August 2025
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Last Date of Registration:</span> 5th August 2025
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold">Registration Fee:</span> INR 200 (Free for competition participants)
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center">
                        <span className="font-semibold md:w-48">Registration Link:</span>
                        <a
                            href="https://forms.gle/GznQ5o3HQwc3SkZ19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            https://forms.gle/GznQ5o3HQwc3SkZ19
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
                                Interfacing the IBC with Sectoral Laws
                            </h3>
                            <p className="text-gray-700">
                                Harmonizing Legal Regimes like RERA, PMLA, Competition Act and other statutes for Effective Insolvency Resolution
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Resolving the Dilemma of Dissent
                            </h3>
                            <p className="text-gray-700">
                                Rethinking the Treatment of dissenting Creditors in Indian Insolvency Law
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Enhancing CIRP Transparency and Professional Integrity
                            </h3>
                            <p className="text-gray-700">
                                India's New IBBI Amendments of 2025
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Recalibrating Insolvency Norms
                            </h3>
                            <p className="text-gray-700">
                                The Interface Between the Aircraft Objects Act, 2025 and the IBC
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                Commercial Wisdom vs. Judicial Review
                            </h3>
                            <p className="text-gray-700">
                                Defining Boundaries under the IBC
                            </p>
                        </div>

                        <div className="p-6 border rounded-lg bg-white shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 text-blue-600">
                                From Full Entity to Asset-Wise Resolution
                            </h3>
                            <p className="text-gray-700">
                                A New Phase in IBC Implementation
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 p-8 rounded-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Awards & Recognition</h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-green-600 text-2xl mr-3">🏆</span>
                            <div>
                                <h3 className="font-semibold text-lg">Top 5 Submissions</h3>
                                <p className="text-gray-700">Will be published in the Journal on Corporate Law and Commercial Regulations and receive Certificates of Merit</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-green-600 text-2xl mr-3">💼</span>
                            <div>
                                <h3 className="font-semibold text-lg">Top 3 Submissions</h3>
                                <p className="text-gray-700">Authors will receive a 4-week internship opportunity with a Law Firm</p>
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
                                    <li>• File name should be the article title</li>
                                    <li>• Include 150-200 word abstract</li>
                                    <li>• Article length: 2500-3500 words (excluding footnotes)</li>
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
                                    <p> <img src="/linkedin_logo.png" width={22} alt="LinkedIn" className="inline-block mr-2" /> <a href="https://www.linkedin.com/in/ctrcr-centre-for-training-and-research-in-commercial-regulations-895a8024a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a></p>
                                    <p> <img src="/instagram-logo.png" width={22} alt="Instagram" className="inline-block mr-2" /> <a href="https://www.instagram.com/ctrcr_mnlu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Instagram</a></p>
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
