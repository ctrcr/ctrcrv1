import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const cloudPresetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;

const BlogEditor = ({ onSave }) => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [approved, setApproved] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      author,
      content,
      image: imageUrl,
      date: new Date(),
      approved,
      blogId: String(Date.now()),
    };

    console.log("formData:", formData);

    try {
      const response = await axios.post("/api/v1/blogs", formData);
      if (response.data.success) {
        onSave();
      }
    } catch (error) {
      console.error("Error saving blog:", error.response.data);
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
      style: {
        listStyleType: "disc",
      },
      events: {
        afterCommand: (command) => {
          if (
            command === "insertOrderedList" ||
            command === "insertUnorderedList"
          ) {
            const editor = editorRef.current?.editor;
            if (editor) {
              editor.s.focus();
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
      <div className="">
        <CldUploadButton
          options={{
            multiple: false,
            sources: ["local"],
          }}
          uploadPreset={cloudPresetName}
          onSuccess={(result) => {
            console.log("Upload result:", result);
            const uploadedImageUrl = result.info.secure_url;
            setImageUrl(uploadedImageUrl);
          }}
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <span className="text-2xl">
            {imageUrl ? "Change Cover Photo" : "Upload Cover Photo"}
          </span>
        </CldUploadButton>
      </div>

      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" className="h-48 object-cover" />
      )}

      <div>
        <span>Approved: </span>
        <label className="mr-4">
          <input
            type="radio"
            value="yes"
            checked={approved === true}
            onChange={() => setApproved(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={approved === false}
            onChange={() => setApproved(false)}
          />
          No
        </label>
        <br />
        <strong className="text-red-700">
          IF SELECTED YES THEN BLOG WILL LIVE ON WEBSITE, PLEASE PREVIEW BEFORE
          APPROVING
        </strong>
      </div>

      <JoditEditor
        ref={editorRef}
        value={content}
        onBlur={(newContent) => setContent(newContent)}
        config={config}
        className="border rounded"
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Blog
      </button>
    </form>
  );
};

export default BlogEditor;
