import { cache } from 'react'

export const getTask = cache(async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

  if (!res.ok) return null;

  const task = await res.json();

  return task;
});
