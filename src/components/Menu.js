import { Link } from "react-router-dom";
import * as ROUTES from "../constants/ROUTES";
import MenuOption from "./MenuOption";
import {
  AiOutlineHome,
  AiOutlineFieldTime,
  AiOutlineSetting,
  AiFillGithub,
} from "react-icons/ai";

import { GrFormClose } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import Logo from "./Logo";
import Toggle from "./Toggle";
// Redux
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";

const Menu = () => {
  // Create elements containing ROUTE to Menu items

  const MenuIcons = [
    <AiOutlineHome />,
    <BsListTask />,
    <AiOutlineFieldTime />,
    <AiOutlineSetting />,
  ];

  const isDisplayMenu = useSelector((state) => state.menu);

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
      } flex  flex-col justify-between items-center h-screen sm:w-40 w-80 bg-white transition-all z-50`}
    >
      <Logo type="menu" />
      <button
        className="absolute right-5 top-5 text-4xl opacity-50 visible sm:invisible"
        onClick={onCloseMenu}
      >
        <GrFormClose />
      </button>
      <ul className="flex flex-col items-center justify-center">{elmLinks}</ul>

      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Toggle />
        </div>
        <Link
          to={{ pathname: "https://github.com/lequangbao1" }}
          className="py-2 px-4 flex items-center justify-center mb-4"
          target="_blank"
        >
          <span className="mr-2 text-sm text-black font-semibold">
            lequangbao1
          </span>{" "}
          <AiFillGithub className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
