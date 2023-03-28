import React from "react";
import BG1 from "../images/Hero1.jpg";
const Herosection = () => {
  return (
    <div className="w-full h-[70vh] flex p-5">
      <div className="w-1/2 flex gap-5 text-center flex-col items-center justify-evenly">
        <div className="text-5xl font-bold">
          A <span className="text-blue-400">smarter</span>,{" "}
          <span className="text-green-400">faster </span>
          and <span className="text-yellow-400">easier</span> way to get rid of
          parking
        </div>
        <div className="flex p-2 flex-col justify-start w-full items-start text-xl font-medium gap-1">
            <li>Hassle free</li>
            <li>Latest Technology (web3)</li>
            <li>No central authorities</li>
            <li>Transparent Transaction</li>
        </div>
        <div className="bg-green-500 p-2 text-center text-white rounded-md">Scroll Down to continue</div>
      </div>
      <div className="w-1/2">
        <img className="w-full object-cover" src={BG1} alt="picy" />
      </div>
    </div>
  );
};

export default Herosection;
