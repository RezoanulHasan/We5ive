/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { productDatas } from "@/components/ProductData/ProductData";
import { FaRegHeart, FaComment } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import CartButton from "@/components/shared/Button/CartButton/CartButton";
import useTitle from "@/components/Hooks/useTitle";
import ShareWishlistButton from "@/components/shared/Button/ShareWishlistButton/ShareWishlistButton";
import galleryAnimation from "@/components/Hooks/GallerySection";
import { motion } from "framer-motion";
import Upcoming from "./Upcoming";
import CommentSystem from "./CommentSystem";
import ProgressSection from "./ProgressSection";

const ProductDetails: React.FC = () => {
  useTitle("Product Details");

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string | null>(null);

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

  // Set the initial main image to the first product image
  if (!mainImage && product.images?.length) {
    setMainImage(product.images[0]);
  }

  return (
    <>
      <div className="container mx-auto p-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Main Image Section */}
          <div>
            <div className="relative">
              <motion.img
                variants={galleryAnimation}
                initial="hidden"
                animate="visible"
                loading="lazy"
                src={
                  mainImage ||
                  product.images[0] ||
                  "https://static.vecteezy.com/system/resources/previews/025/262/295/non_2x/original-products-logo-design-and-original-icon-vector.jpg"
                }
                alt={product.title}
                className="rounded-xl object-cover w-full"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                {product.status}
              </div>
            </div>

            {/* Thumbnails Section */}
            <div className="mt-4 flex gap-4 justify-center">
              {product.images?.map((img, index) => (
                <motion.img
                  variants={galleryAnimation}
                  initial="hidden"
                  animate="visible"
                  key={index}
                  src={img}
                  alt={`${product.title} Thumbnail`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                    mainImage === img
                      ? "border-[#6441C2E5]"
                      : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
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
                value={product.reviews ?? 0}
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

            {/* Color Buttons */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Select Color
              </h2>
              <div className="flex gap-2">
                {product.colors?.map((color, index) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-[#6441C2E5]"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setSelectedColor(color);
                      setMainImage(product.images[index]); // Map color to image by index
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Select Size
              </h2>
              <div className="flex gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border text-sm font-semibold ${
                      selectedSize === size
                        ? "bg-[#6441C2E5] text-white"
                        : "border-gray-300 text-gray-800"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Quantity
              </h2>
              <input
                type="number"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                min={1}
                max={product.quantity || 10}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <CartButton product={product} />
              <ShareWishlistButton></ShareWishlistButton>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-7 p-4 sm:p-6 md:p-8 lg:p-10 bg-custom">
        {/* Comment System Section */}
        <div className="flex-1">
          <CommentSystem />
        </div>

        {/* Review Section */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg w-full max-w-lg">
          <h1 className="text-lg font-semibold">
            Product Review <span className="text-[#381195e5]">23k reviews</span>
          </h1>

          {/* Rating Section */}
          <div className="flex items-center gap-4 my-6">
            <Rating
              style={{ maxWidth: 120 }}
              value={product.reviews ?? 0}
              readOnly
            />
            <p className="text-gray-600 text-xl  text-[#381195e5] font-bold">
              {product.reviews ?? 0} Stars
            </p>
          </div>

          {/* Progress Section */}
          <div className="space-y-4">
            <ProgressSection></ProgressSection>
          </div>
        </div>
      </div>

      <Upcoming></Upcoming>
    </>
  );
};

export default ProductDetails;
