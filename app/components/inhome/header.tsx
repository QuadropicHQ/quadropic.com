"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  // Manually filling the navigation items
  const navigation = [
    { id: 1, title: "Home", url: "#home", onlyMobile: false },
    { id: 2, title: "About", url: "#about", onlyMobile: false },
    { id: 3, title: "Services", url: "#services", onlyMobile: false },
    { id: 4, title: "Contact", url: "#contact", onlyMobile: false },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b-[0.1px] border-n-6 lg:bg-n-8/90 lg:backdrop-blur-md bg-n-8/90 backdrop-blur-md`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          {/* Your SVG or Text Logo */}
          Quadropic
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${"lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
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
    </div>
  );
};

export default Header;
