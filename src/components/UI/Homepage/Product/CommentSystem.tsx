/* eslint-disable @next/next/no-img-element */
import { commentData, Comment } from "@/components/ProductData/ProductData";
import React from "react";

import { FaStar, FaReply, FaThumbsUp } from "react-icons/fa";

const CommentSystem: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center text-[#381195e5]">
        Customer Reviews
      </h2>
      {/* Flex container for two columns */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: 3 Comments */}
        <div className="flex-1 space-y-6">
          {commentData.slice(0, 3).map((comment: Comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow flex gap-4 items-start"
            >
              {/* User Image */}
              <img
                src={comment.image}
                alt={comment.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                {/* User Details */}
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-medium">{comment.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-sm text-gray-600">
                      {comment.review.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-gray-700 mt-2">{comment.comment}</p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <FaThumbsUp />
                    Like
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <FaReply />
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: 3 Comments */}
        <div className="flex-1 space-y-6">
          {commentData.slice(3, 6).map((comment: Comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow flex gap-4 items-start"
            >
              {/* User Image */}
              <img
                src={comment.image}
                alt={comment.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                {/* User Details */}
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-medium">{comment.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-sm text-gray-600">
                      {comment.review.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-gray-700 mt-2">{comment.comment}</p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <FaThumbsUp />
                    Like
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <FaReply />
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSystem;
