"use client";

import { useState, useEffect } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup when the component mounts
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleContact = () => {
    window.location.href = "mailto:contact@quadropic.com";
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-0">
          <div
            className="z- 40 m-4 bg-black p-4 rounded-2xl shadow-lg max-w-md"
            style={{ border: "1.5px solid rgba(255, 255, 255, 0.15)" }}
          >
            <div className="flex items-center justify-center">
              <FaTriangleExclamation className="text-7xl text-white opacity-40" />
            </div>
            <div className="flex items-center justify-center">
              <h2 className="z-40 text-lg font-semibold">
                Website Under Development
              </h2>
            </div>
            <p>
              Please make sure that we are actively developing website. The
              Information written here is inaccurate. This is just a Placeholder
              Website. We'll be back soon with the actual website. Thank you for
              your patience.
            </p>
            <button
              onClick={handleClose}
              className="z- my-4 mx-2 40mt-4 px-2 py-2 bg-white text-black rounded-xl"
            >
              Okay, Got it!
            </button>
            <button
              onClick={handleContact}
              className="z- my-4 mx-2 40mt-4 px-2 py-2 bg-white text-black rounded-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
