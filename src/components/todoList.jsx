import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
} from "../redux/slices/Todo/todoSlice";
import TotalCompletedTodo from "./totalCompletedTodo";

const TodoList = () => {
  const [values, setValues] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoItems = () => {
    const trimmedValue = values.trim();

    if (trimmedValue !== "") {
      dispatch(
        addTodo({
          title: trimmedValue,
        })
      );
      setValues("");
    } else {
      alert("Cant be empty");
    }
  };

  const deleteTodoList = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const toggleCompleted = (id, completed) => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          // border: "1px solid black",
          padding: " 30px",
        }}
      >
        <h1 className=" text-3xl font-medium">Todo List</h1>
        <span className=" flex items-center justify-between mt-2">
          <input
            className="border border-black rounded-md w-full placeholder:text-black indent-2"
            onChange={(e) => setValues(e.target.value)}
            value={values}
            style={{ padding: "6px" }}
            type="text"
            placeholder="Write your todos activities..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTodoItems();
              }
            }}
          />
          <button
            className=" bg-black whitespace-nowrap text-white rounded-md py-[6px] px-3 font-medium ml-5"
            onClick={addTodoItems}
          >
            Add Todo
          </button>
        </span>

        <ul className=" mt-5 flex flex-col items-start justify-center rounded-md divide-y divide-black/20 ul-shadow *:py-3">
          {todos.map(({ id, title, completed }) => (
            <label
              className={` ${
                completed == true ? "bg-green-200 text-black" : ""
              } text-base px-3  flex justify-between items-center w-full cursor-pointer `}
              key={id}
            >
              <span className=" flex items-center gap-3">
                <input
                  checked={completed}
                  className=" size-4"
                  type="checkbox"
                  onChange={() => toggleCompleted(id, completed)}
                />
                <span className="flex-wrap flex w-full">{title}</span>
              </span>

              <button
                onClick={() => deleteTodoList(id)}
                className=" min-h-full ml-3 py-1 bg-red-600 rounded-sm text-white font-medium px-3"
              >
                Delete
              </button>
            </label>
          ))}
        </ul>

        <TotalCompletedTodo />
      </div>
    </>
  );
};

export default TodoList;
