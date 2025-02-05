import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-[80px] text-white fixed bg-black px-4 z-50">
      {/* Logo */}
      <h1 className="text-4xl font-semibold text-white hover:text-cyan-400 transition-all duration-300 ease-in-out flex items-center space-x-2 cursor-pointer">
        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Nuth</span>
        <span className="text-lg text-gray-300">ezzy</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="text-gray-500 px-4 font-medium cursor-pointer hover:scale-105 duration-200 hover:bg-gray-800 active:bg-blue-300 capitalize"
          >
            {link.link}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out absolute right-4"
        aria-label="Toggle menu"
        role="button"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center h-screen w-full absolute top-0 left-0 bg-gradient-to-b from-black to-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-gray-500 py-6 px-4 text-4xl cursor-pointer capitalize"
              onClick={() => setNav(false)} // Close menu when clicking a link
            >
              {link.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
