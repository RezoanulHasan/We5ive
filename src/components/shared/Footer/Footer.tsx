"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import MainLogo from "../Navbar/MainLogo";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="relative mt-6 bg-gray-800 text-white py-10">
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

        {/* Footer Content */}
        <div className="relative container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 py-6">
            {/* Logo and Description */}
            <div className="flex flex-col gap-4">
              <MainLogo />
              <p className="text-sm md:text-base">
                Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo
                est consectetur maxime quos fugit velit assumenda est.
              </p>
            </div>

            {/* Newsletter Information */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl md:text-2xl font-semibold     text-[#b6a7dde5]">
                Sign Up For Our Newsletter!
              </h1>
              <p className="text-sm md:text-base">
                Get notified about updates and be the first to get early access
                to new product update
              </p>
              <div className="flex flex-col md:flex-row gap-1">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full md:w-64"
                />
                <button className="btn    button-custom w-full md:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
            {/* Contact Information */}
            <div className="flex flex-col items-center md:items-start animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-2">Email: rezoanulhasan96@gmail.com</p>
            </div>

            {/* Support Contact */}
            <div className="flex flex-col items-center md:items-start animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">support@we5ive.com</p>
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

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start animate-fade-in-up delay-400">
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
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
                  <FaLinkedin size="24" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaInstagram size="24" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaTwitter size="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Copyright */}
      <footer className="footer footer-center p-4  bg-custom ">
        <aside>
          <p className="text-sm md:text-base">
            © 2025 | We5ive | Powered by Rezoanul Hasan
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
