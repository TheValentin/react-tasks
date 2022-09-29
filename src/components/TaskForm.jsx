import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, settitle] = useState("");
  const [day, setday] = useState("");
  const { createTask } = useContext(TaskContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    //envio de datos -objetos- al componente padre
    createTask({
      title,
      day,
    });
    settitle("");
    setday("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handlesubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear Tarea</h1>
          
        <input
          placeholder="Escribe una titulo"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className="w-full bg-slate-900 text-white p-2 rounded-md mb-4"
          autoFocus
        />
        <textarea
          placeholder="Escribe una tarea"
          onChange={(e) => setday(e.target.value)}
          value={day}
          className="w-full bg-slate-900 text-white p-2 rounded-md mb-4"
        ></textarea>

        <button className="bg-blue-500 w-full p-2 rounded-md text-white">
         Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
