import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const ShoppingCart = () => {
  return (
    <div>
      {/* Cart Dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} className="btn btn-ghost btn-circle indicator">
          <span className="badge badge-sm indicator-item">8</span>
          <FaShoppingCart className="h-5 w-5" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <span className="text-lg font-bold">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
          </li>
          <li>
            <button className="btn btn-primary btn-block">View Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
