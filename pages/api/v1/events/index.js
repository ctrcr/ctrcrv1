import Events from "@/utils/models/events.model";
import DBInstance from "@/utils/db";
DBInstance();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const events = await Events.find().sort({ date: -1 });

      res.status(200).json({ success: true, data: events });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
