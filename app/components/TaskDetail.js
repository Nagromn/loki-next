"use client";

import "./TaskDetail.css";

export default function TaskDetail({ task }) {
  return (
    <div className="task-container">
      <h1 className="task-title">Détail de la tâche #{task.id}</h1>
      <p className="task-detail">
        <strong>Titre :</strong> {task.title}
      </p>
      <p className="task-detail">
        <strong>Complétée :</strong> {task.completed ? "✅ Oui" : "❌ Non"}
      </p>
    </div>
  );
}
