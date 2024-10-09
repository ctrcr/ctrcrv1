import Blogs from "@/utils/models/blogs.model";
import DBInstance from "@/utils/db";

DBInstance();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const blogs = await Blogs.find({ approved: true });

      res.status(200).json({ success: true, data: blogs });
    } catch (error) {
      console.error("Error fetching approved blogs:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
