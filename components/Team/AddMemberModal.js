// AddMemberModal.js
import React, { useState } from "react";
import { createPortal } from "react-dom";

const AddMemberModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    isCurrent: false,
    index: 0,
    position: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Add New Member</h2>
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
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default AddMemberModal;
