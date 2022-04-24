import { useState, useEffect } from "react";

const Spinner = ({ SpinnerCaption }) => {
  const SpinnerCaptionHandler = () => {
    return (
      <h3 className="text-indigo-500 font-bold text-lg uppercase">
        {SpinnerCaption}
      </h3>
    );
  };
  return (
    <div className="flex flex-col w-fit justify-center items-centerspace-y-3">
      <div className="spinner w-20 h-20  border-[16px]"></div>
      {SpinnerCaption && <SpinnerCaptionHandler />}
    </div>
  );
};

export default Spinner;
