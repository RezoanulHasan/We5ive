/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { productDatas } from "@/components/ProductData/ProductData";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import CartButton from "@/components/shared/Button/CartButton/CartButton";
import {
  FaInfoCircle,
  FaTag,
  FaTransgender,
  FaLeaf,
  FaLayerGroup,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";
import Signature from "@/components/shared/Signature/Signature";
import galleryAnimation from "@/components/Hooks/GallerySection";
import { motion } from "framer-motion";
import useTitle from "@/components/Hooks/useTitle";

const AllProduct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("lowToHigh");
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [seasonFilter, setSeasonFilter] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  useTitle("ALL Product");
  // Filter products based on the applied filters
  const filteredProducts = productDatas
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (!priceRange) return true;
      const [min, max] = priceRange;
      return product.price >= min && product.price <= max;
    })
    .filter((product) =>
      genderFilter ? product.gender === genderFilter : true
    )
    .filter((product) =>
      statusFilter ? product.status === statusFilter : true
    )
    .filter((product) =>
      seasonFilter.length > 0 ? seasonFilter.includes(product.season) : true
    )
    .filter((product) =>
      categoryFilter.length > 0
        ? categoryFilter.includes(product.category)
        : true
    );

  // Sort products based on price
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  // Toggle checkboxes for season and category filters
  const toggleFilter = (filter: string, value: string, setFilter: Function) => {
    setFilter((prev: string[]) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setSortOrder("lowToHigh");
    setPriceRange(null);
    setGenderFilter(null);
    setStatusFilter(null);
    setSeasonFilter([]);
    setCategoryFilter([]);
  };
  return (
    <>
      <div className="text-center  mt-20  bg-gray-50 p-3 ">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2">
          Our All Product'𝓢
        </h1>
        <p className="text-lg text-gray-600">
          Join thousands of satisfied customers redefining style and
          sustainability. Together, let’s build a wardrobe that inspires
          confidence and respects the environment.
        </p>
      </div>

      <div className="flex p-4  mt-2 rounded-lg  bg-gray-50  ">
        {/* Filter Panel */}
        <div className="w-1/4 bg-custom p-4 rounded-lg shadow-lg mr-6">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          {/* Search Filter */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search by Title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          {/* Filter by Gender */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Gender</h3>
            <div className="flex flex-col space-y-2">
              {["Men", "Women", "Kid"].map((gender, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    checked={genderFilter === gender}
                    onChange={() => setGenderFilter(gender)}
                    className="form-radio h-4 w-4 text-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter by Season */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Season</h3>
            {["Winter", "All Season", "Summer"].map((season) => (
              <label key={season} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={seasonFilter.includes(season)}
                  onChange={() =>
                    toggleFilter("season", season, setSeasonFilter)
                  }
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">{season}</span>
              </label>
            ))}
          </div>

          {/* Filter by Status */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Status</h3>
            <div className="flex flex-col space-y-2">
              {["Regular", "Upcoming", "Top Sell", "New Arrival"].map(
                (status, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      checked={statusFilter === status}
                      onChange={() => setStatusFilter(status)}
                      className="form-radio h-4 w-4 text-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{status}</span>
                  </label>
                )
              )}
            </div>
          </div>
          {/* Filter by Category */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Category
            </h3>
            {[
              "Outerwear",
              "Dresses",
              "Footwear",
              "Shirts",
              "Accessories",
              "Hoodies",
              "Sweaters",
              "Pants",
              "T-Shirts",
            ].map((category) => (
              <label key={category} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={categoryFilter.includes(category)}
                  onChange={() =>
                    toggleFilter("category", category, setCategoryFilter)
                  }
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">{category}</span>
              </label>
            ))}
          </div>
          {/* Sorting by Price */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Sort by Price
            </h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="lowToHigh"
                  name="sortPrice"
                  value="lowToHigh"
                  checked={sortOrder === "lowToHigh"}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label
                  htmlFor="lowToHigh"
                  className="ml-2 text-sm text-gray-600"
                >
                  Price: Low to High
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="highToLow"
                  name="sortPrice"
                  value="highToLow"
                  checked={sortOrder === "highToLow"}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label
                  htmlFor="highToLow"
                  className="ml-2 text-sm text-gray-600"
                >
                  Price: High to Low
                </label>
              </div>
            </div>
          </div>

          {/* Filter by Price Range */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Price Range
            </h3>
            <div className="flex flex-col space-y-2">
              {[
                { label: "$0 - $50", range: [0, 50] },
                { label: "$51 - $150", range: [51, 150] },
                { label: "$151 - $250", range: [151, 250] },
                { label: "$251 - $500", range: [251, 500] },
              ].map((priceOption, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      priceRange !== null &&
                      priceRange[0] === priceOption.range[0] &&
                      priceRange[1] === priceOption.range[1]
                    }
                    onChange={() =>
                      setPriceRange(priceOption.range as [number, number])
                    }
                    className="form-radio h-4 w-4 text-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {priceOption.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset Filters Button */}
          <button
            className="w-full mt-4 p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>

        {/* Product Listing */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  bg-custom  rounded-lg ">
          {sortedProducts.length > 0 ? (
            sortedProducts?.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 relative"
              >
                <motion.img
                  loading="lazy"
                  variants={galleryAnimation}
                  initial="hidden"
                  animate="visible"
                  src={
                    product.images?.[0] ||
                    "https://static.vecteezy.com/system/resources/previews/025/262/295/non_2x/original-products-logo-design-and-original-icon-vector.jpg"
                  }
                  alt={product.title}
                  className="w-full  object-cover mb-6 rounded-t-xl h-96"
                />

                <div className="absolute top-4 right-4 bg-[#6441C2] text-white text-sm font-bold p-2 rounded-full">
                  Price: ${product.price}
                </div>

                <div className="px-4 pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={product.reviews ?? 0}
                      readOnly
                    />
                    <p className="text-gray-600 text-sm">
                      {product.reviews ?? 0} Stars
                    </p>
                  </div>

                  <div className="flex items-center mb-4">
                    <h3 className="text-xl text-gray-800">{product.title}</h3>
                  </div>

                  <div className="flex flex-wrap justify-around gap-2 mb-2">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <FaLeaf className="text-green-600" />
                      {product.season}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <FaTransgender className="text-pink-500" />
                      {product.gender}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-around gap-2 mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <FaLayerGroup className="text-purple-600" />
                    {product.status}
                  </div>

                  <div className="text-sm text-gray-600">
                    {product.category}
                    <FaTag className="inline text-blue-600 mr-1" />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <CartButton product={product} />
                  <Link href={`/products/${product.id}`}>
                    <button
                      className="flex items-center button-custom p-2"
                      aria-label={`View details for ${product.title}`}
                    >
                      <FaInfoCircle className="mr-2 text-xl text-white" />
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-red-700 text-xl    font-semibold mt-60">
              No Product Match, Try Other Filters
            </div>
          )}
        </div>
      </div>

      <Signature></Signature>
    </>
  );
};

export default AllProduct;
