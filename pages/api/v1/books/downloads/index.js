import DBInstance from "@/utils/db";
import mongoose from "mongoose";
import Books from "@/utils/models/books.model";
await DBInstance();

export default async function handler(req, res) {

    if (req.method === "POST") {
        const { bookName } = req.query;

        if (!bookName) return res.status(400).json({ error: "Book name is required" });

        try {
            const book = await Books.findOneAndUpdate(
                { bookName },
                { $inc: { downloads: 1 } },
                { new: true, upsert: true }
            );
            return res.status(200).json(book);
            console.log("Downloads updated");
        } catch (error) {
            return res.status(500).json({ error: "Error updating downloads" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}