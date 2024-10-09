import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import Jodit
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const BlogEditor = ({ onSave }) => {
  const editorRef = useRef(null); // Create a ref for the editor
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Store the image URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      author,
      content, // Ensure the content with text and images is saved in HTML format
      image: imageUrl, // Use the image URL instead of file upload
      date: new Date(),
      approved: true,
      blogId: String(Date.now()),
    };

    console.log(formData);

    // Uncomment this for real API calls
    // try {
    //   const response = await axios.post("/api/v1/blogs", formData);
    //   if (response.data.success) {
    //     onSave();
    //   }
    // } catch (error) {
    //   console.error("Error saving blog:", error);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        className="w-full p-2 border rounded"
      />
      <JoditEditor
        ref={editorRef} // Attach the ref to the editor
        value={content}
        onBlur={(newContent) => setContent(newContent)} // Update content onBlur to prevent cursor issues
        config={{
          buttons: [
            "bold",
            "italic",
            "underline",
            "link",
            "image",
            "source",
            "clean",
            "paragraph",
            "list",
            "align",
          ],
          uploader: {
            insertImageAsBase64URI: true, // Upload images as base64
          },
          events: {
            beforeCommand: (command) => {
              // Ensure images are inserted at the cursor position
              if (command === "insertImage") {
                const editor = editorRef.current?.editor;
                if (editor) {
                  editor.s.insertHTML(`<img src="${imageUrl}" alt=""/>`);
                }
              }
            },
          },
          placeholder: "Start writing your blog...",
          height: 400,
        }}
        className="border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save Blog
      </button>
    </form>
  );
};

export default BlogEditor;
