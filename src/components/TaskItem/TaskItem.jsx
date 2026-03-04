import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import css from "./TaskItem.module.css";

export default function TaskItem({ task, deleteTask, toogleTask, editTask }) {
  function handleDelete() {
    deleteTask(task.id);
  }

  function handleToogle() {
    toogleTask(task.id);
  }

  function handleEdit() {
    const newText = prompt("Enter new task text:", task.text);
    if (newText) {
      editTask(task.id, newText);
    }
  }

  return (
    <>
      <li className={css.taskitem}>
        <button onClick={handleToogle} disabled={task.completed}>
          {task.completed ? (
            <FaRegCheckCircle />
          ) : (
            <FaRegCircle className={css.checkicon} />
          )}
        </button>

        <p className={css.text}>{task.text}</p>
        <button className={css.editbutton} onClick={handleEdit}>
          Edit
        </button>
        <button className={css.trashbutton} onClick={handleDelete}>
          <FaTrashAlt className={css.trashicon} />
        </button>
      </li>
    </>
  );
}
