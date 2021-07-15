import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiFillBell } from "react-icons/ai";

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-fadeDown border max-w-md py-4 px-8 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-gray-800 text-4xl font-bold mb-4">Coming soon.</h2>
        <p className="text-gray-600 text-md mb-4 font-medium">
          We will notify you if this feature is ready 🙌
        </p>
        <button className="relative bg-gray-300 hover:bg-gray-400 text-gray-800 uppercase flex items-center justify-center border py-2 px-4 rounded-lg font-semibold transition-all active:opacity-75">
          <span className="mr-2">subscribe</span>
          <HiOutlineLightBulb className="text-xl" />
          <span className="absolute h-4 w-4 -top-2 -right-2 animate-ping bg-red-400 opacity-75 rounded-full"></span>
          <AiFillBell className="absolute inline-flex h-4 w-4  -top-2 -right-2 rounded-full  text-red-600 " />
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
