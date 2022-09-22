import React from "react";
import classes from "./Mains.module.css";
export const Mains = () => {
  return (
    <>
      <div className=""></div>
      <div className={classes.bg}>
        <div className="grid grid-cols-2">
          <div>Text section</div>
          <div>Imaage section</div>
        </div>
      </div>
    </>
  );
};
