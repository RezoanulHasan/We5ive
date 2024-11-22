import React from "react";

const data = [
  {
    icon: "🚚",
    title: "FREE SHIPPING",
    description: "BUY BDT 3000+ & GET FREE DELIVERY",
  },
  {
    icon: "🔄",
    title: "7 DAYS EXCHANGE",
    description: "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS",
  },
  {
    icon: "🔒",
    title: "100% PAYMENT SECURE",
    description: "CASH ON DELIVERY AND SECURED ONLINE PAYMENT",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1 shadow-sm hover:shadow-md bg-[#6441C2E5] ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-4 rounded-lg text-white hover:bg-[#886cd2e5]"
        >
          <div className="text-3xl mr-4">{item.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
            <p className="text-sm text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
