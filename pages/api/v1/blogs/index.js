import Blogs from "@/utils/models/blogs.model";
import DBInstance from "@/utils/db";

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
      const { title, content, image, author, description } = req.body;

      if (!title || !content || !image || !author || !description) {
        return res
          .status(400)
          .json({ success: false, error: "All fields are required." });
      }

      const newBlog = new Blogs({
        title,
        content,
        image,
        author,
        description,
        date: new Date(),
        approved: true,
        blogId: Date.now(),
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
