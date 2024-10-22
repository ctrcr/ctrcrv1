import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CldUploadButton } from "next-cloudinary";
import axios from "axios";

const EditEventModal = ({ isOpen, onClose, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [gallery, setGallery] = useState(initialFormData.gallery || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      const formattedDate = new Date(initialFormData.date)
        .toISOString()
        .split("T")[0];
      setFormData({ ...initialFormData, date: formattedDate });
      setGallery(initialFormData.gallery || []);
    }
  }, [isOpen, initialFormData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoverImageUpload = (result) => {
    const uploadedImageUrl = result.info.secure_url;
    setFormData((prevData) => ({
      ...prevData,
      image: uploadedImageUrl,
    }));
  };

  const handleGalleryImageUpload = (result) => {
    if (gallery.length >= 3) return;
    const uploadedImageUrl = result.info.secure_url;
    setGallery((prevGallery) => [...prevGallery, uploadedImageUrl]);
  };

  const handleRemoveGalleryImage = (index) => {
    const updatedGallery = gallery.filter((_, i) => i !== index);
    setGallery(updatedGallery);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const updatedEvent = { ...formData, gallery };
      await axios.put(`/api/v1/events/${formData.eventID}`, updatedEvent);
      onClose();
    } catch (error) {
      console.error("Error updating event:", error);
      setError("Failed to update event");
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 text-5xl"
          onClick={onClose}
          disabled={loading}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CldUploadButton
              options={{ multiple: false, sources: ["local"] }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_EVENTS_PRESET}
              onSuccess={handleCoverImageUpload}
              className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              <span className="text-md">
                {formData.image ? "Change Cover Image" : "Upload Cover Image"}
              </span>
            </CldUploadButton>
          </div>
          {formData.image && (
            <img
              src={formData.image}
              alt="Uploaded Cover"
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
          )}

          <div className="mb-4">
            <CldUploadButton
              options={{ multiple: true, sources: ["local"] }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_EVENTS_PRESET}
              onSuccess={handleGalleryImageUpload}
              className={`${
                gallery.length >= 3 ? "bg-gray-500" : "bg-blue-700"
              } hover:bg-blue-500 text-white font-bold py-2 px-4 rounded`}
              disabled={gallery.length >= 3}
            >
              <span className="text-md">
                {gallery.length >= 3
                  ? "Maximum of 3 images reached"
                  : "Upload Gallery Images"}
              </span>
            </CldUploadButton>
          </div>

          {gallery.length > 0 && (
            <div className="mb-4">
              <h3 className="text-md font-semibold">Gallery Images</h3>
              <div className="grid grid-cols-3 gap-2">
                {gallery.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="rounded-lg w-full h-32 object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      onClick={() => handleRemoveGalleryImage(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-2">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Event Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Registration Link</label>
            <input
              type="text"
              name="regLink"
              value={formData.regLink}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Event"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EditEventModal;
