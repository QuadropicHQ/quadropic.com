"use client";

import { IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    }
  };

  const navigation = [
    { id: 1, title: "Home", url: "#home", onlyMobile: false },
    { id: 2, title: "Values", url: "#values", onlyMobile: false },
    { id: 3, title: "Services", url: "#services", onlyMobile: false },
    { id: 4, title: "What They Say", url: "#testimonials", onlyMobile: false },
    { id: 5, title: "Contact Us", url: "#contact", onlyMobile: false },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md py-4"
      style={{ borderBottom: "1.5px solid rgba(255, 255, 255, 0.15)" }}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          {/* Your logo SVG code here */}
        </a>

        <nav className={`flex ${openNavigation ? "" : "hidden"} lg:flex`}>
          <div className="flex flex-col justify-center space-y-4 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-semibold text-lg uppercase transition-colors hover:text-n-1 lg:text-base lg:hover:text-n-1`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          {openNavigation ? (
            <IconX className="w-6 h-6 text-n-1" />
          ) : (
            <IconMenu className="w-6 h-6 text-n-1" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
