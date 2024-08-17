import { useState } from "react";

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [task, setTask] = useState(taskToEdit ? taskToEdit.text : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    if (taskToEdit) {
      editTask(taskToEdit.id, task);
      clearEdit();
    } else {
      addTask(task);
    }

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe una tarea..."
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {taskToEdit ? "Editar Tarea" : "Agregar Tarea"}
      </button>
    </form>
  );
};

export default TaskForm;
