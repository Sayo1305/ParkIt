import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-slate-300 p-3 ">
      <div className="text-center">
        <div className="text-3xl font-bold italic">
          Park<span className="text-purple-600 not-italic">iT</span>
        </div>
      </div>
      <div className="w-1/2 my-3 mx-auto h-[1px] bg-slate-600"></div>
      <div className="w-full text-center font-bold">Copyright <span className="text-purple-800">@ParkIt</span></div>
    </div>
  );
};

export default Footer;
