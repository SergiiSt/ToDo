import { useState } from "react";
import css from "./TaskInput.module.css";

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
    <div className={css.taskinput}>
      <input
        type="text"
        placeholder="Enter your task here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={css.input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <button onClick={handleAdd} className={css.addbtn}>
        Add
      </button>
    </div>
  );
}
