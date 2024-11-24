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

      <div>
        <button
          onClick={handleScrollToTop}
          className="absolute bottom-4 right-4 bg-[#29135fe5]   text-white rounded-full p-3"
          aria-label="Scroll to top"
        >
          <AiOutlineArrowUp className="w-10 h-10 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
