"use client";

import { motion } from "framer-motion";
import galleryAnimation from "@/components/Hooks/GallerySection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureSummary: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="mt-14 md:mt-20  mb-10  border border-gray-100 rounded-md w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 px-4 lg:px-6"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {/* Feature 1 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/17241/17241081.png?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
          alt="Packaging"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            Faster Delivery
          </h2>
          <p className="text-sm text-graish font-thin">Delivery in 24/7</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/9280/9280032.png?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
          alt="Trophy"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            24 Hours Return
          </h2>
          <p className="text-sm text-graish font-thin">
            100% money-back guarantee
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/5452/5452600.png?uid=R154375610&ga=GA1.1.1093837504.1727806851"
          alt="Card"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            First Delivery
          </h2>
          <p className="text-sm text-graish font-thin">Your time is safe</p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/1688/1688503.png?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
          alt="Support"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            Support 24/7
          </h2>
          <p className="text-sm text-graish font-thin">
            Live contact / message
          </p>
        </div>
      </div>

      {/* Feature 5 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/5651/5651438.png?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
          alt="Phone Call"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            Instant Contact
          </h2>
          <p className="text-sm text-graish font-thin">Call us anytime</p>
        </div>
      </div>

      {/* Feature 6 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/2186/2186334.png?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
          alt="Message"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            Quick Messaging
          </h2>
          <p className="text-sm text-graish font-thin">Reach us instantly</p>
        </div>
      </div>

      {/* Feature 7 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/2186/2186199.png?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
          alt="Lock Open"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            Secure Access
          </h2>
          <p className="text-sm text-graish font-thin">
            Keep your data protected
          </p>
        </div>
      </div>

      {/* Feature 8 */}
      <div className="flex items-center space-x-4">
        <motion.img
          variants={galleryAnimation}
          initial="hidden"
          animate="visible"
          loading="lazy"
          src="https://cdn-icons-png.freepik.com/256/11000/11000733.png?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
          alt="Credit Card"
          className="object-contain w-10 h-10"
        />
        <div>
          <h2 className="text-sm font-semibold text-custom-black uppercase">
            Flexible Payments
          </h2>
          <p className="text-sm text-graish font-thin">
            Multiple payment methods
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSummary;
