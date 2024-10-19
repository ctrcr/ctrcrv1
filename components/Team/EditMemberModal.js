import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CldUploadButton } from "next-cloudinary";

const EditMemberModal = ({
  isOpen,
  onClose,
  member,
  onSubmit,
  onDelete,
  positions = [],
}) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    isCurrent: false,
    index: 100,
    position: "",
    memberID: "",
  });

  const [customPosition, setCustomPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatedPositions, setUpdatedPositions] = useState(positions);

  useEffect(() => {
    if (member) {
      setFormData({
        image: member.image || "",
        name: member.name || "",
        isCurrent: member.isCurrent || false,
        index: member.index || 0,
        position: member.position || "",
        memberID: member.memberID || "",
      });
      setCustomPosition(member.position === "other" ? "" : member.position);
    }
  }, [member]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "position" && value !== "other") {
      setCustomPosition("");
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCustomPositionChange = (e) => {
    setCustomPosition(e.target.value);
  };

  const handleSetCustomPosition = () => {
    if (customPosition && !updatedPositions.includes(customPosition)) {
      setUpdatedPositions((prevPositions) => [
        ...prevPositions,
        customPosition,
      ]);
    }
    setFormData((prevData) => ({
      ...prevData,
      position: customPosition,
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
      await onSubmit({
        ...formData,
        position:
          formData.position === "other" ? customPosition : formData.position,
      });
      onClose();
    } catch (error) {
      console.error("Error updating member:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (member) {
      try {
        setLoading(true);
        await onDelete(member.memberID);
        onClose();
      } catch (error) {
        console.error("Error deleting member:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
    }
  };

  if (!isOpen || !member) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 text-5xl"
          onClick={handleClose}
          disabled={loading}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Edit Member</h2>
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
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            >
              <option value="">Select a position</option>
              {updatedPositions.length > 0 ? (
                updatedPositions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))
              ) : (
                <option disabled>No positions available</option>
              )}
              <option value="other">Other (type below)</option>
            </select>
            {formData.position === "other" && (
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  value={customPosition}
                  onChange={handleCustomPositionChange}
                  placeholder="Type your position"
                  className="border border-gray-300 rounded p-2 w-full"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={handleSetCustomPosition}
                  className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  disabled={loading}
                >
                  Set
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Member"}
          </button>
        </form>
        <button
          onClick={handleDelete}
          className={`mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete Member"}
        </button>
      </div>
    </div>,
    document.body
  );
};

export default EditMemberModal;
