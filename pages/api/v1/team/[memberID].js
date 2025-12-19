import Team from "@/utils/models/team.model";
import DBInstance from "@/utils/db";

DBInstance();

export default async function handler(req, res) {
  const { memberID } = req.query;

  if (req.method === "GET") {
    try {
      const member = await Team.findOne({ memberID });

      if (!member) {
        return res
          .status(404)
          .json({ success: false, error: "Team member not found" });
      }

      res.status(200).json({ success: true, data: member });
    } catch (error) {
      console.error("Error fetching team member:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedMember = await Team.findOneAndUpdate(
        { memberID },
        { $set: req.body },
        { new: true }
      );

      if (!updatedMember) {
        return res
          .status(404)
          .json({ success: false, error: "Team member not found" });
      }

      res.status(200).json({ success: true, data: updatedMember });
    } catch (error) {
      console.error("Error updating team member:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedMember = await Team.findOneAndDelete({ memberID });

      if (!deletedMember) {
        return res
          .status(404)
          .json({ success: false, error: "Team member not found" });
      }

      res.status(200).json({ success: true, data: deletedMember });
    } catch (error) {
      console.error("Error deleting team member:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
