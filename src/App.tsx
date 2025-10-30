import { Route, Routes } from "react-router";
import "./App.css";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/todo-list-page";
import TodoDetailPage from "./pages/todo-detail-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="counter" element={<CounterPage />} />
      <Route path="todo" element={<TodoListPage />} />
      <Route path="todo/:id" element={<TodoDetailPage />} />
      <Route path="/sign-in" element={<div>SignIn</div>} />
      <Route path="/sign-up" element={<div>SignUp</div>} />
    </Routes>
  );
}

export default App;
