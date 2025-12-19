import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blogId: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  metaTitle: {
    type: String,
    required: false,
    maxlength: 60,
  },
  metaDescription: {
    type: String,
    required: false,
    maxlength: 160,
  },
  keywords: {
    type: [String],
    required: false,
  },
  category: {
    type: String,
    required: false,
    enum: ['Corporate Law', 'Commercial Law', 'Trade Law', 'Regulatory Law', 'Research', 'Analysis', 'Case Study', 'Opinion'],
  },
  readingTime: {
    type: Number,
    required: false,
  },
  featuredImage: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogsSchema);

export default Blogs;
