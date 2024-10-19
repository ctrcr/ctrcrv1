import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CldUploadButton } from "next-cloudinary";

const AddMemberModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    isCurrent: false,
    index: 0,
    position: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (result) => {
    const uploadedImageUrl = result.info.secure_url;
    setFormData((prevData) => ({
      ...prevData,
      image: uploadedImageUrl,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error("Error adding member:", error);
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 text-5xl"
          onClick={onClose}
          disabled={loading}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Add New Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CldUploadButton
              options={{
                multiple: false,
                sources: ["local"],
              }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_TEAM_PRESET_NAME}
              onSuccess={handleImageUpload}
              className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              <span className="text-md">
                {formData.image ? "Change Image" : "Upload Image"}
              </span>
            </CldUploadButton>
          </div>

          {formData.image && (
            <img
              src={formData.image}
              alt="Uploaded"
              className="rounded-lg w-[300px] h-[300px] object-cover mb-4"
            />
          )}

          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isCurrent"
                checked={formData.isCurrent}
                onChange={handleChange}
                className="form-checkbox"
                disabled={loading}
              />
              <span className="ml-2">Is Current Member?</span>
            </label>
            <strong className="ml-2 text-red-500">
              IF SELECTED, MEMBER WILL BE DISPLAYED ON THE WEBSITE
            </strong>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Index</label>
            <input
              type="number"
              name="index"
              value={formData.index}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Member"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default AddMemberModal;
