"use client";

import { CiLocationOn } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  PiArrowBendDoubleUpRightThin,
  PiHeadphonesThin,
  PiPhoneDisconnectThin,
} from "react-icons/pi";
import { useEffect } from "react";

const Features: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="py-4 mt-5 mb-6 hidden lg:block   text-white  p-4 font-extrabold"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="main-container items-center hidden lg:flex">
          {/* process */}
          <div className="flex space-x-5 items-center lg:ml-10">
            <div className="flex space-x-1 items-center">
              <CiLocationOn className="text-xl" />
              <p className="text-sm text-pure-gray">Track Order</p>
            </div>
            <div className="flex space-x-1 items-center">
              <PiArrowBendDoubleUpRightThin className="text-xl" />
              <p className="text-sm text-pure-gray">info</p>
            </div>
            <div className="flex space-x-1 items-center">
              <PiHeadphonesThin className="text-xl" />
              <p className="text-sm text-pure-gray">Customer Support</p>
            </div>
            <div className="flex space-x-1 items-center">
              <IoIosInformationCircleOutline className="text-xl" />
              <p className="text-sm text-pure-gray">Need Help</p>
            </div>
            <div className="flex space-x-1 items-center">
              <PiPhoneDisconnectThin className="text-xl" />
              <p className="text-sm text-pure-gray">+880-170000000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
