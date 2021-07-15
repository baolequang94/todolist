import React from "react";
import { CgGoogleTasks } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as ROUTES from "../constants/ROUTES";
const Logo = ({ type }) => {
  const { isDarkMode } = useSelector((state) => state);
  return (
    <Link
      to={ROUTES.HOME}
      className={`my-4 flex items-center justify-center ${
        isDarkMode ? "text-gray-200" : ""
      }  ${type === "menu" ? "invisible sm:visible" : "sm:invisible visible"}`}
    >
      <CgGoogleTasks className="text-3xl mr-2" />
      <span className="text-md font-medium">To Do</span>
    </Link>
  );
};

export default Logo;
