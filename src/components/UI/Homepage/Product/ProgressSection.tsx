import React from "react";

const ProgressSection: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-semibold">5</p>
        <progress
          className="progress progress-warning flex-grow"
          value="90"
          max="100"
          aria-label="5-star progress"
        ></progress>
        <span className="text-gray-500">90</span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-semibold">4</p>
        <progress
          className="progress progress-warning flex-grow"
          value="80"
          max="100"
          aria-label="4-star progress"
        ></progress>
        <span className="text-gray-500">80</span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-semibold">3</p>
        <progress
          className="progress progress-warning flex-grow"
          value="20"
          max="100"
          aria-label="3-star progress"
        ></progress>
        <span className="text-gray-500">20</span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-semibold">2</p>
        <progress
          className="progress progress-warning flex-grow"
          value="10"
          max="100"
          aria-label="2-star progress"
        ></progress>
        <span className="text-gray-500">10</span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-gray-700 font-semibold">1</p>
        <progress
          className="progress progress-warning flex-grow"
          value="0"
          max="100"
          aria-label="1-star progress"
        ></progress>
        <span className="text-gray-500">0</span>
      </div>
    </>
  );
};

export default ProgressSection;
