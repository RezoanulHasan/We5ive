import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
const Newsletter: React.FC = () => {
  const [emailToBeSubscribed, setEmailToBeSubscribed] = useState("");

  const handleEmailSubscription = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setEmailToBeSubscribed("");

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "Thank you for subscribing to our newsletter!",
      confirmButtonColor: "#b6a7dde5", // Matches the yellow button style
    });
  };

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold     text-[#b6a7dde5]">
        Sign Up For Our Newsletter!
      </h1>
      <p className="text-sm md:text-base">
        Get notified about updates and be the first to get early access to new
        product update
      </p>
      <div className="flex flex-col md:flex-row gap-2">
        <form className="relative" onSubmit={handleEmailSubscription}>
          <input
            type="email"
            className="input input-bordered w-full md:w-64 text-black focus:outline-none focus:ring-2 focus:ring-purple-400  "
            placeholder="Enter your email"
            required
            value={emailToBeSubscribed}
            onChange={(e) => setEmailToBeSubscribed(e.target.value)}
          />

          <button
            type="submit"
            className="btn button-custom w-full md:w-auto transition-all duration-200 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
