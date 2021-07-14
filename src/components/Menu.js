import { Link } from "react-router-dom";
import * as ROUTES from "../constants/ROUTES";
import MenuOption from "./MenuOption";
import {
  AiOutlineHome,
  AiOutlineFieldTime,
  AiOutlineSetting,
  AiFillGithub,
} from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import Logo from "./Logo";
import Toggle from "./Toggle";

const Menu = () => {
  // Create elements containing ROUTE to Menu items

  const MenuIcons = [
    <AiOutlineHome />,
    <BsListTask />,
    <AiOutlineFieldTime />,
    <AiOutlineSetting />,
  ];

  const elmLinks = ROUTES.LIST.map((ROUTE, index) => (
    <MenuOption
      pathTo={ROUTES[ROUTE]}
      key={index}
      icon={MenuIcons[index]}
      name={ROUTE}
    />
  ));

  return (
    <div className="absolute top-0 left-0 flex  flex-col justify-between items-center h-screen lg:w-40 md:w-full bg-white">
      <Logo />
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
