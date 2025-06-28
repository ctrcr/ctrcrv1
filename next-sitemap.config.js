module.exports = {
	siteUrl: 'https://www.ctrcr.com/',
	generateRobotsTxt: true,
	exclude: ['/admin/*', '/api/*'],
	generateIndexSitemap: false,
	additionalPaths: async (config) => {
		const paths = [];
		
		// Fetch blog posts for dynamic sitemap generation
		try {
			const response = await fetch(`${config.siteUrl}/api/v1/blogs`);
			const data = await response.json();
			
			if (data.success && data.data) {
				const blogPaths = data.data
					.filter(blog => blog.approved) // Only include approved blogs
					.map(blog => ({
						loc: `/fccl/${blog.slug || blog.blogId}`,
						changefreq: 'weekly',
						priority: 0.8,
						lastmod: new Date(blog.date).toISOString(),
					}));
				paths.push(...blogPaths);
			}
		} catch (error) {
			console.error('Error fetching blogs for sitemap:', error);
		}
		
		return paths;
	},
	transform: async (config, path) => {
		// Customize individual page priorities and frequencies
		const customConfig = {
			'/': { priority: 1.0, changefreq: 'daily' },
			'/team': { priority: 0.9, changefreq: 'weekly' },
			'/events': { priority: 0.9, changefreq: 'weekly' },
			'/books': { priority: 0.9, changefreq: 'monthly' },
			'/fccl': { priority: 0.9, changefreq: 'daily' },
			'/fccl/editorial-board': { priority: 0.8, changefreq: 'monthly' },
			'/journal': { priority: 0.9, changefreq: 'weekly' },
			'/journal/editorial-board': { priority: 0.8, changefreq: 'monthly' },
			'/journal/board-of-advisors': { priority: 0.8, changefreq: 'monthly' },
		};

		const pageConfig = customConfig[path] || { priority: 0.7, changefreq: 'weekly' };

		return {
			loc: path,
			changefreq: pageConfig.changefreq,
			priority: pageConfig.priority,
			lastmod: new Date().toISOString(),
		};
	},
};
