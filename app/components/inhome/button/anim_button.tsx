"use client";
import { useState } from "react";

const AnimButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <a
        href="#"
        style={{
          display: "inline-block",
          color: "#ffffff",
          padding: "32px",
          position: "relative",
          letterSpacing: "1px",
          textDecoration: "none",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            borderRadius: "100%",
            boxShadow: "0 0 1px 1px #fff",
            transition: "transform 0.3s linear",
            transform: hover ? "scale(0)" : "scale(1)",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: hover
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, -50%) scale(0)",
            width: "56px",
            height: "56px",
            borderRadius: "100%",
            background: "#ffffff",
            display: "flex",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-arrow-right"
            viewBox="0 0 21 12"
            style={{ width: "24px", height: "24px", margin: "auto" }}
          >
            <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
          </svg>
        </span>
        <p
          style={{
            position: "absolute",
            top: "50%",
            transform: hover ? "translate(40px, -50%)" : "translateY(-50%)",
            whiteSpace: "nowrap",
            zIndex: 2,
            padding: "24px 8px",
            fontSize: "large",
            transition: "transform 0.3s linear",
          }}
        >
          Discover the project
        </p>
      </a>
    </div>
  );
};

export default AnimButton;
