import { useSelector } from "react-redux";
import { useMemo } from "react"; // Import useMemo hook

const TotalCompletedTodo = () => {
  const todos = useSelector((state) => state.todos);

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed === true);
  }, [todos]);

  return (
    <>
      <h1>Total Todos: {todos.length}</h1>
      <h1>Total Completed Todos: {completedTodos.length}</h1>
    </>
  );
};

export default TotalCompletedTodo;
