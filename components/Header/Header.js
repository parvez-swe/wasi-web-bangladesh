import React from "react";
export const Header = () => {
  return (
    <div className="absolute md:fixed w-80 md:w-full h-96 md:h-14 rounded bg-black text-white grid grid-cols-1 md:grid-cols-4 items-center drop-shadow-lg  ">
      <div className="logo grid grid-cols-1 mb-1">
        <div className=" relative top-0 left-1 mr-3 ">
          <div className="absolute top-0 right-1  md:hidden">cart</div>
          <div className="absolute top-0 left-1 md:hidden">X</div>
        </div>
        <h1 className="text-xl font-bold flex items-center justify-center">
          WW Bangladesh
        </h1>
      </div>

      <div className="relative">
        <div className="mt-2 flex items-center justify-center search-bar text-black mb-4">
          <input
            className=" rounded px-1 focus:outline-none"
            type="text"
            placeholder=" search..."
          />
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-4 ">
        <li className="py-2 px-3 font-medium hover:bg-slate-800 flex justify-center  items-center cursor-pointer">
          Home
        </li>
        <li className="py-2 px-3 font-medium hover:bg-slate-800 flex justify-center  items-center cursor-pointer">
          About
        </li>
        <li className="py-2 px-3 font-medium hover:bg-slate-800 flex justify-center  items-center  cursor-pointer">
          Contact
        </li>
        <li className="py-2 px-3 font-medium hover:bg-slate-800 flex justify-center  items-center  cursor-pointer">
          Blogs
        </li>
      </ul>
      <div className="grid grid-cols-1 mr-4 ">
        <div className="hidden py-2 px-3 font-medium hover:bg-slate-900 md:flex justify-end  items-center">
          cart
        </div>
      </div>
    </div>
  );
};
