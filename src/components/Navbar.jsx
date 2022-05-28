import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="fixed bg-slate-200 shadow-lg top-0 left-0 right-0 z-10 h-[60px] flex items-center justify-around w-full  mx-auto">
      <div className="logo text-2xl uppercase">
        <NavLink className="cursor-pointer hover:opacity-9 " to="/">
          Crypto<span className="text-sky-600">News</span>
        </NavLink>
      </div>
      <div className="menu sm:flex hidden">
        <ul className="list-none flex items-center space-x-6">
          <li>
            <NavLink
              className="sm:block text-[1.1rem] mx-2 sm:hover:opacity-9 sm:hover:text-sky-500 hidden"
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
