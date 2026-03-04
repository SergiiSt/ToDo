import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    setTasks((prevTask) => [...prevTask, newTask]);
  }

  function deleteTask(id) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  function toogleTask(id) {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function editTask(id, newText) {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, text: newText } : task,
      ),
    );
  }

  return (
    <>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toogleTask={toogleTask}
        editTask={editTask}
      />
    </>
  );
}

export default App;
