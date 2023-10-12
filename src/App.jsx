import React, { useState, useEffect } from "react";
import lightBgDesktop from "./assets/images/bg-desktop-light.jpg";
import darkBgDesktop from "./assets/images/bg-desktop-dark.jpg";

import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [taskList, setTaskList] = useState([]);
  const [taskChecked, setTaskChecked] = useState([]);
  const [activeTasksList, setActiveTasksList] = useState([]);

  const clearCompleted = () => {
    const updatedTaskList = taskList.filter((_, index) => !taskChecked[index]);
    const updatedTaskChecked = taskChecked.filter(
      (_, index) => !taskChecked[index]
    );

    setTaskList(updatedTaskList);
    setTaskChecked(updatedTaskChecked);
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="font-josefin-sans min-h-screen mb-5 dark:bg-slate-800">
      <div className="relative flex flex-col items-center">
        {theme === "light" ? (
          <img src={lightBgDesktop} alt="desktopBgLight" className="w-full" />
        ) : (
          <img src={darkBgDesktop} alt="desktopBgDark" className="w-full" />
        )}

        <div className="absolute top-[30%]">
          <Header theme={theme} setTheme={setTheme} />
          <TodoForm taskList={taskList} setTaskList={setTaskList} />
          <div className="card relative h-96 w-[28rem] rounded-sm shadow-xl border border-black/10 mt-8 bg-white dark:bg-slate-800">
            <Outlet
              context={[
                taskList,
                setTaskList,
                taskChecked,
                setTaskChecked,
                activeTasksList,
                setActiveTasksList,
              ]}
            />
            <div className="flex justify-between absolute border-t w-full bottom-1 p-3 text-sm dark:bg-slate-800 dark:text-slate-400">
              <p className="hover:cursor-default">
                {taskList.length} items left
              </p>
              <ul className="flex space-x-3">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-blue-800 font-bold" : "text-slate-300"
                      } hover:text-blue-600
                      `
                    }
                  >
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/active"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-blue-800 font-bold" : "text-slate-300"
                      } hover:text-blue-600
                      `
                    }
                  >
                    Active
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/completed"
                    className={({ isActive }) =>
                      `${
                        isActive ? " text-blue-800 font-bold" : "text-slate-300"
                      } hover:text-blue-600
                      `
                    }
                  >
                    Completed
                  </NavLink>
                </li>
              </ul>
              <p
                onClick={clearCompleted}
                className="hover:cursor-pointer hover:text-blue-500"
              >
                Clear Completed
              </p>
            </div>
          </div>
          <div>
            <p className="text-center w-full mt-8">
              Drag and drop to reorder the list
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
