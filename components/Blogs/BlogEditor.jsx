import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const BlogEditor = ({ onSave }) => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      author,
      content,
      image: imageUrl,
      date: new Date(),
      approved: true,
      blogId: String(Date.now()),
    };

    // console.log(formData);

    try {
      const response = await axios.post("/api/v1/blogs", formData);
      if (response.data.success) {
        onSave();
      }
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  const config = useMemo(
    () => ({
      autofocus: true,
      uploader: {
        insertImageAsBase64URI: true,
      },
      toolbarSticky: true,
      spellcheck: true,
      enter: "DIV",
      buttons: [
        "bold",
        "italic",
        "underline",
        "font",
        "ul",
        "ol",
        "fontsize",
        "lineHeight",
        "image",
        "align",
        "selectall",
        "copyformat",
        "hr",
        "table",
        "link",
        "indent",
        "outdent",
        "undo",
        "redo",
        "find",
        "source",
        "fullsize",
        "preview",
        "print",
        "brush",
      ].join(","),
      toolbarAdaptive: false,
      placeholder: "Write your blog here...",
      // Enable the default styles for lists
      style: {
        listStyleType: "disc",
      },
      events: {
        // Ensuring that list functionality works as expected
        afterCommand: (command) => {
          if (
            command === "insertOrderedList" ||
            command === "insertUnorderedList"
          ) {
            const editor = editorRef.current?.editor;
            if (editor) {
              editor.s.focus(); // Focus on the editor after the command
            }
          }
        },
      },
    }),
    []
  );

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
        placeholder="Cover Image URL"
        className="w-full p-2 border rounded"
      />
      <JoditEditor
        ref={editorRef}
        value={content}
        onBlur={(newContent) => setContent(newContent)}
        config={config}
        className="border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save Blog
      </button>
    </form>
  );
};

export default BlogEditor;
