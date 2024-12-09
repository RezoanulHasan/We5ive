"use client";
import React from "react";
import Signature from "../shared/Signature/Signature";
import useTitle from "../Hooks/useTitle";

const PrivacyPolicy: React.FC = () => {
  useTitle("Privacy Policy");
  return (
    <div className="container mx-auto  bg-gray-50 py-12 px-4 md:px-20 lg:px-40   mt-20 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#6441C2E5]  ">
        Privacy Policy
      </h1>
      <p className="mb-4">
        Welcome to our E-commerce platform. We are committed to protecting your
        privacy and ensuring the security of your personal information. This
        Privacy Policy outlines how we collect, use, and safeguard your data
        while using our website.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#6441C2E5] ">
        Information We Collect
      </h2>
      <p className="mb-4">We collect personal information when you:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Create an account</li>
        <li>Place an order</li>
        <li>Subscribe to our newsletter</li>
        <li>Contact customer support</li>
      </ul>
      <p className="mb-4">
        This information may include your name, email address, shipping address,
        payment details, and any other information you provide.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#6441C2E5] ">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To process your orders and deliver products</li>
        <li>To send you updates about your orders</li>
        <li>To provide customer support</li>
        <li>To improve our website and services</li>
        <li>To send promotional offers, if opted in</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3  text-[#6441C2E5]">
        Data Security{" "}
      </h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your
        personal information. However, no method of transmission over the
        internet is completely secure. We cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mb-3  text-[#6441C2E5]">
        Your Rights
      </h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information. To exercise these rights, please contact our support team.
      </p>

      <h2 className="text-2xl font-semibold mb-3  text-[#6441C2E5]">
        Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <Signature></Signature>
    </div>
  );
};

export default PrivacyPolicy;
