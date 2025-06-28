export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

export const generateUniqueSlug = async (baseSlug, BlogModel, excludeId = null) => {
  let slug = baseSlug;
  let counter = 1;
  
  while (true) {
    const existingBlog = await BlogModel.findOne({ 
      slug: slug,
      ...(excludeId && { _id: { $ne: excludeId } })
    });
    
    if (!existingBlog) {
      return slug;
    }
    
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
};

export const generateMetaTitle = (title, maxLength = 60) => {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + '...';
};

export const generateMetaDescription = (description, title, maxLength = 160) => {
  const baseDesc = description || title;
  if (baseDesc.length <= maxLength) return baseDesc;
  return baseDesc.substring(0, maxLength - 3) + '...';
};

export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export const extractKeywords = (title, content) => {
  const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
  const text = (title + ' ' + content.replace(/<[^>]*>/g, '')).toLowerCase();
  const words = text.split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word))
    .filter(word => /^[a-z]+$/.test(word));
  
  const frequency = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  return Object.entries(frequency)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const generateArticleSchema = (blog, siteUrl = 'https://www.ctrcr.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.metaDescription || blog.description,
    "image": blog.featuredImage || blog.image,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "CTRCR - Center for Training and Research in Commercial Regulations",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/ctrcr_logo.png`
      }
    },
    "datePublished": blog.date,
    "dateModified": blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/fccl/${blog.slug}`
    }
  };
};

export const generateOrganizationSchema = (siteUrl = 'https://www.ctrcr.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CTRCR - Center for Training and Research in Commercial Regulations",
    "url": siteUrl,
    "logo": `${siteUrl}/ctrcr_logo.png`,
    "description": "Leading center for training and research in commercial regulations, corporate law, and legal education",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "@addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "general",
      "url": siteUrl
    }
  };
};

export const generatePersonSchema = (person, siteUrl = 'https://www.ctrcr.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "image": person.image,
    "jobTitle": person.position || person.role,
    "worksFor": {
      "@type": "Organization",
      "name": "CTRCR - Center for Training and Research in Commercial Regulations"
    }
  };
};

export const generateTeamSchema = (members, siteUrl = 'https://www.ctrcr.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CTRCR - Center for Training and Research in Commercial Regulations",
    "url": siteUrl,
    "employee": members.map(member => ({
      "@type": "Person",
      "name": member.name,
      "image": member.image,
      "jobTitle": member.position || member.role
    }))
  };
};

export const generateEventSchema = (event, siteUrl = 'https://www.ctrcr.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "image": event.image,
    "startDate": event.date,
    "organizer": {
      "@type": "Organization",
      "name": "CTRCR - Center for Training and Research in Commercial Regulations",
      "url": siteUrl
    },
    "location": {
      "@type": "Organization",
      "name": "CTRCR - Center for Training and Research in Commercial Regulations"
    },
    ...(event.regLink && { url: event.regLink })
  };
};

export const generateBookSchema = (book, siteUrl = 'https://www.ctrcr.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "description": book.description,
    "image": book.coverImage,
    "author": {
      "@type": "Person",
      "name": book.editor
    },
    "publisher": {
      "@type": "Organization",
      "name": "CTRCR - Center for Training and Research in Commercial Regulations"
    },
    "url": `${siteUrl}/books`
  };
}; 