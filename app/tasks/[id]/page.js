import { getTask } from "@/lib/api";
import TaskDetail from "../../components/TaskDetail";

export async function generateMetadata({ params }) {
  const task = await getTask(params.id);

  if (!task) {
    return {
      title: "Tâche introuvable",
      description: "Cette tâche n'existe pas.",
    };
  }

  return {
    title: `Tâche #${task.id}`,
    description: `Détail de la tâche : ${task.title}`,
  };
}

export default async function TaskPage({ params }) {
  const task = await getTask(params.id);

  if (!task) {
    return <div style={{ padding: "1rem" }}>Tâche introuvable.</div>;
  }

  return <TaskDetail task={task} />;
}
