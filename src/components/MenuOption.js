import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const MenuOption = ({ icon, pathTo, name, ...restProps }) => {
  const location = useLocation();
  const selected = location.pathname === pathTo;

  const { isDarkMode } = useSelector((state) => state);

  return (
    <Link
      {...restProps}
      className={`font-semibold uppercase text-2xl  ${
        selected
          ? `text-gray-100 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-900"
            }  scale-125`
          : `${isDarkMode ? "text-gray-200" : "text-gray-base"} hover:scale-125`
      } transition-all cursor-pointer mb-6 flex items-center p-4 rounded-full ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-900"
      } transform hover:text-white`}
      to={pathTo}
    >
      {icon}
      {/* <span className="text-sm ml-2">{name}</span> */}
    </Link>
  );
};

export default MenuOption;
