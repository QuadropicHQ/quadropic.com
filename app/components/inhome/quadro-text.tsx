import React from "react";

const QuadroBanner: React.FC = () => {
  return (
    <div className="relative w-full h-40 flex justify-center items-center">
      <div className="flex items-center font-bold text-6xl">
        <span
          className="mr-2"
          style={{
            WebkitTextStroke: "2px white",
            color: "transparent",
          }}
        >
          Quadropic
        </span>
      </div>
    </div>
  );
};

export default QuadroBanner;
