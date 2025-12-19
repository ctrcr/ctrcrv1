import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
	generateTeamSchema,
	generateBreadcrumbSchema,
} from '@/utils/seoHelpers';
import TeamCard from '@/components/Team/TeamCard';

export default function BoardAdvisors() {
	const teamMembers = [
		{
			domain: 'Board of Advisors',
			style: 'w-64',
			members: [
				{
					name: 'Dr. Kiran Rai',
					role: 'Professor, RMLNLU',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1729368375/gytlorsgb5fpfheqcw1x.jpg', // Placeholder - needs to be replaced with actual Dr. Kiran Rai image
				},
				{
					name: 'Sandeep Parekh',
					role: 'Founding Partner, Finsec Law Advisors',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284516/Sandeep_Parekh_zviyaz.jpg',
				},
				{
					name: 'Sahil Kanuga',
					role: 'Partner, Cyril Amarchand Mangaldas',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284644/Sahil_Kanuga_sklmat.jpg',
				},
				{
					name: 'Smriti Yadav',
					role: 'Partner, Khaitan & Co.',
					img: 'https://res.cloudinary.com/daagkkrlr/image/upload/v1732284461/Smriti_Yadav_yzfzb8.jpg',
				},
				{
					name: 'Prof. Anurag Agarwal',
					role: 'Faculty, Indian Institute of Management, Ahmedabad',
					img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg', // Placeholder - needs actual image
				},
				{
					name: 'Kosha Thaker',
					role: 'Partner, Trilegal',
					img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg', // Placeholder - needs actual image
				},
				{
					name: 'Avaantika Kakker',
					role: 'Partner, Cyril Amarchand Mangaldas',
					img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg', // Placeholder - needs actual image
				},
				{
					name: 'Vandana Pai',
					role: 'Partner, Bharucha & Partners',
					img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg', // Placeholder - needs actual image
				},
				{
					name: 'Biplab Lenin',
					role: 'Partner, Cyril Amarchand Mangaldas',
					img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg', // Placeholder - needs actual image
				},
				{
					name: 'Dr. Milind Antani',
					role: 'Partner, Nishith Desai Associates',
					img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg', // Placeholder - needs actual image
				},
				{
					name: 'Satyam Sharma',
					role: '',
					img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg', // Placeholder - needs actual image
				},
			],
		},
	];

	// Generate dynamic SEO data
	const allMembers = teamMembers.flatMap((group) => group.members);
	const memberNames = allMembers.map((member) => member.name).join(', ');
	const totalAdvisors = teamMembers[0].members.length;

	return (
		<>
			<Head>
				<title>
					Journal Board of Advisors | Corporate Law Journal - CTRCR
				</title>
				<meta
					name="description"
					content={`Meet our distinguished board of ${totalAdvisors} advisors for the Journal on Corporate Law and Commercial Regulations. Leading experts including ${memberNames
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
					content="Journal Board of Advisors - CTRCR"
				/>
				<meta
					property="og:description"
					content={`Distinguished board of ${totalAdvisors} advisors for our corporate law journal`}
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

						<div className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 sm:gap-12 gap-6 text-center">
							{members.map(({ name, role, img }, memberIndex) => (
								<TeamCard
									key={memberIndex}
									image={img}
									name={role ? `${name}\n${role}` : name}
								/>
							))}
						</div>
					</motion.div>
				))}
			</section>
		</>
	);
}
