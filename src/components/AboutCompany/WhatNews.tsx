"use client";

import React from "react";
import useTitle from "../Hooks/useTitle";

const WhatNews: React.FC = () => {
  useTitle("News");
  const newsItems = [
    {
      id: 1,
      title: "New Arrivals: Summer Collection 2025",
      description:
        "Explore our latest summer collection with trendy designs, vibrant colors, and comfortable fabrics for men, women, and kids. Stay stylish this season!",
      date: "March 8, 2025",
    },
    {
      id: 2,
      title: "Exclusive Deals: Up to 50% Off",
      description:
        "Don't miss out on our exclusive sale! Enjoy discounts of up to 50% on selected items. Shop now before the offer ends.",
      date: "November 10, 2025",
    },
    {
      id: 3,
      title: "Sustainability Initiative",
      description:
        "We are committed to sustainable practices. Our new eco-friendly packaging is now available. Join us in making a difference.",
      date: "April 1, 2026",
    },
    {
      id: 4,
      title: "Introducing Free Returns",
      description:
        "Shopping just got easier! We are excited to announce free returns on all purchases within 30 days. Shop with confidence!",
      date: "January 15, 2026",
    },
    {
      id: 5,
      title: "Launching Our Mobile App",
      description:
        "Stay connected and shop on the go! Our new mobile app is now available for download on iOS and Android. Get exclusive app-only deals!",
      date: "December 1, 2026",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8  bg-gray-50   mt-20">
      <h1 className="text-3xl font-extrabold text-purple-700 mb-4 text-center">
        Upcoming News
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Stay updated with the latest news, updates, and announcements from our
        platform.
      </p>

      <div className="space-y-6">
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="border p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow hover:shadow-purple-400 "
          >
            <h2 className="text-2xl font-semibold  text-[#6441C2E5] mb-2">
              {news.title}
            </h2>
            <p className="text-gray-600 mb-4">{news.date}</p>
            <p className="text-gray-800">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatNews;
