import Link from "next/link";

async function getTasks() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

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

export default async function Home() {
  const tasks = await getTasks();

  if (!tasks) {
    return <div>Error loading tasks</div>;
  }

  return (
    <main>
      <h1>Ma To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>
              {task.title} - {task.completed ? "Completed" : "Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
