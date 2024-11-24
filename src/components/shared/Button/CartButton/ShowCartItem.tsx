/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useEffect } from "react";
import { Product } from "@/components/ProductData/ProductData";
import Swal from "sweetalert2";
import { FaInfoCircle, FaTrashAlt, FaTag, FaCalendarAlt } from "react-icons/fa";
import useTitle from "@/components/Hooks/useTitle";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { motion } from "framer-motion";
import galleryAnimation from "@/components/Hooks/GallerySection";

const ShowCartItem: React.FC = () => {
  useTitle("Cart Items");
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(currentCart);
  }, []);

  const handleRemoveFromCart = (id: string) => {
    // Remove the item from the cart
    const updatedCart = cartItems.filter((item) => item.id !== id);

    // Update localStorage with the new cart data
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show success message
    Swal.fire({
      icon: "success",
      title: "Removed from cart",
      text: "The product has been removed from your cart.",
      confirmButtonText: "OK",
    }).then(() => {
      // Reload the browser window
      window.location.reload();
    });
  };

  return (
    <div className="p-4 sm:p-8 mt-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
        Your Cart ({cartItems.length}{" "}
        {cartItems.length === 1 ? "item" : "items"})
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition relative"
              >
                {/* Price at top-right corner */}
                <div className="absolute top-4 right-4 bg-[#6441C2] text-white text-sm font-bold p-2 rounded-full">
                  Price: ${product.price}
                </div>
                <motion.img
                  variants={galleryAnimation}
                  initial="hidden"
                  animate="visible"
                  loading="lazy"
                  src={product.images?.[0] || "/fallback-image.jpg"}
                  alt={product.title || "Product Image"}
                  className="w-full  object-cover rounded-md h-96"
                />

                <div className="flex justify-between items-center mb-4">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={product.reviews ?? 0} // Ensure reviews is a number
                    readOnly
                  />
                  <p className="text-gray-600 text-sm">
                    {product.reviews ?? 0} Stars
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  {/* Category and Season with Icons */}
                  <div className="flex items-center">
                    <FaTag className="text-gray-600 mr-2" />
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-600 mr-2" />
                    <p className="text-sm text-gray-600">{product.season}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <Link href={`/products/${product.id}`}>
                    <button
                      className="flex items-center px-3 py-2  text-sm font-medium  button-custom btn"
                      aria-label={`View details for ${product.title}`}
                    >
                      <FaInfoCircle className="mr-2 text-base" />
                      Details
                    </button>
                  </Link>

                  <button
                    onClick={() => handleRemoveFromCart(product.id!)} // Non-null assertion
                    className="btn rounded-lg flex items-center px-3 py-2 text-red-500 hover:text-red-700 text-sm font-medium"
                    aria-label={`Remove ${product.title} from cart`}
                  >
                    <FaTrashAlt className="mr-2 text-base" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Proceed to Checkout Section */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <button className="mt-4 px-6 py-3 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCartItem;
