import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: number) {
  //tanstack query refetch되는 경우 4가지
  //mount, window focus, 네트워크 재 연결, 인터벌
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],
    staleTime: 5000,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
}
