"use client";
import { useRef, useState } from "react";
import { toPng } from "html-to-image"; // Import html-to-image package
import { CartItemProduct } from "@/components/ProductData/ProductData";
import Swal from "sweetalert2"; // Import SweetAlert2 for popups
import { useRouter } from "next/navigation";
type PaySummaryProps = {
  cartItems: CartItemProduct[];
  selectedColors: { [key: string]: string[] };
  selectedSizes: { [key: string]: string[] };
};

const PaySummary = ({
  cartItems,
  selectedColors,
  selectedSizes,
}: PaySummaryProps) => {
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  // State to manage user inputs for name, phone, date, and address
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    date: "",
    address: "",
  });

  // Handle changes in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotals = () => {
    const totalItems = cartItems.reduce(
      (acc, item) => acc + (item.selectedQuantity || 1),
      0
    );
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * (item.selectedQuantity || 1),
      0
    );
    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = calculateTotals();

  const handlePayNow = () => {
    // Check if all fields are filled
    if (
      !userInfo.name ||
      !userInfo.phone ||
      !userInfo.date ||
      !userInfo.address
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill out all user info  before proceeding.",
      });
      return;
    }

    if (summaryRef.current) {
      // Use html-to-image to capture the content of summaryRef and generate an image
      toPng(summaryRef.current)
        .then((dataUrl) => {
          // Create a temporary anchor element to download the image
          const link = document.createElement("a");
          link.href = dataUrl; // Use the data URL as the href
          link.download = "Shopping-summary.png"; // Specify the default file name
          link.click(); // Simulate a click to trigger the download

          // After download, show success message
          Swal.fire({
            icon: "success",
            title: "Payment Summary Saved",
            text: "Your payment summary has been saved successfully.",
          }).then(() => {
            // Reset form fields after success message is acknowledged
            setUserInfo({
              name: "",
              phone: "",
              date: "",
              address: "",
            });

            // Remove cart from localStorage
            localStorage.removeItem("cart");
            window.location.reload();
            // Redirect to /allProduct route
            router.push("/allProduct");
          });
        })
        .catch((error) => {
          console.error("Error generating image", error);
        });
    }
  };

  return (
    <div id="pay-summary-container" className="mt-8 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-4xl font-semibold mb-4 text-center text-purple-600">
        𝓢𝓾𝓶𝓶𝓪𝓻𝓎
      </h2>
      <div ref={summaryRef} className="bg-white p-4 ">
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <p className="mb-4 text-xl text-center font-semibold">
            <span className="font-semibold">Total Products:</span>{" "}
            {cartItems.length}
          </p>
          <p className="mb-4 text-xl text-center font-semibold">
            <span className="font-semibold">Total Items:</span> {totalItems}
          </p>
          <hr className="my-4" />
          <p className="mb-4 text-lg text-center text-gray-600">
            <span className="font-medium">Total Price:</span> $
            {totalPrice.toFixed(2)}
          </p>
          <p className="mb-4 text-lg text-center text-gray-600">
            <span className="font-medium">4% VAT:</span> $
            {(totalPrice * 0.04).toFixed(2)}
          </p>
          <p className="mb-4 text-lg text-center text-gray-600">
            <span className="font-medium">5% Tax:</span> $
            {(totalPrice * 0.05).toFixed(2)}
          </p>
          <p className="mb-4 text-lg text-center text-gray-600">
            <span className="font-medium">15% Discount:</span> $
            {(totalPrice * 0.15).toFixed(2)}
          </p>
          <hr className="my-4" />
          <p className="text-2xl font-semibold text-center text-purple-500">
            Final Total: $
            {(
              totalPrice +
              totalPrice * 0.04 +
              totalPrice * 0.05 -
              totalPrice * 0.15
            ).toFixed(2)}
          </p>
        </div>

        {/* Product Details */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">
            𝓟𝓻𝓸𝓭𝓾𝓬𝓽 𝓓𝓮𝓽𝓪𝓲𝓵𝓼 :
          </h3>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 border-b border-gray-300 pb-4">
              <p className="font-semibold text-base text-purple-600">
                Title: <span className="text-purple-500">{item.title}</span>
              </p>
              <p className="font-semibold text-gray-800 mt-4">
                Selected Colors:{" "}
                <span className="text-gray-600">
                  {selectedColors[item.id]?.join(", ") || "None"}
                </span>
              </p>
              <p className="font-semibold text-gray-800 mb-4">
                Selected Sizes:{" "}
                <span className="text-gray-600 rounded-lg p-2">
                  {selectedSizes[item.id]?.join(", ") || "None"}
                </span>
              </p>
              <p className="font-semibold text-gray-800">
                Season: <span className="text-gray-600">{item.season}</span>
              </p>
              <p className="font-semibold text-gray-800">
                Category: <span className="text-gray-600">{item.category}</span>
              </p>
            </div>
          ))}
        </div>

        {/* User Information Form */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">
            𝓤𝓼𝓮𝓻 𝓓𝓮𝓽𝓪𝓲𝓵𝓼 :
          </h3>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="number"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="date"
            name="date"
            value={userInfo.date}
            onChange={handleChange}
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-center items-center button-custom">
        <button onClick={handlePayNow} className="px-10 py-4">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaySummary;
