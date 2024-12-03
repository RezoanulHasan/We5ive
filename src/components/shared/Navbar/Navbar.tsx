/* eslint-disable react/no-unescaped-entities */
"use client";
import "./scroll.css";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

import SearchButton from "./Content/SearchButton";
import ShoppingCart from "./Content/ShoppingCart";
import UserProfile from "./Content/UserProfile";
import MainLogo from "./MainLogo";

const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const navOptions = (
    <>
      <li className="text-nav ">
        <Link href="/">Home</Link>
      </li>

      <li className="text-nav ">
        <Link href="/allProduct">Shop</Link>
      </li>
      <li className="text-nav ">
        <Link href="/aboutCompany">Details</Link>
      </li>
      <li className="text-nav ">
        <Link href="/">What's News</Link>
      </li>
    </>
  );

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />
      <div className="navbar fixed z-50 top-0 bg-opacity-30 bg-base-100 shadow-sm mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden bg-custom"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-2xl rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <MainLogo></MainLogo>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  ">{navOptions}</ul>
        </div>

        <div className="navbar-end gap-6">
          <SearchButton></SearchButton>

          <ShoppingCart></ShoppingCart>
          <UserProfile></UserProfile>
        </div>
      </div>
    </>
  );
};

export default Navbar;
