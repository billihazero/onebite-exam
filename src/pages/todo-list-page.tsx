import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/use-todos-data";
export default function TodoListPage() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const data = await fetchTodos();
  //     setTodos(data);
  //   } catch (error) {
  //     setError(error as any);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { data: todos, isLoading, error } = useTodosData();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
