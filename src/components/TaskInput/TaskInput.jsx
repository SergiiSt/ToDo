import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  function handleAdd() {
    const newTask = {
      id: Date.now(),
      completed: false,
      text,
    };
      if (text.trim() === "") {
        alert("Task text cannot be empty!");
        return;
      }
    addTask(newTask);
    setText("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter your task here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
