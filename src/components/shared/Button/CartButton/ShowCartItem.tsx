/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";
import { FaInfoCircle, FaTrashAlt, FaTag, FaCalendarAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { motion } from "framer-motion";
import Link from "next/link";
import galleryAnimation from "@/components/Hooks/GallerySection";
import { CartItemProduct } from "@/components/ProductData/ProductData";

const ShowCartItem: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemProduct[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string[]>>(
    {}
  );
  const [selectedColors, setSelectedColors] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(currentCart);
  }, []);

  const handleRemoveFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
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
  const handleQuantityChange = (
    productId: string,
    quantity: number,
    stock: number
  ) => {
    if (quantity > stock) {
      Swal.fire({
        icon: "warning",
        title: "Insufficient Stock",
        text: `Only ${stock} items are available.`,
        confirmButtonText: "OK",
      });
      return;
    }
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, selectedQuantity: quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleSizeSelection = (productId: string, size: string) => {
    setSelectedSizes((prev) => {
      const currentSizes = prev[productId] || [];
      return {
        ...prev,
        [productId]: currentSizes.includes(size)
          ? currentSizes.filter((s) => s !== size)
          : [...currentSizes, size],
      };
    });
  };

  const handleColorSelection = (productId: string, color: string) => {
    setSelectedColors((prev) => {
      const currentColors = prev[productId] || [];
      return {
        ...prev,
        [productId]: currentColors.includes(color)
          ? currentColors.filter((c) => c !== color)
          : [...currentColors, color],
      };
    });
  };

  const resetSelections = (productId: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: [] }));
    setSelectedColors((prev) => ({ ...prev, [productId]: [] }));
  };

  const calculateTotals = () => {
    const totalItems = cartItems.reduce(
      (acc, item) => acc + (item.selectedQuantity || 1),
      0
    );
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * (item.selectedQuantity || 1),
      0
    );
    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = calculateTotals();

  const cartItemsMemo = useMemo(
    () =>
      cartItems.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 relative hover:shadow-xl transition"
        >
          <div className="absolute top-4 right-4 bg-[#6441C2] text-white text-sm font-bold px-3 py-1 rounded-full">
            ${product.price}
          </div>
          <motion.img
            variants={galleryAnimation}
            initial="hidden"
            animate="visible"
            src={product.images?.[0] || "https://via.placeholder.com/150"}
            alt={product.title}
            loading="lazy"
            className="object-cover w-full h-60 rounded-t-lg"
          />
          <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            {product.title}
          </h3>
          <div className="flex justify-between items-center mb-4">
            <Rating
              style={{ maxWidth: 120 }}
              value={product.reviews ?? 0}
              readOnly
            />
            <p className="text-sm text-gray-600">
              {product.reviews ?? 0} Stars
            </p>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Select Colors
          </h2>
          <div className="flex gap-2 justify-center mb-4">
            {product.colors?.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColors[product.id]?.includes(color)
                    ? "border-[#6441C2]"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelection(product.id, color)}
              />
            ))}
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Select Sizes
            </h2>
            <div className="flex gap-2">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 rounded-lg border text-sm font-semibold ${
                    selectedSizes[product.id]?.includes(size)
                      ? "bg-[#6441C2] text-white"
                      : "border-gray-300 text-gray-800"
                  }`}
                  onClick={() => handleSizeSelection(product.id, size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => resetSelections(product.id)}
            className=" text-red-500 underline text-xl font-semibold "
          >
            Reset Selections
          </button>

          <div className="mt-5 p-2 mb-5">
            <p className="font-semibold text-gray-800 mt-4">
              Selected Sizes:{" "}
              <span className="text-gray-600">
                {selectedSizes[product.id]?.join(", ") || "None"}
              </span>
            </p>
            <p className="font-semibold text-gray-800">
              Selected Colors:{" "}
              <span className="text-gray-600">
                {selectedColors[product.id]?.join(", ") || "None"}
              </span>
            </p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FaTag className="text-black mr-2" />
              <p className="text-sm text-red-600">{product.category}</p>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-black mr-2" />
              <p className="text-sm text-red-600">{product.season}</p>
            </div>
          </div>
          <p className="text-green-600 p-2 text-lg ">
            Available Stock:{product.stock}
          </p>
          <div className="mb-4">
            <label
              htmlFor={`quantity-${product.id}`}
              className="text-sm font-semibold"
            >
              Quantity
            </label>
            <input
              id={`quantity-${product.id}`}
              type="number"
              min={1}
              max={product.stock}
              value={product.selectedQuantity || 1}
              onChange={(e) =>
                handleQuantityChange(product.id, +e.target.value, product.stock)
              }
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <p className="font-semibold text-gray-800">
            Total Price:{" "}
            <span className="text-[#6441C2] text-xl font-mono">
              ${product.price * (product.selectedQuantity || 1)}
            </span>
          </p>
          <div className="flex justify-between mt-4">
            <Link href={`/products/${product.id}`}>
              <button className="flex items-center px-4 py-2    button-custom  ">
                <FaInfoCircle className="mr-2" /> Details
              </button>
            </Link>
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              <FaTrashAlt className="mr-2" /> Remove
            </button>
          </div>
        </motion.div>
      )),
    [cartItems, selectedColors, selectedSizes]
  );

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center  text-[#6441C2E5]  ">
        𝓨𝓸𝓾𝓻 𝓢𝓱𝓸𝓹𝓹𝓲𝓷𝓰 𝓒𝓪𝓻𝓽
        <p className="text-[#6441C2E5]  text-2xl mt-2">
          {" "}
          {cartItems.length} - {cartItems.length === 1 ? "item" : "items"}
        </p>
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-red-500 mt-20 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItemsMemo}
          </div>

          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-4xl font-semibold text-[#6441C2E5]  mb-4 text-center">
              𝓢𝓾𝓶𝓶𝓪𝓻𝔂
            </h2>

            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <p className="mb-4 text-xl text-center font-semibold">
                <span className=" font-semibold">Total Products:</span>{" "}
                {cartItems.length}
              </p>
              <p className="mb-4 text-xl text-center  font-semibold">
                <span className=" font-semibold">Total Items:</span>{" "}
                {totalItems}
              </p>

              <hr className="my-4" />
              <p className="mb-4 text-lg text-center text-gray-600">
                <span className="font-medium">Total Price:</span> $
                {totalPrice.toFixed(2)}
              </p>

              <p className="mb-4 text-lg text-center text-gray-600">
                <span className="font-medium">4% VAT:</span> $
                {(totalPrice * 0.04).toFixed(2)}
              </p>
              <p className="mb-4 text-lg text-center text-gray-600">
                <span className="font-medium">5% Tax:</span> $
                {(totalPrice * 0.05).toFixed(2)}
              </p>
              <p className="mb-4 text-lg text-center text-gray-600">
                <span className="font-medium">15% Discount:</span> $
                {(totalPrice * 0.15).toFixed(2)}
              </p>
              <hr className="my-4" />
              <p className="text-2xl font-semibold text-center text-[#6441C2E5] ">
                Final Total: $
                {(
                  totalPrice +
                  totalPrice * 0.04 +
                  totalPrice * 0.05 -
                  totalPrice * 0.15
                ).toFixed(2)}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-[#6441C2E5] mb-4">
                𝓟𝓻𝓸𝓭𝓾𝓬𝓽 𝓓𝓮𝓽𝓪𝓲𝓵𝓼 :
              </h3>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 border-b border-gray-300 pb-4"
                >
                  <p className="font-semibold  text-base text-[#4b1fc5e5]">
                    Title:{" "}
                    <span className="text-[#4b1fc5e5]">{item.title}</span>
                  </p>
                  <p className="font-semibold text-gray-800 mt-4">
                    Selected Colors:{" "}
                    <span className="text-gray-600">
                      {selectedColors[item.id]?.join(", ") || "None"}
                    </span>
                  </p>
                  <p className="font-semibold text-gray-800  mb-4">
                    Selected Sizes:{" "}
                    <span className="text-gray-600 rounded-lg p-2">
                      {selectedSizes[item.id]?.join(", ") || "None"}
                    </span>
                  </p>
                  <p className="font-semibold text-gray-800">
                    Season: <span className="text-gray-600">{item.season}</span>
                  </p>
                  <p className="font-semibold text-gray-800">
                    Category:{" "}
                    <span className="text-gray-600">{item.category}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <button className="px-10 py-4  button-custom ">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ShowCartItem;
