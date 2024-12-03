"use client";

import { DetailsPageProduct } from "@/components/ProductData/ProductData";
import React from "react";
import { FaWarehouse, FaLeaf, FaVenusMars } from "react-icons/fa";

interface DetailsProps {
  product: DetailsPageProduct;
}

const Details: React.FC<DetailsProps> = ({ product }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* Category */}
      <div className="mt-6 mb-4 text-2xl text-center text-gray-700 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono">
        <p className="font-semibold">
          Category: <span className="text-[#6441C2E5]">{product.category}</span>
        </p>
      </div>

      {/* Stock Information */}
      <div className="flex flex-wrap gap-6 sm:gap-8 text-lg mt-7 justify-center sm:justify-start">
        <div className="flex items-center gap-3">
          <FaWarehouse className="text-green-500 text-xl" />
          <span className="text-gray-600 font-semibold">Stock:</span>
          <span
            className={`px-2 py-1 font-medium rounded-full ${
              product.stock > 0
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <p className="font-semibold">
          Available Stock:{" "}
          <span className="text-[#6441C2E5] font-mono text-2xl">
            {product.stock}
          </span>
        </p>
        <p className="font-semibold">
          Upcoming:{" "}
          <span className="text-[#6441C2E5] font-mono text-2xl">
            {product.quantity}
          </span>
        </p>
      </div>

      {/* Additional Details */}
      <div className="text-xl flex flex-wrap sm:flex-nowrap justify-between gap-6 sm:gap-8 space-y-3 sm:space-y-0 mt-6">
        <div className="flex items-center gap-3">
          <FaLeaf className="text-green-500 text-lg" />
          <p className="font-semibold">
            𝓢𝓮𝓪𝓼𝓸𝓷:{" "}
            <span className="text-[#6441C2E5] font-mono">{product.season}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaVenusMars className="text-blue-500 text-lg" />
          <p className="font-semibold">
            𝓖𝓮𝓷𝓭𝓮𝓻:{" "}
            <span className="text-[#6441C2E5] font-mono">{product.gender}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
