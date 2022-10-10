import React from "react";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';

export const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const clickHandler = () => {
    setShowBar(!showBar);
  };
  return (
    <>
      <div className="nav bg-black text-white text-2xl h-20 flex items-center justify-between relative">
        <h1>Flower</h1>
        <div className="toggleIcon md:hidden">
          {showBar ? (
            <button onClick={clickHandler}>
              <AiOutlineMenu />
            </button>
          ) : (
            <button onClick={clickHandler}>
              <AiOutlineClose />
            </button>
          )}
        </div>
        <ul
          className={`${
            !showBar ? "linksMobile" : "linksMobile  linksMobileHideNav"
          } md:linksForDesktop`}
        >
          <li className="link">Home</li>
          <li className="link">Contact</li>
          <li className="link">About</li>
          <li className="link">Blog</li>
        </ul>
      </div>
    </>
  );
};
