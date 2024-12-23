"use client";

import { data } from "@/components/ProductData/ProductData";

const FeaturesGrid: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  shadow-sm hover:shadow-md  bg-[#29135fe5] ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-1 rounded-lg text-white hover:bg-[#5e42ace5]"
          >
            <div className="text-3xl mr-4">{item.icon}</div>
            <div>
              <h3 className="text-base font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-sm text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesGrid;
