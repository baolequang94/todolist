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
      className={`text-xl  ${
        selected
          ? `text-gray-100 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-900"
            }  scale-125`
          : `${isDarkMode ? "text-gray-200" : "text-gray-base"} hover:scale-125`
      } transition-all cursor-pointer mb-8 flex items-center  px-4 py-3 rounded-full ${
        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-900"
      } transform hover:text-white`}
      to={pathTo}
    >
      {icon}
      <span className="text-sm font-medium ml-2 capitalize">
        {name.toLowerCase()}
      </span>
    </Link>
  );
};

export default MenuOption;
