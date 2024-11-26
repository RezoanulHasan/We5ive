"use client";
import galleryAnimation from "@/components/Hooks/GallerySection";
import { motion } from "framer-motion";
import React, { useState } from "react";

import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. We’ll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section className=" mt-20 ">
        <h2 className="text-3xl font-semibold text-[#6441C2E5] text-center mb-8">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
              variants={galleryAnimation}
              initial="hidden"
              animate="visible"
              loading="lazy"
              src="https://img.freepik.com/free-photo/job-position-beside-employee-portrait_23-2150037698.jpg?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
              alt="Contact Us"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring focus:ring-blue-200"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here"
                  className="border border-gray-300 rounded-lg p-3 shadow-sm focus:ring focus:ring-blue-200 resize-none"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
