import React from 'react';

import Head from 'next/head';

import JournalSlider from '@/components/Journal/JournalSlider';

import GuideLines from '@/components/Journal/GuideLines';

import {
	generateBreadcrumbSchema,
	generateOrganizationSchema,
} from '@/utils/seoHelpers';

const JournalPage = () => {
	return (
		<>
			<Head>
				<title>
					Journal on Corporate Law and Commercial Regulations | CTRCR
				</title>

				<meta
					name="description"
					content="The Journal on Corporate Law and Commercial Regulations, established in 2023, is a bi-annual publication dedicated to advancing research in corporate law and commercial regulations. Submit your scholarly articles for peer review."
				/>

				<meta
					name="keywords"
					content="corporate law journal, commercial regulations journal, legal journal, academic journal, law review, legal research, scholarly articles, corporate law research, legal publication"
				/>

				{/* Open Graph Tags */}

				<meta
					property="og:title"
					content="Journal on Corporate Law and Commercial Regulations - CTRCR"
				/>

				<meta
					property="og:description"
					content="Bi-annual journal dedicated to advancing research in corporate law and commercial regulations"
				/>

				<meta
					property="og:type"
					content="website"
				/>

				<meta
					property="og:url"
					content="https://www.ctrcr.com/journal"
				/>

				<meta
					property="og:image"
					content="https://www.ctrcr.com/ctrcr_logo.png"
				/>

				{/* Twitter Card Tags */}

				<meta
					name="twitter:card"
					content="summary_large_image"
				/>

				<meta
					name="twitter:title"
					content="Journal on Corporate Law - CTRCR"
				/>

				<meta
					name="twitter:description"
					content="Bi-annual journal for corporate law and commercial regulations research"
				/>

				<meta
					name="twitter:image"
					content="https://www.ctrcr.com/ctrcr_logo.png"
				/>

				{/* Structured Data */}

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',

							'@type': 'Periodical',

							'name': 'Journal on Corporate Law and Commercial Regulations',

							'description':
								'Bi-annual publication dedicated to advancing research in corporate law and commercial regulations',

							'publisher': generateOrganizationSchema(),

							'issn': '2023-CTRCR',

							'url': 'https://www.ctrcr.com/journal',
						}),
					}}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							generateBreadcrumbSchema([
								{ name: 'Home', url: 'https://www.ctrcr.com' },

								{
									name: 'Journal',
									url: 'https://www.ctrcr.com/journal',
								},
							])
						),
					}}
				/>
			</Head>

			<div className="min-h-screen pt-16 lg:pt-20 bg-[#EBEBEB] mt-10 font-serif">
				<div className="container mx-auto px-4 lg:px-8 lg:py-8 pt-2">
					<h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
						<hr className="w-16 h-1 bg-black" />

						<span className="font-bold ">JOURNAL</span>

						<div className={'flex justify-end font-bold'}>
							<hr className="w-16 h-1 bg-black " />
						</div>
					</h2>
				</div>

				<section className="container mx-auto px-4 lg:px-8 lg:py-8 pt-2 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center text-black">
					<div className="text-justify">
						<h2 className="text-3xl lg:text-4xl font-semibold mb-4 hidden lg:block">
							About Journal
						</h2>

						<p className="text-sm lg:text-xl mb-6">
							The Journal on Corporate Law and Commercial
							Regulations, established in 2023, is dedicated to
							advancing research in corporate law and commercial
							regulations. Our goal is to provide a platform for
							scholars, practitioners, and students to share
							insights and expertise.
						</p>

						<p className="text-sm lg:text-xl mb-6">
							Published bi-annually, our journal emphasizes
							high-quality scholarly articles and rigorous peer
							review. We welcome contributions that contribute to
							the understanding of commercial and corporate laws.
						</p>

						<p className="text-sm lg:text-xl">
							Join us in our mission to promote knowledge and
							innovation in the field. Submit your work and become
							part of our vibrant community.
						</p>
					</div>

					<div className="rounded-md shadow-md bg-gradient-to-r bg-black text-white p-8 flex flex-col items-center justify-center">
						<h2 className="text-3xl lg:text-4xl font-semibold mb-4">
							Call for Papers
						</h2>

						<p className="text-lg lg:text-xl mb-6">
							Volume I, Issue II is out now! Share your research
							and insights with our global audience. Let your
							voice be heard.
						</p>

						<button>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSefZqpe5oHrcXdvPtPSMQrT-3Bikgw9WKOiIWq0DoUOQ_lwmg/viewform?pli=1"
								className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-600 hover:text-white transition duration-300">
								SUBMIT YOUR PAPER
							</a>
						</button>
					</div>
				</section>

				<div className="flex justify-around"></div>

				<GuideLines />

				<div>
					<div className="container mx-auto px-4 lg:px-8 lg:py-8 pt-2">
						<h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
							<hr className="w-16 h-1 bg-black" />

							<span className="font-bold ">ISSUES</span>

							<div className={'flex justify-end  font-bold'}>
								<hr className="w-16 h-1 bg-black " />
							</div>
						</h2>
					</div>

					<div>
						{' '}
						<div className="flex max-md:flex-col w-[80%] mx-auto gap-5 items-center justify-evenly max-md:gap-4 my-16 max-sm:mt-12 ">
							<div className="rounded-md w-[80%] max-md:w-[100%] shadow-md bg-gradient-to-r bg-black text-white p-8 flex flex-col items-center justify-center">
								<h2 className="text-2xl lg:text-4xl font-semibold mb-12">
									VOLUME I, ISSUE I
								</h2>

								<a
									href="https://ik.imagekit.io/ctrcr/PDF/Volume%201%20Issue%201.pdf?updatedAt=1712685237604"
									target="_blank"
									className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-600 hover:text-white transition duration-300">
									DOWNLOAD NOW
								</a>
							</div>

							<div className="rounded-md w-[80%] max-md:w-[100%] shadow-md bg-gradient-to-r bg-black text-white p-8 flex flex-col items-center justify-center">
								<h2 className="text-2xl lg:text-4xl font-semibold mb-12">
									VOLUME I, ISSUE II
								</h2>

								<a
									href="https://ik.imagekit.io/ctrcr/PDF/Vol%201%20Issue%20II%20Updated.pdf?updatedAt=1718186589867"
									target="_blank"
									className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-600 hover:text-white transition duration-300">
									DOWNLOAD NOW
								</a>
							</div>
							<div className="rounded-md w-[80%] max-md:w-[100%] shadow-md bg-gradient-to-r bg-black text-white p-8 flex flex-col items-center justify-center">
								<h2 className="text-2xl lg:text-4xl font-semibold mb-12">
									VOLUME II, ISSUE I
								</h2>

								<a
									href="/journal/Vol 2 Issue 2.pdf"
									target="_blank"
									className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-600 hover:text-white transition duration-300">
									DOWNLOAD NOW
								</a>
							</div>
							<div className="rounded-md w-[80%] max-md:w-[100%] shadow-md bg-gradient-to-r bg-black text-white p-8 flex flex-col items-center justify-center">
								<h2 className="text-2xl lg:text-4xl font-semibold mb-12">
									VOLUME II, ISSUE II
								</h2>

								<a
									href="/journal/Vol 2 Issue 2.pdf"
									target="_blank"
									className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-600 hover:text-white transition duration-300">
									DOWNLOAD NOW
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 lg:px-8 lg:py-8 pt-2">
					<h2 className="text-5xl font-semibold mb-2 tracking-wide w-fit">
						<hr className="w-16 h-1 bg-black" />

						<span className="font-bold ">ARTICLES</span>

						<div className={'flex justify-end  font-bold'}>
							<hr className="w-16 h-1 bg-black " />
						</div>
					</h2>
				</div>

				{/* Slider */}

				<div className="container mx-auto">
					<JournalSlider />
				</div>
			</div>
		</>
	);
};

export default JournalPage;
