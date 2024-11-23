import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const ShoppingCart = () => {
  return (
    <>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} className="btn btn-ghost btn-circle indicator">
          <span className="badge badge-sm indicator-item">8</span>
          <FaShoppingCart className="h-5 w-5" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-custom rounded-box z-[1] mt-3 w-52 p-2 "
        >
          <li className="flex justify-center items-center text-center">
            <span className="text-lg font-bold ">8 Items</span>
          </li>
          <li className="flex justify-center items-center text-center">
            {" "}
            <Link href="/cartItems">
              <button className="btn button-custom  btn-block">
                View Cart
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShoppingCart;
