import TaskItem from "../TaskItem/TaskItem";
import css from "./TaskList.module.css";

export default function TaskList({ tasks, deleteTask, toogleTask, editTask }) {
  //   console.log(tasks);
  if (tasks.length === 0) {
    return <p className={css.notasks}>No tasks yet. Please add a task.</p>;
  }

  return (
    <ul className={css.tasklist}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toogleTask={toogleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
