import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks, deleteTask, toogleTask, editTask }) {
  //   console.log(tasks);
  if (tasks.length === 0) {
    return <p>No tasks yet. Please add a task.</p>;
  }

  return (
    <ul>
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
