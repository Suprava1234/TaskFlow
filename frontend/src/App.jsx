import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Get tasks from backend
  const loadTasks = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Add task
  const addTask = async (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: task,
      }),
    });

    const newTask = await response.json();

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Complete task
  const toggleTask = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: "PATCH",
    });

    const updatedTask = await response.json();

    setTasks(
      tasks.map((item) =>
        item.id === id ? updatedTask : item
      )
    );
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setTasks(
      tasks.filter((item) => item.id !== id)
    );
  };

  const completed = tasks.filter(
    (item) => item.completed
  ).length;

  const pending = tasks.length - completed;

  return (
    <div className="app">

      <header>
        <div className="logo">✓</div>

        <div>
          <h1>TaskFlow</h1>
          <p>Full Stack Task Management System</p>
        </div>
      </header>

      <div className="stats">

        <div>
          <span>Total Tasks</span>
          <strong>{tasks.length}</strong>
        </div>

        <div>
          <span>Pending</span>
          <strong>{pending}</strong>
        </div>

        <div>
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>

      </div>

      <section className="card">

        <h2>My Tasks</h2>

        <p className="subtitle">
          Add and manage your daily tasks
        </p>

        <form onSubmit={addTask}>

          <input
            type="text"
            placeholder="Enter a new task..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />

          <button type="submit">
            + Add Task
          </button>

        </form>

        <div className="task-list">

          {tasks.length === 0 ? (

            <p className="empty">
              No tasks yet. Add your first task!
            </p>

          ) : (

            tasks.map((item) => (

              <div className="task" key={item.id}>

                <button
                  className="check"
                  onClick={() =>
                    toggleTask(item.id)
                  }
                >
                  {item.completed ? "✓" : "○"}
                </button>

                <span
                  className={
                    item.completed
                      ? "completed"
                      : ""
                  }
                >
                  {item.title}
                </span>

                <button
                  className="delete"
                  onClick={() =>
                    deleteTask(item.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))

          )}

        </div>

      </section>

      <footer>
        React.js + Node.js + Express.js
      </footer>

    </div>
  );
}

export default App;