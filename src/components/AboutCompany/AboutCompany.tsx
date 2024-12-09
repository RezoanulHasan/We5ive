/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

import AboutUs from "../../assets/AboutCompany/AboutUs.webp";

import mission from "../../assets/AboutCompany/mission.jpg";

import Vision from "../../assets/AboutCompany/Vision.jpg";

import target from "../../assets/AboutCompany/target.avif";

import history from "../../assets/AboutCompany/history.webp";
import Signature from "../shared/Signature/Signature";
import useTitle from "../Hooks/useTitle";

const AboutCompany: React.FC = () => {
  useTitle("About Company");
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-lg py-12 px-4 md:px-20 lg:px-40   mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">
          About Our Company
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to our E-commerce platform, your one-stop destination for
          fashion and lifestyle products for men, women, and kids.
        </p>
      </div>

      {/* About the Company */}
      <section className="mb-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-80  transform hover:scale-105 transition-all duration-500">
            <Image
              fill
              src={AboutUs}
              alt="About US"
              className="object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our E-commerce platform offers a wide range of fashion and lifestyle
            products tailored to every member of the family. From trendy outfits
            for men and women to playful collections for kids, we ensure
            quality, variety, and convenience. With fast delivery and a seamless
            shopping experience, we bring the latest trends right to your
            doorstep.
          </p>
        </div>
      </section>

      {/* Mission */}

      <section className="mb-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To provide high-quality, affordable, and trendy products that cater
            to the diverse fashion needs of individuals and families worldwide,
            while ensuring sustainability and innovation in every aspect of our
            operations.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-80  transform hover:scale-105 transition-all duration-500">
            <Image
              fill
              src={mission}
              alt="Mission"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Vision */}

      <section className="mb-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-80  transform hover:scale-105 transition-all duration-500">
            <Image fill src={Vision} alt="Vision" className="object-contain" />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"> Our Vision</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To become the most trusted global destination for fashion and
            lifestyle products by fostering customer satisfaction, innovation,
            and ethical practices.
          </p>
        </div>
      </section>

      {/* Target */}

      <section className="mb-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4"> Our Target</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our primary target is to meet the dynamic demands of our customers,
            offering a curated collection of products that suit every season,
            occasion, and style. We aim to expand our global presence while
            continuously improving the shopping experience.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-80  transform hover:scale-105 transition-all duration-500">
            <Image
              fill
              src={target}
              alt="Target People"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* History */}

      <h1 className="text-4xl mt-10 text-center font-extrabold text-purple-700 ">
        Our History
      </h1>
      <section className="mb-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-80  transform hover:scale-105 transition-all duration-500">
            <Image
              fill
              src={history}
              alt="History"
              className="object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2022, our company started with a mission to redefine
            online shopping for families. Over the years, we've grown into a
            trusted name in the e-commerce industry, serving millions of
            customers across the globe. From humble beginnings to a thriving
            enterprise, our journey has been powered by our passion for quality,
            customer satisfaction, and innovation.
          </p>
        </div>
      </section>

      <Signature></Signature>
    </div>
  );
};

export default AboutCompany;
