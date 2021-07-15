import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import * as actions from "../actions";
import Logo from "./Logo";

const Navbar = () => {
  const dispatch = useDispatch();
  const onOpenMenu = () => {
    dispatch(actions.openMenu());
  };
  return (
    <nav className="items-center justify-between py-2 px-4 border-b flex sm:hidden transition-all">
      <button onClick={onOpenMenu} className="text-2xl">
        <AiOutlineMenu />
      </button>
      <Logo />
    </nav>
  );
};

export default Navbar;
