import React from "react";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import Link from "next/link";
export const Header = () => {
  const [showBar, setShowBar] = useState(true);
  const clickHandler = () => {
    setShowBar(!showBar);
  };
  return (
    <>
      <div className="nav bg-black text-white text-2xl h-20 flex items-center justify-between relative border-b border-slate-400">
        <h1 className="cursor-pointer">Flower</h1>
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
          } `}
        >
          <li className="link" onClick={clickHandler}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="link" onClick={clickHandler}>
            Contact
          </li>
          <li className="link" onClick={clickHandler}>
            About
          </li>
          <li className="link" onClick={clickHandler}>
            <Link href="/blogs">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
