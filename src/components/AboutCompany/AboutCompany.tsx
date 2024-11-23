"use client";
import React from "react";
import {
  FaHistory,
  FaBullseye,
  FaLightbulb,
  FaChartLine,
  FaSmile,
} from "react-icons/fa";

const AboutCompany: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-20 lg:px-40">
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
      <section className="mb-12">
        <div className="flex items-center mb-4">
          <FaSmile className="text-pink-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our E-commerce platform offers a wide range of fashion and lifestyle
          products tailored to every member of the family. From trendy outfits
          for men and women to playful collections for kids, we ensure quality,
          variety, and convenience. With fast delivery and a seamless shopping
          experience, we bring the latest trends right to your doorstep.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-12">
        <div className="flex items-center mb-4">
          <FaLightbulb className="text-yellow-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          To provide high-quality, affordable, and trendy products that cater to
          the diverse fashion needs of individuals and families worldwide, while
          ensuring sustainability and innovation in every aspect of our
          operations.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-12">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-green-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          To become the most trusted global destination for fashion and
          lifestyle products by fostering customer satisfaction, innovation, and
          ethical practices.
        </p>
      </section>

      {/* Target */}
      <section className="mb-12">
        <div className="flex items-center mb-4">
          <FaBullseye className="text-blue-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Our Target</h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our primary target is to meet the dynamic demands of our customers,
          offering a curated collection of products that suit every season,
          occasion, and style. We aim to expand our global presence while
          continuously improving the shopping experience.
        </p>
      </section>

      {/* History */}
      <section>
        <div className="flex items-center mb-4">
          <FaHistory className="text-red-500 text-3xl mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Our History</h2>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Founded in 2015, our company started with a mission to redefine online
          shopping for families. Over the years, we've grown into a trusted name
          in the e-commerce industry, serving millions of customers across the
          globe. From humble beginnings to a thriving enterprise, our journey
          has been powered by our passion for quality, customer satisfaction,
          and innovation.
        </p>
      </section>
    </div>
  );
};

export default AboutCompany;
