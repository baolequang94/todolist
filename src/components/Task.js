import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";

import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const Task = () => {
  const { isDarkMode, tasks, filter } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    if (name === "priority") value = parseInt(value, 10);
    dispatch(actions.filter({ ...filter, [name]: value }));
  };

  const renderTasks = (tasks) => {
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter(
          (task) =>
            task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
        );
      }

      if (filter.priority !== 0) {
        tasks = tasks.filter((task) => task.priority === filter.priority);
      }
    }

    return tasks;
  };

  const tasksFiltered = renderTasks(tasks);

  return (
    <div className="h-screen">
      <div className="flex md:flex-row flex-col p-8 justify-between animate-fadeDown">
        <div className=" flex flex-col w-full md:w-3/5 order-2 md:order-1 md:mr-10 ">
          <div
            className={`flex flex-col md:flex-row items-center justify-between py-2 px-4 ${
              isDarkMode ? "bg-gray-800" : "bg-green-500"
            }`}
          >
            <h1
              className={`font-semibold ${
                isDarkMode ? "text-gray-200" : "text-white"
              }  mb-4 md:mb-0`}
            >
              All Tasks
            </h1>

            <div className="flex flex-col md:flex-row w-full md:w-4/5 md:justify-between">
              <input
                type="text"
                className={`form-input text-xs font-medium focus:ring-transparent border-2 ${
                  isDarkMode
                    ? "border-gray-800 focus:border-gray-800 bg-gray-700 text-gray-200"
                    : "border-green-500 focus:border-green-500"
                }  order-2 md:order-1 mb-4 md:mb-0 md:w-50 md:w-2/5`}
                placeholder="Keyword..."
                value={filter.name}
                name="name"
                onChange={handleChange}
              />
              <select
                className={`form-select  text-xs font-medium focus:ring-transparent ${
                  isDarkMode
                    ? "border-gray-700 focus:border-gray-700 bg-gray-700 text-gray-200"
                    : "border-green-500 focus:border-green-500"
                } mr-4 order-1 md:order-2 w-full mb-4 md:mb-0 md:w-2/5`}
                name="priority"
                onChange={handleChange}
                value={filter.priority}
              >
                <option value="0">All</option>
                <option value="1">Low Priority</option>
                <option value="2">Medium Priority</option>
                <option value="3">High Priority</option>
              </select>
            </div>
          </div>

          {tasksFiltered &&
            tasksFiltered.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                name={task.name}
                status={task.status}
                priority={task.priority}
                isDarkMode={isDarkMode}
              />
            ))}
        </div>

        <TaskForm />
      </div>
    </div>
  );
};

export default Task;
