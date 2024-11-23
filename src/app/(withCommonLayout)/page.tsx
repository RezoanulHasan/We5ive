/* eslint-disable react/no-children-prop */
"use client";
import Container from "@/components/shared/Container/Container";
import AddsBanner from "@/components/UI/Homepage/AddsBanner";
import Banner from "@/components/UI/Homepage/Banner";
import FeaturesGrid from "@/components/UI/Homepage/FeaturesGrid";
import NewArrival from "@/components/UI/Homepage/Product/NewArrival";
import Summer from "@/components/UI/Homepage/Product/Summer";
import Slider from "@/components/UI/Homepage/Slider/Slider";
import { AiOutlineArrowUp } from "react-icons/ai";
const HomePage: React.FC = () => {
  return (
    <>
      {" "}
      <Banner></Banner>
      <FeaturesGrid></FeaturesGrid>{" "}
      <Container>
        <NewArrival></NewArrival>
        <AddsBanner></AddsBanner>
        <Slider></Slider>
        <Summer></Summer>
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
