import React, { useState } from "react";
import FormFooter from "./FormFooter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <div className="w-[23vw] ">
      {formSuccess ? (
        <div>{formSuccessMessage}</div>
      ) : (
        <div className="">
          <div className="flex flex-col gap-y-5 mb-8">
            <h1 className="text-5xl font-bold">
              Get in <span className="text-gray-600">Touch</span>
            </h1>
            <div>
              <h2 className="text-sm">NLU Mumbai</h2>
              <h2 className="text-sm">Journal</h2>
            </div>
          </div>
          <form
            method="POST"
            action="https://www.formbackend.com/f/664decaabbf1c319"
            onSubmit={submitForm}
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                onChange={handleInput}
                value={formData.name}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInput}
                value={formData.email}
                // required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                onChange={handleInput}
                value={formData.phone}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleInput}
                value={formData.subject}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Type your message here"
                onChange={handleInput}
                value={formData.message}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              ></textarea>
            </div>

            <button
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline- dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 w-[100%] "
              type="submit"
            >
              Send message
            </button>
          </form>
          <FormFooter />
        </div>
      )}
    </div>
  );
}
