// import "../index.css";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";
import { FiSun, FiMoon } from "react-icons/fi";

const Toggle = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();
  const onToggleDarkMode = () => {
    dispatch(actions.toggleDarkMode());
  };
  return (
    <label
      forhtml="toggle"
      className="flex items-center justify-center cursor-pointer"
    >
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          id="toggle"
          checked={isDarkMode}
          onChange={onToggleDarkMode}
        />
        <div
          className={`w-14 h-8 ${
            isDarkMode ? "bg-gray-100" : "bg-gray-600"
          }  rounded-full transition-all`}
        ></div>
        <div
          className={`${
            isDarkMode ? "bg-gray-900 translate-x-full" : "bg-white"
          } transform z-10 absolute w-6 h-6 left-1 top-1 transition rounded-full flex items-center justify-center`}
        ></div>
        <div className="absolute w-6 h-6 left-1 top-1 flex items-center justify-center text-black">
          <FiSun />
        </div>
        <div className="absolute w-6 h-6 right-1 top-1 flex items-center justify-center text-white">
          <FiMoon />
        </div>
      </div>
    </label>
  );
};

export default Toggle;
