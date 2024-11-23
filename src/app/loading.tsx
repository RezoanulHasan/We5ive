"use client";

import Spinner from "@/components/shared/Spinner/Spinner";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center    h-[calc(100vh-68px)]  ">
      <Spinner></Spinner>
    </div>
  );
};

export default LoadingPage;
