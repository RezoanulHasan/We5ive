/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation"; // Use useParams for dynamic routes in the app directory
import { useState } from "react"; // Import useState hook
import { productDatas } from "@/components/ProductData/ProductData";
import { FaHeart, FaShareAlt, FaRegHeart, FaComment } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import NewArrival from "./NewArrival";
import CartButton from "@/components/shared/Button/CartButton/CartButton";

const ProductDetails: React.FC = () => {
  // State for selected size, color, and quantity
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const { id } = useParams();
  const productId = id as string;

  const product = productDatas?.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-gray-700">
          Product not found 😞
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-6 mt-20">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Product Images */}
          <div className="relative">
            <img
              src={product.images?.[0]}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-xl object-cover w-full"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
              {product.status}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-[#6441C2E5] mb-4">
              ${product.price?.toFixed(2)}
            </p>
            <div className="flex items-center mb-4 gap-4">
              <Rating
                style={{ maxWidth: 120 }}
                value={product.reviews ?? 0} // Ensure reviews is a number
                readOnly
              />
              <p className="text-gray-600 text-sm">
                {product.reviews ?? 0} Stars
              </p>
              <div className="flex items-center gap-4">
                <p className="text-gray-600 text-sm flex items-center">
                  <FaRegHeart className="mr-2 text-red-500 text-xl" />
                  {product.likes ?? 0} M Likes
                </p>
                <p className="text-gray-600 text-sm flex items-center">
                  <FaComment className="mr-2 text-blue-500 text-xl" />
                  {product.comments ?? 0} K Comments
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
            <div className="flex items-center mb-6">
              <span className="text-gray-600 text-sm">Stock: </span>
              <span
                className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  product.stock && product.stock > 0
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {product.stock && product.stock > 0
                  ? "In Stock"
                  : "Out of Stock"}
              </span>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <label
                htmlFor="size"
                className="block font-semibold text-gray-800"
              >
                Select Size
              </label>
              <select
                id="size"
                value={selectedSize || ""}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
              >
                <option value="" disabled>
                  Select a size
                </option>
                {product.sizes?.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <label
                htmlFor="color"
                className="block font-semibold text-gray-800"
              >
                Select Color
              </label>
              <select
                id="color"
                value={selectedColor || ""}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
              >
                <option value="" disabled>
                  Select a color
                </option>
                {product.colors?.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selection */}
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block font-semibold text-gray-800"
              >
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                min={1}
                max={product.quantity || 10}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <CartButton product={product} />

              <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 flex items-center">
                <FaHeart className="mr-2 text-red-500" />
                Add to Wishlist
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 flex items-center">
                <FaShareAlt className="mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Product Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <p>
              <span className="font-bold">Season:</span> {product.season}
            </p>
            <p>
              <span className="font-bold">Reviews:</span> {product.reviews}{" "}
              Stars
            </p>
            <p>
              <span className="font-bold">Available Sizes:</span>
              <div className="flex gap-2 mt-2">
                {product.sizes?.map((size) => (
                  <div
                    key={size}
                    className={`w-8 h-8 flex items-center justify-center border-2 cursor-pointer rounded-md  ${
                      selectedSize === size
                        ? "bg-[#6441C2E5] text-white"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)} // Update selected size
                  >
                    <span className="text-sm font-semibold">{size}</span>
                  </div>
                ))}
              </div>
            </p>
            <p>
              <span className="font-bold">Available Colors:</span>
              <div className="flex gap-2 mt-2">
                {product.colors?.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer ${
                      selectedColor === color
                        ? "border-2 border-[#6441C2E5] "
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)} // Update selected color
                  />
                ))}
              </div>
            </p>
            <p>
              <span className="font-bold">Available Quantity:</span>{" "}
              {product.quantity || "N/A"}
            </p>
            <p>
              <span className="font-bold">Gender:</span> {product.gender}
            </p>
          </div>
        </div>
      </div>

      <NewArrival></NewArrival>
    </>
  );
};

export default ProductDetails;
