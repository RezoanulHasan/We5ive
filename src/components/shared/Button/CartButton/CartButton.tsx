"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";
import { Product } from "@/components/ProductData/ProductData";

interface CartButtonProps {
  product: {
    id: string;
    title: string;
    images: string[];
    price: number;
  };
}

const CartButton: React.FC<CartButtonProps> = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Check if the product is already in the cart when the component mounts
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = currentCart.findIndex(
      (item: Product) => item.id === product.id
    );
    setIsInCart(existingProductIndex >= 0);
  }, [product.id]);

  const handleAddToCart = () => {
    // Get the existing cart from localStorage or initialize it as an empty array
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product is already in the cart
    const existingProductIndex = currentCart.findIndex(
      (item: Product) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      // Product is already in the cart
      Swal.fire({
        icon: "warning",
        title: "Product already added",
        text: `${product.title} is already in your cart.`,
        confirmButtonText: "OK",
      });
    } else {
      // If product is not in the cart, add it with a quantity of 1
      const newProduct = { ...product, quantity: 1 };
      currentCart.push(newProduct);

      // Save the updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(currentCart));

      // Show success message
      Swal.fire({
        icon: "success",
        title: "Added to cart",
        text: `${product.title} has been successfully added to your cart.`,
        confirmButtonText: "OK",
      });

      // Update the state to reflect the product is now in the cart
      setIsInCart(true);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex items-center button-custom p-2"
      aria-label={`Add ${product.title} to cart`}
    >
      <FaCartPlus
        className={`mr-2 text-xl ${isInCart ? "text-black" : "text-white"}`}
      />
      Add to Cart
    </button>
  );
};

export default CartButton;
