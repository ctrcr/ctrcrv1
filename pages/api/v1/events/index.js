import Events from "@/utils/models/events.model";
import DBInstance from "@/utils/db";
DBInstance();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const events = await Events.find().sort({ date: -1 });
      res.status(200).json({ success: true, data: events });
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { title, description, date, regLink, image, gallery, isActive } =
        req.body;

      if (!title || !description || !date || !regLink || !image || !gallery) {
        return res
          .status(400)
          .json({ success: false, error: "All fields are required." });
      }

      const newEvent = new Events({
        title,
        description,
        date,
        regLink,
        image,
        isActive: isActive || true,
        eventID: Date.now().toString(),
        gallery,
      });

      await newEvent.save();
      res.status(201).json({ success: true, data: newEvent });
    } catch (error) {
      console.error("Error adding event:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
