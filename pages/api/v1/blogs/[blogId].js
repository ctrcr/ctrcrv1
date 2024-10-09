import Blogs from "@/utils/models/blogs.model";
import DBInstance from "@/utils/db";

DBInstance();

export default async function handler(req, res) {
  const { blogId } = req.query;

  if (req.method === "GET") {
    try {
      const blog = await Blogs.findOne({ blogId });

      if (!blog) {
        return res
          .status(404)
          .json({ success: false, error: "Blog not found" });
      }

      res.status(200).json({ success: true, data: blog });
    } catch (error) {
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
