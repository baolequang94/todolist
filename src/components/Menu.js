import { Link } from "react-router-dom";
import * as ROUTES from "../constants/ROUTES";
import MenuOption from "./MenuOption";
import {
  AiOutlineHome,
  AiOutlineFieldTime,
  AiOutlineSetting,
  AiFillGithub,
} from "react-icons/ai";

import { IoCloseOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import Logo from "./Logo";
import Toggle from "./Toggle";
// Redux
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";

const Menu = () => {
  // Create elements containing ROUTE to Menu items

  const MenuIcons = [
    <AiOutlineHome className="text-2xl" />,
    <FaTasks className="text-2xl" />,
    <AiOutlineFieldTime className="text-2xl" />,
    <AiOutlineSetting className="text-2xl" />,
  ];

  const { isDisplayMenu, isDarkMode } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onCloseMenu = () => {
    dispatch(actions.closeMenu());
  };

  const elmLinks = ROUTES.LIST.map((ROUTE, index) => (
    <MenuOption
      pathTo={ROUTES[ROUTE]}
      key={index}
      icon={MenuIcons[index]}
      name={ROUTE}
      onClick={onCloseMenu}
    />
  ));

  return (
    <div
      className={`absolute top-0 sm:left-0 ${
        isDisplayMenu ? "left-0" : "-left-full"
      } flex  flex-col justify-between items-center h-screen sm:w-40 w-80 ${
        isDarkMode ? "bg-black-100" : "bg-white"
      }  transition-all duration-700  z-40`}
    >
      <Logo type="menu" />
      <button
        className={` 
           absolute right-5 top-5 opacity-80 text-4xl visible sm:invisible`}
        onClick={onCloseMenu}
      >
        <IoCloseOutline className={`${isDarkMode ? "text-gray-200" : ""}`} />
      </button>
      <ul className="flex flex-col justify-center">{elmLinks}</ul>

      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Toggle />
        </div>
        <Link
          to={{ pathname: "https://github.com/lequangbao1" }}
          className={`py-2 px-4 flex items-center justify-center mb-4 ${
            isDarkMode ? "text-gray-200" : "text-black-100"
          }`}
          target="_blank"
        >
          <span
            className={`mr-2 text-sm 
             font-semibold`}
          >
            lequangbao1
          </span>{" "}
          <AiFillGithub className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
