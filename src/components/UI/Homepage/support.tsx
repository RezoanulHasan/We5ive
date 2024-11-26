"use client ";
import galleryAnimation from "@/components/Hooks/GallerySection";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const Support = () => {
  return (
    <>
      <div className="py-14 mt-7 overflow-hidden">
        {/* First Section: Image on Left, Text on Right */}
        <div className="grid grid-cols-1 place-items-center place-content-center md:grid-cols-2">
          <div className="w-full md:w-1/2 flex justify-center">
            <Fade direction="left">
              <motion.img
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                loading="lazy"
                src="https://img.freepik.com/free-photo/fashion-stylish-beautiful-young-brunette-woman-model-summer-hipster-colorful-casual-clothes-posing-street_158538-12179.jpg?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
                alt="E-commerce Fashion"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </Fade>
          </div>

          {/* Text Section */}
          <div className="mt-10 md:mt-0 md:pl-10">
            <h2 className="text-3xl sm:text-5xl mb-8 font-bold">
              Explore the Latest Trends in{" "}
              <span className="text-[#6441C2E5]">Fashion & Lifestyle</span>
            </h2>
            <div className="flex items-center mt-8">
              <div className="border border-dotted mr-5 h-[150px] bg-white"></div>
              <div>
                <div className="flex relative">
                  <FaQuoteLeft
                    size={40}
                    className="-z-2 text-[#6441C2E5] -top-8 relative z-0 opacity-25"
                  />
                  <p className="z-[99] italic max-w-[50ch] leading-7 -ml-8">
                    Discover our curated selection of high-quality products for
                    men, women, and kids. From trendy apparel to essential
                    accessories, shop effortlessly and elevate your style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 place-items-center place-content-center md:grid-cols-2 mt-14">
          {/* Text Section */}
          <div className="mt-10 md:mt-0 md:pr-10">
            <h2 className="text-3xl sm:text-5xl mb-8 font-bold">
              Seamless Shopping with{" "}
              <span className="text-[#6441C2E5]">Fast Delivery</span>
            </h2>
            <div className="flex items-center mt-8">
              <div className="border border-dotted mr-5 h-[150px] bg-white"></div>
              <div>
                <div className="flex relative">
                  <FaQuoteLeft
                    size={40}
                    className="-z-2 text-[#6441C2E5] -top-8 relative z-0 opacity-25"
                  />
                  <p className="z-[99] italic max-w-[50ch] leading-7 -ml-8">
                    Our platform ensures a hassle-free shopping experience with
                    fast and reliable delivery. Enjoy shopping for your favorite
                    fashion and lifestyle products anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Fade direction="right">
              <motion.img
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                loading="lazy"
                src="https://img.freepik.com/free-photo/front-view-woman-with-shopping-bags-concept_23-2148734510.jpg?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </Fade>
          </div>
        </div>

        {/* Third Section: Text on Right, Image on Left */}
        <div className="grid grid-cols-1 place-items-center place-content-center md:grid-cols-2 mt-14">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Fade direction="left">
              <motion.img
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                loading="lazy"
                src="https://img.freepik.com/free-photo/fashion-designer-measuring-jacket-blazer_1157-22997.jpg?uid=R154375610&ga=GA1.1.1093837504.1727806851&semt=ais_hybrid"
                alt="Personalized Experience"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </Fade>
          </div>

          {/* Text Section */}
          <div className="mt-10 md:mt-0 md:pl-10">
            <h2 className="text-3xl sm:text-5xl mb-8 font-bold">
              Tailored for Your{" "}
              <span className="text-[#6441C2E5]">Shopping Needs</span>
            </h2>
            <div className="flex items-center mt-8">
              <div className="border border-dotted mr-5 h-[150px] bg-white"></div>
              <div>
                <div className="flex relative">
                  <FaQuoteLeft
                    size={40}
                    className="-z-2 text-[#6441C2E5] -top-8 relative z-0 opacity-25"
                  />
                  <p className="z-[99] italic max-w-[50ch] leading-7 -ml-8">
                    Enjoy a personalized shopping experience with curated
                    collections and exclusive offers. Elevate your wardrobe with
                    pieces designed just for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
