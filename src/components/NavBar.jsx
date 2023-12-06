import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
      <div>
        <h1 className="text-4xl font-logo ml-2 hover:scale-105 duration-500 cursor-pointer">
          Joash
        </h1>
      </div>

      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize px-4 cursor-pointer font-medium text-gray-400 hover:scale-105 hover:text-rose-800 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize px4 cursor-pointer py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
