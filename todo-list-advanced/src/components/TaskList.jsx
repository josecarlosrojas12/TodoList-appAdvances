import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No hay tareas aún.</p>
      )}
    </div>
  );
};

export default TaskList;
