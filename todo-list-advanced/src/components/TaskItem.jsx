const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
    return (
      <div className="flex justify-between items-center p-2 mb-2 bg-gray-100 rounded">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="mr-2"
          />
          <span className={`${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.text}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setTaskToEdit(task)}
            className="bg-yellow-500 text-white px-2 py-1 rounded"
          >
            Editar
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  };
  
  export default TaskItem;
  