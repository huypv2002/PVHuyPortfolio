import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Adjust the delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`flex shadow-customPurpleBoxShadow bg-white dark:bg-black items-center fixed top-0 w-full z-50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold dark:drop-shadow-customPurpleDropShadow transition-colors duration-500">
        <Link
              to="hero"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              PHAM VAN HUY
            </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden z-50">
          <button onClick={handleMenuToggle} className="text-3xl">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Menu Items */}
        <ul
  className={`flex flex-col gap-8 justify-center items-center fixed top-0 right-0 h-screen w-full bg-white dark:bg-black transition-transform duration-500 ease-in-out sm:static sm:flex-row sm:h-auto sm:w-auto sm:bg-transparent p-4 sm:p-0 ${
    isMenuOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"
  }`}
>

          <li className="p-2 sm:py-0 sm:border-none dark:drop-shadow-customPurpleDropShadow">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-customPurple transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              About
            </Link>
          </li>
          <li className="p-2 sm:py-0 sm:border-none dark:drop-shadow-customPurpleDropShadow">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-customPurple transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="p-2 sm:py-0 sm:border-none dark:drop-shadow-customPurpleDropShadow">
            <Link
              to="resume"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-customPurple transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li className="p-2 sm:py-0 dark:drop-shadow-customPurpleDropShadow">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-customPurple transition-colors duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </header>
  );
};

export default Header;
