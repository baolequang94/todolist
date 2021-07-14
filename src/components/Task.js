import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";

import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const Task = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
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
    <div className="h-screen bg-gray-background">
      <div className="grid grid-cols-4 gap-8 p-8">
        <div className="  rounded flex flex-col col-span-2">
          <div className="flex items-center justify-between py-2 px-4 border-b border-gray-primary bg-green-500">
            <h1 className="font-semibold text-white">All Tasks</h1>

            {/* <BsThreeDots
                className="cursor-pointer text-2xl text-gray-base"
                onClick={handleShow}
              /> */}
            <div className="flex">
              <input
                type="text"
                className="form-input text-xs font-medium focus:ring-transparent border-2 border-green-500 focus:border-green-500"
                placeholder="Keyword..."
                value={filter.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <select
              className={`form-select block text-xs font-medium focus:ring-transparent focus:border-green-500 border-2 border-green-500 mr-4`}
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

          {tasksFiltered &&
            tasksFiltered.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                name={task.name}
                status={task.status}
                priority={task.priority}
              />
            ))}
        </div>

        <TaskForm />
      </div>
    </div>
  );
};

export default Task;
