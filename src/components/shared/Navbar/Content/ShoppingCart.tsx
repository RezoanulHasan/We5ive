/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);

    // Listen to changes in localStorage (across tabs)
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(updatedCart);
    };

    // Attach the event listener for localStorage changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} className="btn btn-ghost btn-circle indicator">
          <span className="badge badge-sm indicator-item">
            {cartItems.length}
          </span>
          <FaShoppingCart className="h-5 w-5" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-custom rounded-box z-[1] mt-3 w-52 p-2"
        >
          <li className="flex justify-center items-center text-center">
            <span className="text-lg font-bold">{cartItems.length} Items</span>
          </li>
          <li className="flex justify-center items-center text-center">
            <Link href="/cartItems">
              <button className="btn button-custom btn-block">View Cart</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShoppingCart;
