module.exports = {
	siteUrl: 'https://www.ctrcr.com/',
	generateRobotsTxt: true,
	exclude: ['/admin/*', '/api/*'],
	additionalPaths: async (config) => {
		// Fetch blog posts for dynamic sitemap generation
		try {
			const response = await fetch(`${config.siteUrl}/api/v1/blogs`);
			const data = await response.json();
			
			if (data.success && data.data) {
				return data.data
					.filter(blog => blog.approved) // Only include approved blogs
					.map(blog => ({
						loc: `/fccl/${blog.slug || blog.blogId}`,
						changefreq: 'weekly',
						priority: 0.8,
						lastmod: new Date(blog.date).toISOString(),
					}));
			}
		} catch (error) {
			console.error('Error fetching blogs for sitemap:', error);
		}
		return [];
	},
};
