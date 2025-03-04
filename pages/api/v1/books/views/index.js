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
                { $inc: { views: 1 } },
                { new: true, upsert: true }
            );
            console.log("Views updated");
            return res.status(200).json(book);
        } catch (error) {
            return res.status(500).json({ error: "Error updating views" });
        }
    }

    if (req.method === "GET") {
        try {
            const books = await Books.find({}); // Fetch all books from MongoDB

            if (!books || books.length === 0) {
                return res.status(404).json({ error: "No books found" });
            }

            return res.status(200).json(books);
        } catch (error) {
            return res.status(500).json({ error: "Error fetching books" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}