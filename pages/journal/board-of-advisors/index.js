import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
	generateTeamSchema,
	generateBreadcrumbSchema,
} from '@/utils/seoHelpers';

export default function BoardAdvisors() {
	const teamMembers = [
		{
			domain: 'Board of Advisors',
			style: 'w-64',
			members: [
				{
					name: 'Kapil Sharma',
					role: 'Partner, LKS',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284375/Kapil_Sharma_doeagn.jpg',
				},
				{
					name: 'Samir Malik',
					role: 'Partner, DSK Legal',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284419/Samir_Malik_fgvst6.jpg',
				},
				{
					name: 'Smriti Yadav',
					role: 'Partner, Khaitan',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284461/Smriti_Yadav_yzfzb8.jpg',
				},
				{
					name: 'Sandeep Parekh',
					role: 'Managing Partner, Finsec Law Advisors',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284516/Sandeep_Parekh_zviyaz.jpg',
				},
				{
					name: 'Nitin Podar',
					role: 'Partner, JSA',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284575/Nitin_Podar_jzzods.jpg',
				},
				{
					name: 'Jatin Arora',
					role: 'Private Practice',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284607/Jatin_Arora_vocirf.jpg',
				},
				{
					name: 'Sahil Kanuga',
					role: 'Partner, CAM',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284644/Sahil_Kanuga_sklmat.jpg',
				},
				{
					name: 'Piyush Mishra',
					role: 'Partner, Luthra & Lutha',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284688/Piyush_Mishra_a0p0lq.jpg',
				},
			],
		},
		{
			domain: 'Editorial Board Members',
			style: '',
			members: [
				{
					name: 'Dr. Anindhya Tiwari',
					role: 'Assistant Professor, HNLU',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284756/Anindhya_Tiwari.jpg_xpgxqt.webp',
				},
				{
					name: 'Dr. Rosmy Joan',
					role: 'Assistant Professor, NLUJ',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284803/DrRosmyJoan_fvtp47.png',
				},
				{
					name: 'Prof. Subhash Chandra Roy',
					role: 'Associate Professor, CNLU',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284834/Prof.-S.C.Roy-Dr.-subhash-chandra-Roy_cg8qpd.png',
				},
				{
					name: 'Manoj Kumar',
					role: 'Associate Professor, NLUJ',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732538222/manoj_kumar_ckqaio.png',
				},
				{
					name: 'Janhavee Pise',
					role: 'Alumni, MNLU Mumbai',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284903/Janhavee_Pise_uc8d9q.jpg',
				},
				{
					name: 'Dr. Jeet Singh Maan',
					role: 'Associate Professor, NLUD',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732285018/Dr._Jeet_Singh_Maan_u6go0g.jpg',
				},
				{
					name: 'Dr. Rajesh Kumar',
					role: 'Associate Professor, NISM',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732285051/Dr._Rajesh_Kumar_ytw5nh.jpg',
				},
				{
					name: 'Devashree Nimbhorkar',
					role: 'Practising Advocate',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732285085/Devashree_Nimbhorkar_jtg3bd.jpg',
				},
			],
		},
	];

	// Generate dynamic SEO data
	const allMembers = teamMembers.flatMap((group) => group.members);
	const memberNames = allMembers.map((member) => member.name).join(', ');
	const totalAdvisors = teamMembers[0].members.length;
	const totalEditorial = teamMembers[1].members.length;

	return (
		<>
			<Head>
				<title>
					Journal Board of Advisors & Editorial Board | Corporate Law
					Journal - CTRCR
				</title>
				<meta
					name="description"
					content={`Meet our distinguished board of ${totalAdvisors} advisors and ${totalEditorial} editorial board members for the Journal on Corporate Law and Commercial Regulations. Leading experts including ${memberNames
						.split(', ')
						.slice(0, 5)
						.join(', ')}.`}
				/>
				<meta
					name="keywords"
					content={`journal board advisors, editorial board, corporate law journal, commercial regulations journal, ${memberNames}, legal journal board, law journal editorial`}
				/>

				{/* Open Graph Tags */}
				<meta
					property="og:title"
					content="Journal Board of Advisors & Editorial Board - CTRCR"
				/>
				<meta
					property="og:description"
					content={`Distinguished board of ${
						totalAdvisors + totalEditorial
					} experts for our corporate law journal`}
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.ctrcr.com/journal/board-of-advisors"
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
					content="Journal Board - CTRCR"
				/>
				<meta
					name="twitter:description"
					content={`Distinguished board of experts for our corporate law journal`}
				/>
				<meta
					name="twitter:image"
					content="https://www.ctrcr.com/ctrcr_logo.png"
				/>

				{/* Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(generateTeamSchema(allMembers)),
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
								{
									name: 'Board of Advisors',
									url: 'https://www.ctrcr.com/journal/board-of-advisors',
								},
							])
						),
					}}
				/>
			</Head>

			<section className="min-h-screen px-[4%] max-md:px-[6%] lg:space-y-24 sm:space-y-12 space-y-6 py-20 mt-12">
				{teamMembers.map(({ domain, members }, domainIndex) => (
					<motion.div
						key={domainIndex}
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="lg:space-y-12 sm:space-y-12 space-y-6">
						<h2 className="text-3xl font-semibold mb-2 tracking-wide w-fit">
							<hr className="w-16 h-1 bg-black" />
							<span className="">{domain}</span>
							<div className={`flex justify-end ${domain.style}`}>
								<hr className="w-16 h-1 bg-black " />
							</div>
						</h2>

						<div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 sm:gap-12 gap-6 ">
							{members.map(({ name, role, img }, memberIndex) => (
								<motion.div
									key={memberIndex}
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.5,
										delay: memberIndex * 0.1,
									}}
									className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
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
		</>
	);
}
