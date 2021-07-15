import { useDispatch } from "react-redux";
import * as actions from "../actions";

import { BsDot } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TaskItem = ({ id, name, status, priority, isDarkMode }) => {
  const priorities = ["None", "Low", "Medium", "High"];
  const iconColor = [
    "None",
    "text-yellow-300",
    "text-yellow-600",
    "text-red-600",
  ];

  const dispatch = useDispatch();

  const onToggleStatus = () => {
    dispatch(actions.toggleStatus(id));
  };

  const onDeteleTask = () => {
    dispatch(actions.deleteTask(id));
  };

  const onEditTask = () => {
    dispatch(actions.openForm());
    dispatch(actions.editTask({ id, name, status, priority }));
  };

  return (
    <div
      className={`grid grid-cols-6 items-center py-2 px-4 border-b border-gray-primary ${
        isDarkMode ? "text-gray-100" : ""
      }`}
    >
      <div className="col-span-3 md:col-span-4">
        <input
          type="checkbox"
          checked={status}
          onChange={onToggleStatus}
          className={`form-checkbox rounded-full text-green-500 focus:ring-transparent mr-4`}
        />

        <span
          className={`${
            status ? "line-through" : ""
          } text-sm font-medium transition-all`}
        >
          {name}
        </span>
      </div>
      <div className="flex items-center px-2 col-span-3 md:col-span-2">
        <BsDot className={`${iconColor[priority]} text-3xl`} />
        <span className="ml-4 text-xs font-medium">{`${priorities[priority]} Priority`}</span>
        <div className="ml-auto flex items-center justify-end">
          <div
            className="mr-2 cursor-pointer hover:text-green-600 transition-all hover:scale-125 transform"
            onClick={onEditTask}
          >
            <AiOutlineEdit className="text-md" />
          </div>
          <div
            className="cursor-pointer hover:text-red-600 transition-all hover:scale-125 transform"
            onClick={onDeteleTask}
          >
            <AiOutlineDelete className="text-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
