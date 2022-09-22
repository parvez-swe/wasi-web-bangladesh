import React from "react";
import classes from "./Header.module.css";
export const Header = () => {
  return (
    <div className="w-80 h-96 rounded bg-black text-white grid grid-cols-1 md:grid-cols-3 items-center  ">
      <div className="relative">
        <div className=" relative top-0 left-1 ">
          <div className="absolute top-0 right-1">cart</div>
          <div className="absolute top-0 left-1">X</div>
        </div>
        <div className="mt-2 flex items-center justify-center search-bar text-black mb-4">
          <input
            className=" rounded px-1 focus:outline-none"
            type="text"
            placeholder=" search..."
          />
        </div>
      </div>

      <div className="logo grid grid-cols-1 mb-1">
        <h1 className="text-xl font-bold flex items-center justify-center">
          WW Bangladesh
        </h1>
      </div>

      <ul className="grid grid-cols-1 ">
        <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center  ">
          Home
        </li>
        <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center">
          About Us
        </li>
        <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center">
          Contact
        </li>
        <li className="py-2 px-3 font-medium hover:bg-red-400 flex justify-center  items-center">
          Blogs
        </li>
      </ul>
    </div>
  );
};
