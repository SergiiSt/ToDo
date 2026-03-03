import { FaTrashAlt } from "react-icons/fa";
import css from "./TaskItem.module.css";

export default function TaskItem() {
  return (
    <>
      <div className={css.taskitem}>
        <p className={css.text}>here is your task</p>
        <FaTrashAlt />
      </div>
    </>
  );
}
