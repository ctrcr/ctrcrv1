import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const EditMemberModal = ({ isOpen, onClose, member, onSubmit, onDelete }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    isCurrent: false,
    index: 0,
    position: "",
    memberID: "",
  });

  const [loading, setLoading] = useState(false);

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
    }
  }, [member]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
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

  if (!isOpen) return null;

  if (!member) {
    onClose();
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 text-xl"
          onClick={handleClose}
          disabled={loading}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Edit Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
              disabled={loading}
            />
          </div>
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
              <span className="ml-2">Is Current</span>
            </label>
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
