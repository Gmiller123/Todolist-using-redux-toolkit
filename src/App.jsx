import "./App.css";
// import { Counter } from "./components/counter";
import TodoList from "./components/todoList";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <div className="max-w-[500px] m-auto h-screen mt-10">
        <TodoList />
      </div>
    </>
  );
}

export default App;
