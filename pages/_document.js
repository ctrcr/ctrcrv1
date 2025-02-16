import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>
					CTRCR | Mumbai National Law University - Corporate &
					Commercial Law Research
				</title>
				<meta charSet="UTF-8" />
				<meta
					httpEquiv="X-UA-Compatible"
					content="IE=edge"
				/>
				<meta
					name="language"
					content="English"
				/>
				<meta
					name="theme-color"
					content="#000000"
				/>
				<meta
					name="robots"
					content="index, follow"
				/>
				<meta
					name="googlebot"
					content="index, follow"
				/>
				<meta
					name="bingbot"
					content="index, follow"
				/>
				<meta
					name="msnbot"
					content="index, follow"
				/>
				<meta
					name="alexabot"
					content="index, follow"
				/>
				<meta
					name="slurp"
					content="index, follow"
				/>
				<meta
					name="yahoobot"
					content="index, follow"
				/>
				<meta
					name="webcrawlers"
					content="index, follow"
				/>
				<meta
					name="spiders"
					content="index, follow"
				/>
				<meta
					name="google-site-verification"
					content="google-site-verification= "
				/>

				{/* Keywords for SEO */}
				<meta
					name="keywords"
					content="CTRCR, FCCL, Corporate Law, Commercial Law, Trade Law, MNLU Mumbai, MNLU, Corporate governance, Corporate research, Commercial Law Blog, Client Counselling Competition, MNLUM-NCCC"
				/>

				{/* Open Graph Meta Tags for Social Media */}
				<meta
					property="og:site_name"
					content="Center for Training and Research in Commercial Regulations - Mumbai National Law University"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://www.ctrcr.com/"
				/>
				<meta
					property="og:image"
					content="/ctrcr_logo.png"
				/>
				<meta
					property="og:description"
					content="Welcome to the Center for Training and Research in Commercial Regulations at Mumbai National Law University. We provide an environment for corporate law research, discussions, and training."
				/>

				{/* Canonical URL */}
				<link
					rel="canonical"
					href="https://www.ctrcr.com/"
				/>

				{/* Favicon */}
				<link
					rel="shortcut icon"
					href="/ctrcr_logo.png"
				/>
				<link
					rel="icon"
					href="/ctrcr_logo.png"
				/>
				<link
					rel="apple-touch-icon"
					href="/ctrcr_logo.png"
				/>

				{/* Google Fonts */}
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>

				{/* SEO Description */}
				<meta
					name="description"
					content="CTRCR at Mumbai National Law University focuses on corporate and commercial law research, training, and policy discussions."
				/>

				{/* Structured Data (Schema.org) */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'http://schema.org',
							'@type': 'CollegeOrUniversity',
							'name': 'Mumbai National Law University',
							'alternateName': 'MNLU Mumbai',
							'url': 'https://www.mnlumumbai.edu.in/',
							'logo': '/mnlu_logo.png',
							'sameAs': [
								'https://www.facebook.com/mnlumumbai',
								'https://twitter.com/mnlumumbai',
								'https://www.linkedin.com/school/mnlumumbai/',
							],
							'department': {
								'@type': 'EducationalOrganization',
								'name': 'Center for Training and Research in Commercial Regulations',
								'alternateName': 'CTRCR',
								'url': 'https://www.ctrcr.com/',
								'email': 'mailto:ctrcr@mnlumumbai.edu.in',
								'logo': '/ctrcr_logo.png',
							},
						}),
					}}></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
