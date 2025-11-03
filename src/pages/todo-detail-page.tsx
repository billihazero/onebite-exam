import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const params = useParams();

  const id = params.id;
  const { data, isLoading } = useTodoDataById(String(id));

  if (isLoading) return <div>로딩 중 입니다.</div>;
  return <div>{data?.content}</div>;
}
