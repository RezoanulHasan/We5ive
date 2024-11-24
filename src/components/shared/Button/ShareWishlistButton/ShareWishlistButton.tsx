"use client";

import { FaHeart, FaShareAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ShareWishlistButton: React.FC = () => {
  const handleAddToWishlist = () => {
    Swal.fire({
      icon: "success",
      title: "Added Successfully",
      text: "The item has been added to your wishlist!",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleShare = () => {
    Swal.fire({
      icon: "success",
      title: "Shared Successfully",
      text: "The item has been shared successfully!",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="flex gap-4">
      <button
        className="px-6 py-3 bg-red-600 text-white hover:bg-red-500 rounded-lg font-semibold flex items-center"
        onClick={handleAddToWishlist}
      >
        <FaHeart className="mr-2 text-white" />
        Add to Wishlist
      </button>
      <button
        className="px-6 py-3 bg-green-600 text-white hover:bg-green-500 rounded-lg font-semibold flex items-center"
        onClick={handleShare}
      >
        <FaShareAlt className="mr-2 text-white" />
        Share
      </button>
    </div>
  );
};

export default ShareWishlistButton;
