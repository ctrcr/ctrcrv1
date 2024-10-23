import Events from "@/utils/models/events.model";
import DBInstance from "@/utils/db";
DBInstance();

export default async function handler(req, res) {
  const { eventID } = req.query;

  if (req.method === "GET") {
    try {
      const event = await Events.findOne({ eventID });

      if (!event) {
        return res
          .status(404)
          .json({ success: false, error: "Event not found" });
      }

      res.status(200).json({ success: true, data: event });
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedEvent = await Events.findOneAndUpdate(
        { eventID },
        { $set: req.body },
        { new: true }
      );

      if (!updatedEvent) {
        return res
          .status(404)
          .json({ success: false, error: "Event not found" });
      }

      res.status(200).json({ success: true, data: updatedEvent });
    } catch (error) {
      console.error("Error updating event:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedEvent = await Events.findOneAndDelete({ eventID });

      if (!deletedEvent) {
        return res
          .status(404)
          .json({ success: false, error: "Event not found" });
      }

      res.status(200).json({ success: true, data: deletedEvent });
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
