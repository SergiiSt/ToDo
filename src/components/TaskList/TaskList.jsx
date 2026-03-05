import TaskItem from "../TaskItem/TaskItem";
import css from "./TaskList.module.css";

export default function TaskList({
  tasks,
  deleteTask,
  toogleTask,
  editTask,
  clearAll,
}) {
  //   console.log(tasks);
  if (tasks.length === 0) {
    return <p className={css.notasks}>No tasks yet. Please add a task.</p>;
  }

  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div className={css.tasklistcontainer}>
      <ul className={css.tasklist}>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toogleTask={toogleTask}
            editTask={editTask}
          />
        ))}
      </ul>
      <button onClick={clearAll} className={css.clearbtn}>
        Clear All Tasks
      </button>
    </div>
  );
}
