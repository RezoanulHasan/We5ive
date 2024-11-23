"use client";
import { Bars } from "react-loader-spinner";

const Spinner: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center    h-[calc(100vh-68px)]  ">
        <Bars
          height="80"
          width="80"
          color="#6441C2E5"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Spinner;
