"use client";
import React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai"; // Importing back icon from React Icons

export const metadata: Metadata = {
  title: "Error page",
  description: "This page and route not found",
};

import useTitle from "@/components/Hooks/useTitle";

const NotFoundPageAll: React.FC = () => {
  useTitle("Not Found");

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h1 className="text-center text-4xl mb-5 text-[#6441C2E5]">
                Page not <span className="text-[#8665dee5]">Found</span>
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=996&t=st=1714550013~exp=1714550613~hmac=87f5c30d1fd38b82f5d3d178168b45c56877032229980930aa3708db7b9bba66"
                  alt="error image"
                  width={1000}
                  height={1000}
                />
              </div>
              <Link href="/">
                <button className="btn mt-10 flex items-center gap-2 px-4 py-2 text-white bg-[#6441C2E5] hover:bg-[#8665dee5] rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <AiOutlineArrowLeft className="w-5 h-5" />
                  Back to homepage
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPageAll;
