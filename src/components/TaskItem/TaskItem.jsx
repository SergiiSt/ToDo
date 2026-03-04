import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
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
        <button
          onClick={handleToogle}
          disabled={task.completed}
          className={css.togglebutton}
        >
          {task.completed ? (
            <FaRegCheckCircle className={css.checkicon} />
          ) : (
            <FaRegCircle className={css.uncheckicon} />
          )}
        </button>

        <p
          className={css.text}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "black",
          }}
        >
          {task.text}
        </p>
        <button className={css.editbutton} onClick={handleEdit}>
          <RiEdit2Fill className={css.editicon} />
        </button>
        <button className={css.trashbutton} onClick={handleDelete}>
          <FaTrashAlt className={css.trashicon} />
        </button>
      </li>
    </>
  );
}
