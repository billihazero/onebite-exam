import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string) {
  //tanstack query refetch되는 경우 4가지
  //mount, window focus, 네트워크 재 연결, 인터벌
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],
    staleTime: 5000,
    gcTime: 5000, //staletime보다 더 우선순위 . stale이 300,000 이여도 gcTime=5초후라면 없어진다.
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
}
