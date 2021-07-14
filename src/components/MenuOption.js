import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuOption = ({ icon, pathTo, name }) => {
  const location = useLocation();
  const selected = location.pathname === pathTo;

  return (
    <Link
      className={`font-semibold uppercase text-2xl  ${
        selected
          ? "text-white bg-gray-900 scale-125"
          : "text-gray-base hover:scale-125"
      } transition-all cursor-pointer mb-6 flex items-center p-4 rounded-full hover:bg-gray-900 transform hover:text-white`}
      to={pathTo}
    >
      {icon}
      {/* <span className="text-sm ml-2">{name}</span> */}
    </Link>
  );
};

export default MenuOption;
