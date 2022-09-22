import React from "react";
import classes from "./Mains.module.css";
export const Mains = () => {
  return (
    <>
      <div className={classes.bg}>
        <div className="grid grid-cols-1 md:grid-cols-2  h-[90vh] items-center content-center ">
          <div className="ml-5">
            <h1 className="text-3xl font-sans font-bold leading-10 mb-5">
              Welcome To{" "}
              <span className="text-[green]">
                <br />
                Wasi Web Bangladesh
              </span>{" "}
            </h1>
            <h1 className="text-xl font-bold text-slate-800">
              We are working for Website, Web app, flutter cross app and Digital
              Marketing
            </h1>
          </div>
          <div className="items-center content-center">
            <h1> Im here for png image</h1>
          </div>
        </div>
      </div>
    </>
  );
};
