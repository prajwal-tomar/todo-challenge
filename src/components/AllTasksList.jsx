import { useOutletContext } from "react-router-dom";
import iconCross from "../assets/images/icon-cross.svg";

const AllTasksList = () => {
  const [
    taskList,
    setTaskList,
    taskChecked,
    setTaskChecked,
  ] = useOutletContext();

  const toggleTaskCompletion = (index) => {
    const updatedTaskChecked = [...taskChecked];
    updatedTaskChecked[index] = !updatedTaskChecked[index];
    setTaskChecked(updatedTaskChecked);
  };

  const deleteTask = (index) => {
    console.log("Deleted task at index: ", index);
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      {
        <ul>
          {taskList.map((taskItem, index) => (
            <li
              className="border-b p-3 py-4 flex items-center justify-between dark:text-slate-300"
              key={index}
            >
              <div>
                <input
                  type="checkbox"
                  className="mr-5"
                  name="todoitem"
                  checked={taskChecked[index]}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span
                  className={`${
                    taskChecked[index] ? "line-through text-slate-300 dark:text-slate-400" : ""
                  }`}
                >
                  {taskItem.task}
                </span>
              </div>
              <img
                src={iconCross}
                alt="crossIcon"
                onClick={() => deleteTask(index)}
              />
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default AllTasksList;
