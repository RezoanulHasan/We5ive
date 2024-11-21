import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative  mt-6 bg-gray-800 text-white py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/6166ZCF/physics-background-hdye0j7hmn60ay6z.jpg')",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">Email: rezoanulhasan96@gmail.com</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/riad.hasan.7524/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook size="24" />
              </a>
              <a
                href="https://www.linkedin.com/in/rezoanul-hasan-6ab158240"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size="24" />
              </a>
              <a
                href="https://www.linkedin.com/in/rezoanul-hasan-6ab158240"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size="24" />
              </a>
              <a
                href="https://www.linkedin.com/in/rezoanul-hasan-6ab158240"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin size="24" />
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-col items-center md:items-start animate-fade-in-up delay-200">
            <h3 className="text-lg font-semibold mb-4">Additional Links</h3>
            <a
              href="#"
              className="mb-2 text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="mb-2 text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </div>

          {/* Copyright Information */}
          <div className="flex flex-col items-center md:items-start animate-fade-in-up delay-400">
            <h3 className="text-lg font-semibold mb-4">
              {" "}
              App<span className="text-teal-600 ">Name</span>
            </h3>
            <p className="mb-2">© 2025 LostLocator. All rights reserved.</p>
            <p>Powered by Rezoanul Hasan.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
