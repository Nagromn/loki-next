import Link from "next/link";

export async function generateMetadata({ params }) {
  const task = await getTask(params.id);

  return {
    title: `Tâche ${task.id}`,
    description: `Détails de la tâche ${task.title}`,
  };
}

async function getTask(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return null;
  }
}

export default async function Task({ params }) {
  const task = await getTask(params.id);

  if (!task) {
    return <div>Error loading tasks</div>;
  }

  return (
    <main>
      <h1>{task.title}</h1>
      <p>Tâche terminée ? {task.completed ? "Oui" : "Non"}</p>
      <Link href="/">
        <button>Retour à la liste des tâches</button>
      </Link>
    </main>
  );
}
