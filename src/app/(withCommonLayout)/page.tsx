/* eslint-disable react/no-children-prop */
"use client";
import Container from "@/components/shared/Container/Container";
import Banner from "@/components/UI/Homepage/Banner";
import FeaturesGrid from "@/components/UI/Homepage/FeaturesGrid";
import { AiOutlineArrowUp } from "react-icons/ai";
const HomePage: React.FC = () => {
  return (
    <>
      {" "}
      <Banner></Banner>
      <FeaturesGrid></FeaturesGrid>{" "}
      <Container>
        <a
          href="#"
          className="absolute bottom-0 right-0  bg-black text-white rounded-full"
        >
          <AiOutlineArrowUp className="w-14 h-16 animate-bounce" />
        </a>
      </Container>
    </>
  );
};

export default HomePage;
