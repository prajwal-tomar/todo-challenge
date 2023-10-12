import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Import the Controller

const TodoForm = ({ setTaskList, taskList }) => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (task) => {
    setTaskList([...taskList, task]);
    console.log(taskList);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <Controller
        name="task"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="text"
            placeholder="Create a new todo..."
            {...field}
            className="h-16 p-3 rounded-sm w-[28rem] focus:outline-none shadow-xl border border-black/10 dark:bg-slate-800 dark:text-white"
          />
        )}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hidden"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
