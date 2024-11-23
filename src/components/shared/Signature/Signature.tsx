import "./Signature.css";

const Signature: React.FC = () => {
  return (
    <>
      <div className="flex justify-between mt-6 mx-5">
        <div>
          <h1 className="text-2xl font-semibold flex items-center  text-purple-700">
            Contact Us
          </h1>
          <p>For any questions about our company, please contact us at:</p>
          <p className="font-semibold leading-relaxed text-xl ">
            we5ive Industries Ltd.
          </p>
          <p>Phone: +880170000000</p>
          <p>Email: support@we5ive.com</p>
        </div>

        <div className="mt-2 p-2"></div>
        <div>
          <h1 className="signature">Rezoanul</h1>
          <header className=" text-xl     font-semibold  border-b-2 border-purple-700"></header>
          <h2 className="title">CEO</h2>{" "}
        </div>
      </div>
    </>
  );
};

export default Signature;
