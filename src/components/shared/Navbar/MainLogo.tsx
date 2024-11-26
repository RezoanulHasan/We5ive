"use client";

import Image from "next/image";

import logo from "../../../assets/logo.png";

import Link from "next/link";
const MainLogo: React.FC = () => {
  return (
    <div>
      <Link href="/" className="btn btn-ghost text-2xl">
        <Image src={logo} alt="logo" width={150} height={10} />
      </Link>
    </div>
  );
};

export default MainLogo;
