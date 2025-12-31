import Blogs from "@/utils/models/blogs.model";
import DBInstance from "@/utils/db";
import { generateSlug, generateUniqueSlug, generateMetaTitle, generateMetaDescription, calculateReadingTime, extractKeywords } from "@/utils/seoHelpers";

DBInstance();

export default async function handler(req, res) {
  const { blogId } = req.query;

  if (req.method === "GET") {
    try {
      // Try to find by slug first, then fall back to blogId for backward compatibility
      let blog = await Blogs.findOne({ slug: blogId });
      if (!blog) {
        blog = await Blogs.findOne({ blogId });
      }

      if (!blog) {
        return res
          .status(404)
          .json({ success: false, error: "Blog not found" });
      }

      res.status(200).json({ success: true, data: blog });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      // Try to find by slug first, then fall back to blogId
      let query = { slug: blogId };
      let blog = await Blogs.findOne(query);
      if (!blog) {
        query = { blogId };
        blog = await Blogs.findOne(query);
      }

      if (!blog) {
        return res
          .status(404)
          .json({ success: false, error: "Blog not found" });
      }

      const updateData = { ...req.body };

      // If title is being updated, regenerate slug and SEO fields
      if (updateData.title && updateData.title !== blog.title) {
        const baseSlug = generateSlug(updateData.title);
        updateData.slug = await generateUniqueSlug(baseSlug, Blogs, blog._id);
        
        // Update SEO fields if not explicitly provided
        if (!updateData.metaTitle) {
          updateData.metaTitle = generateMetaTitle(updateData.title);
        }
        if (!updateData.metaDescription) {
          updateData.metaDescription = generateMetaDescription(updateData.description || blog.description, updateData.title);
        }
      }

      // If content is being updated, recalculate reading time and keywords
      if (updateData.content && updateData.content !== blog.content) {
        updateData.readingTime = calculateReadingTime(updateData.content);
        if (!updateData.keywords) {
          updateData.keywords = extractKeywords(updateData.title || blog.title, updateData.content);
        }
      }

      const updatedBlog = await Blogs.findOneAndUpdate(
        query,
        { $set: updateData },
        { new: true }
      );

      res.status(200).json({ success: true, data: updatedBlog });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
