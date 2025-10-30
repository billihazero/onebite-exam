import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function fetchTodoById(id: number) {
  const response = await fetch(`${API_URL}/todos/${id}`);
  if (!response.ok) throw new Error("fetch errored");

  const data: Todo = await response.json();
  return data;
}
