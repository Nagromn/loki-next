"use client";

import Link from "next/link";
import { useState } from "react";
import "./TodoApp.css";

export default function TodoApp({ todos: initialTodos = [] }) {
  const [todos, setTodos] = useState(initialTodos);

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Ma ToDo List</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <label className="todo-label">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              <Link href={`/tasks/${todo.id}`}>
                <span
                  className={`todo-text ${todo.completed ? "completed" : ""}`}
                >
                  {todo.title}
                </span>
              </Link>
            </label>
            <button
              className="todo-delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
