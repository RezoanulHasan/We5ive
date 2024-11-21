"use client";
import React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Error page",
  description: "This page and route not found",
};

import { useRouter } from "next/navigation";
import useTitle from "@/components/Hooks/useTitle";

const NotFoundPageAll = () => {
  useTitle("Not Found");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h1 className="text-center text-4xl mb-5">
                Page not <span className="text-accent">Found </span>
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=996&t=st=1714550013~exp=1714550613~hmac=87f5c30d1fd38b82f5d3d178168b45c56877032229980930aa3708db7b9bba66"
                  alt="error image"
                  width={1000}
                  height={1000} // Set your desired height
                />
              </div>
              <button
                onClick={() => router.push("/")}
                className="btn mt-10  btn-outline   bg-black text-green-300   "
              >
                Back to homepage
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPageAll;
