import { useOutletContext } from "react-router-dom";

const ActiveTasksList = () => {
  const [taskList, setActiveTasksList, taskChecked, activeTasksList] =
    useOutletContext();

  return (
    <div>
      {
        <ul>
          Active Tasks
        </ul>
      }
    </div>
  );
};

export default ActiveTasksList;
