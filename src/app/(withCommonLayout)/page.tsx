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
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Banner />
      <FeaturesGrid />
      <Container>
        <NewArrival />
        <AddsBanner />
        <Slider />
        <Summer />
      </Container>
      <button
        onClick={handleScrollToTop}
        className="absolute bottom-4 right-4 bg-black text-white rounded-full p-3"
        aria-label="Scroll to top"
      >
        <AiOutlineArrowUp className="w-14 h-16 animate-bounce" />
      </button>
    </div>
  );
};

export default HomePage;
