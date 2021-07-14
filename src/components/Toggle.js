import "../index.css";
import { FiSun, FiMoon } from "react-icons/fi";

const Toggle = () => {
  return (
    <label
      forHTML="toggle"
      className="flex items-center justify-center cursor-pointer"
    >
      <div className="relative">
        <input type="checkbox" className="sr-only" id="toggle" />
        <div className="w-14 h-8 bg-gray-600 rounded-full"></div>
        <div className="z-10 dot absolute w-6 h-6 left-1 top-1 transition bg-white rounded-full flex items-center justify-center"></div>
        <div className="absolute w-6 h-6 left-1 top-1 flex items-center justify-center text-white">
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
