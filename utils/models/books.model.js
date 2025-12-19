import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookName: { type: String, unique: true, required: true },
    views: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 }
});

const Books = mongoose.models.Books || mongoose.model("Books", bookSchema);

export default Books;