import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import FormFooter from "./FormFooter";
import { CONTACT_DETAILS } from "@/data/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (!/^\d{10}$/.test(cleanPhone)) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));

    // Clear error for this field when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ""
      }));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors below");
      return;
    }

    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      // EmailJS configuration
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: CONTACT_DETAILS.ctrcrEmail,
      };

      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      if (result.status === 200) {
        // Dismiss loading toast
        toast.dismiss(loadingToast);

        // Show success toast
        toast.success("Message sent successfully! We'll get back to you soon.", {
          duration: 5000,
          icon: '✅',
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.error('EmailJS Error:', error);

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show error toast
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-3 py-2 border rounded-md text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500";

    if (errors[fieldName]) {
      return `${baseClass} border-red-500 bg-red-50 focus:ring-red-500`;
    }

    return `${baseClass} border-gray-300 focus:border-blue-500`;
  };

  return (
    <div className="lg:w-[23vw]">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#10B981',
            },
          },
          error: {
            style: {
              background: '#EF4444',
            },
          },
        }}
      />

      <div className="">
        <div className="lg:flex flex-col gap-y-5 mb-8 hidden">
          <h1 className="text-5xl font-bold">
            Get in Touch
          </h1>
          <div className="max-lg:flex max-lg:gap-1.5">
            <h2 className="text-sm">MNLU Mumbai</h2>
          </div>
        </div>
        <div className="flex max-lg:block hidden justify-center items-center text-black my-12">
          <h2 className="text-4xl font-semibold mb-2 tracking-wide w-fit">
            <hr className="w-24 h-1 bg-black" />
            <span className="font-bold ">GET IN TOUCH</span>
            <div className={"flex justify-end w-68 font-bold"}>
              <hr className="w-32 h-1 bg-black " />
            </div>
          </h2>
        </div>

        <form onSubmit={submitForm} className="space-y-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              onChange={handleInput}
              value={formData.name}
              className={getInputClassName('name')}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              onChange={handleInput}
              value={formData.email}
              className={getInputClassName('email')}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              onChange={handleInput}
              value={formData.phone}
              className={getInputClassName('phone')}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.phone}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              onChange={handleInput}
              value={formData.subject}
              className={getInputClassName('subject')}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.subject}
              </p>
            )}
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Type your message here *"
              onChange={handleInput}
              value={formData.message}
              rows="4"
              className={getInputClassName('message')}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.message}
              </p>
            )}
          </div>

          <button
            className={`w-full px-5 py-2.5 text-white font-medium rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-2 ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
