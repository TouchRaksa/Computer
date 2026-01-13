import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import darkIcon from "../assets/Image/icon/dark.svg";
import optionIcon from "../assets/Image/icon/option.svg"; // your SVG file
import back from "../assets/Image/icon/back.svg";
import search from "../assets/Image/icon/search.svg";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Toggle dark mode on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-400 dark:bg-gray-800 text-black dark:text-white py-3 px-5 flex items-center justify-between z-50">

      {/* LEFT: OPTIONS ICON + SEARCH */}
      <div className="relative flex items-center space-x-4" ref={menuRef}>
        {/* Option Icon from file */}
        <img
          src={optionIcon}
          alt="Options"
          onClick={() => setShowMenu(!showMenu)}
          className={`w-6 h-6 cursor-pointer hover:scale-110 transition ${
            darkMode ? "filter brightness-0 invert" : ""
          }`}
        />

        {/* Dropdown menu */}
        {showMenu && (
          <div className="absolute top-[60px] left-[-20px] bg-gray-300 dark:bg-gray-800 shadow-lg rounded-lg w-40 py-2 z-50">
            <Link
              to="/laptop"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Laptop
            </Link>

            <Link
              to="/mouse"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Mouse
            </Link>

            <Link
              to="/keyboard"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Keyboard
            </Link>

            <Link
              to="/desktop"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Desktop
            </Link>

            <Link
              to="/headphone"
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Headphone
            </Link>
          </div>
        )}

        <img
          src={back}
          alt="Back"
          onClick={() => navigate(-1)}
          className="w-5 h-5 cursor-pointer hover:scale-110 transition"
        />

        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && navigate("/productsearch")}
          className="
            px-8 py-2 rounded-lg
            bg-gray-100 dark:bg-gray-700
            text-black dark:text-white
            border border-gray-300 dark:border-gray-600
            w-[240px] sm:w-[220px] md:w-[350px] lg:w-[500px]
            h-[35px]
            focus:outline-none focus:ring-2 focus:ring-orange-400
          "
        />
      </div>

      {/* RIGHT MENU */}
      <nav className="flex items-center space-x-3">
        <Link to="/about" className="hover:text-orange-400">Contact</Link>

        {/* Dark mode toggle */}
        <img
          src={darkIcon}
          alt="Dark mode"
          onClick={() => setDarkMode(!darkMode)}
          className="w-6 h-6 cursor-pointer hover:scale-110 transition"
        />

      </nav>  
    </div>
  );
}

export default Navbar;
