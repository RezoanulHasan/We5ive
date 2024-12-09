"use client";

import { CartItemProduct } from "@/components/ProductData/ProductData";

type PaySummaryProps = {
  cartItems: CartItemProduct[];
  selectedColors: { [key: string]: string[] };
  selectedSizes: { [key: string]: string[] };
};

const PaySummary = ({
  cartItems,
  selectedColors,
  selectedSizes,
}: PaySummaryProps) => {
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

  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg">
      {/* Render the summary */}
      <h2 className="text-4xl font-semibold text-[#6441C2E5]  mb-4 text-center">
        𝓢𝓾𝓶𝓶𝓪𝓻𝔂
      </h2>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <p className="mb-4 text-xl text-center font-semibold">
          <span className=" font-semibold">Total Products:</span>{" "}
          {cartItems.length}
        </p>
        <p className="mb-4 text-xl text-center  font-semibold">
          <span className=" font-semibold">Total Items:</span> {totalItems}
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

      {/* Product Details */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-[#6441C2E5] mb-4">
          𝓟𝓻𝓸𝓭𝓾𝓬𝓽 𝓓𝓮𝓽𝓪𝓲𝓵𝓼 :
        </h3>
        {cartItems.map((item) => (
          <div key={item.id} className="mb-4 border-b border-gray-300 pb-4">
            <p className="font-semibold  text-base text-[#4b1fc5e5]">
              Title: <span className="text-[#4b1fc5e5]">{item.title}</span>
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
              Category: <span className="text-gray-600">{item.category}</span>
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
  );
};

export default PaySummary;
