import { useState } from "react";

interface TaskType {
  id: string;
  text: string;
  isCompleted: boolean;
}

const Todo = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (!input.trim()) return;

    const newTask: TaskType = {
      id: Date.now().toString(),
      text: input,
      isCompleted: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const remove = (id: string) => {
    const filterTask = tasks.filter((item) => id !== item.id);
    setTasks(filterTask);
  };

  const isCompleted = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        id === task.id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const edit = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (id === task.id ? { ...task, text: input } : task))
    );
  };

  return (
    <div>
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {tasks.map((item, index) => (
          <p key={item.id}>
            {index + 1}. {item.text}
            <button onClick={() => remove(item.id)}>Removev</button>
            <button onClick={() => isCompleted(item.id)}>
              {item.isCompleted ? "completed" : "complete"}
            </button>
            <button
              onClick={() => {
                edit(item.id), setInput(item.text);
              }}
            >
              edit
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Todo;
