import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        day: task.day,
      },
    ]);
  }
  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
    console.log(taskID);
  }

    
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask
    }}>{props.children}</TaskContext.Provider>
  );
}
