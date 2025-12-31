import Blogs from "@/utils/models/blogs.model";
import DBInstance from "@/utils/db";
import { generateSlug, generateUniqueSlug, generateMetaTitle, generateMetaDescription, calculateReadingTime, extractKeywords } from "@/utils/seoHelpers";

DBInstance();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const blogs = await Blogs.find();
      res.status(200).json({ success: true, data: blogs });
    } catch (error) {
      console.error("Error fetching approved blogs:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { title, content, image, author, description, approved, category, metaTitle, metaDescription, keywords } = req.body;

      if (
        !title ||
        !content ||
        !image ||
        !author ||
        !description ||
        approved === undefined
      ) {
        return res
          .status(400)
          .json({ success: false, error: "All fields are required." });
      }

      // Generate SEO fields automatically
      const baseSlug = generateSlug(title);
      const uniqueSlug = await generateUniqueSlug(baseSlug, Blogs);
      const autoMetaTitle = metaTitle || generateMetaTitle(title);
      const autoMetaDescription = metaDescription || generateMetaDescription(description, title);
      const readingTime = calculateReadingTime(content);
      const autoKeywords = keywords || extractKeywords(title, content);

      const newBlog = new Blogs({
        title,
        content,
        image,
        author,
        description,
        date: new Date(),
        approved,
        blogId: Date.now().toString(),
        slug: uniqueSlug,
        metaTitle: autoMetaTitle,
        metaDescription: autoMetaDescription,
        keywords: autoKeywords,
        category: category || 'Corporate Law',
        readingTime,
        featuredImage: image,
      });

      await newBlog.save();

      res.status(201).json({ success: true, data: newBlog });
    } catch (error) {
      console.error("Error saving blog:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
