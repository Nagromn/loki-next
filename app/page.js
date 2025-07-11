import TodoApp from "./components/TodoApp";

export const metadata = {
  title: "To Do List",
};

export default async function Page() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const todos = await res.json();

  return <TodoApp todos={todos} />;
}
