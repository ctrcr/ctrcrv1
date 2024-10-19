import Team from "@/utils/models/team.model";
import DBInstance from "@/utils/db";

DBInstance();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const teamMembers = await Team.find().sort({ index: 1 });
      res.status(200).json({ success: true, data: teamMembers });
    } catch (error) {
      console.error("Error fetching team members:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const { image, name, isCurrent, memberID, index } = req.body;

      if (
        !image ||
        !name ||
        isCurrent === undefined ||
        !memberID ||
        index === undefined
      ) {
        return res
          .status(400)
          .json({ success: false, error: "All fields are required." });
      }

      const newMember = new Team({
        image,
        name,
        isCurrent,
        memberID,
        index,
      });

      await newMember.save();

      res.status(201).json({ success: true, data: newMember });
    } catch (error) {
      console.error("Error adding team member:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
