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
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>(
    {}
  );

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
    setSelectedSize((prev) => ({ ...prev, [productId]: size }));
  };

  const handleColorSelection = (productId: string, color: string) => {
    setSelectedColor((prev) => ({ ...prev, [productId]: color }));
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
          <div className="flex gap-2 justify-center mb-4">
            {product.colors?.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor[product.id] === color
                    ? "border-[#6441C2]"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelection(product.id, color)}
              />
            ))}
          </div>
          <p className="font-semibold mb-2">
            Available Stock:{" "}
            <span className="text-[#6441C2] font-mono">{product.stock}</span>
          </p>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Select Size
            </h2>
            <div className="flex gap-2">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 rounded-lg border text-sm font-semibold ${
                    selectedSize[product.id] === size
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
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FaTag className="text-gray-600 mr-2" />
              <p className="text-sm text-gray-600">{product.category}</p>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-600 mr-2" />
              <p className="text-sm text-gray-600">{product.season}</p>
            </div>
          </div>
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
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
    [cartItems, selectedColor, selectedSize]
  );

  return (
    <div className="container mx-auto p-4 mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Your Shopping Cart ({cartItems.length}{" "}
        {cartItems.length === 1 ? "item" : "items"})
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItemsMemo}
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Summary
            </h2>
            <p className="mb-2 text-center">
              Total Products: {cartItems.length}
            </p>
            <p className="mb-2 text-center">Total Items: {totalItems}</p>
            <p className="mb-2 text-center">
              Total Price: ${totalPrice.toFixed(2)}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Product Details:
              </h3>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 border-b border-gray-300 pb-4"
                >
                  <p className="font-semibold text-gray-800">
                    Title: <span className="text-gray-600">{item.title}</span>
                  </p>
                  <p className="font-semibold text-gray-800">
                    Selected Color:{" "}
                    <span
                      className="inline-block w-6 h-6 rounded-full border"
                      style={{
                        backgroundColor: selectedColor[item.id] || "#ccc",
                        borderColor: selectedColor[item.id]
                          ? "#ccc"
                          : "transparent",
                      }}
                    ></span>
                  </p>
                  <p className="font-semibold text-gray-800">
                    Selected Size:{" "}
                    <span className="text-gray-600">
                      {selectedSize[item.id] || "Not Selected"}
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
              <button className="px-6 py-3 bg-green-600 text-white rounded-md mt-4 hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowCartItem;
