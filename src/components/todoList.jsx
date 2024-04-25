import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { addTodo, editTodo } from "../redux/slices/Todo/todoSlice";
import TotalCompletedTodo from "./totalCompletedTodo";
import TodoItems from "./todoitems";

const TodoList = () => {
  const [values, setValues] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todos.title);

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

  const handleSave = () => {
    dispatch(
      editTodo({
        id: todos.id,
        title: editedTitle,
      })
    );

    setEditToggle(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
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

          <span>
            <button
              className=" bg-black whitespace-nowrap text-white rounded-md py-[6px] px-3 font-medium ml-5"
              onClick={addTodoItems}
            >
              Add Todo
            </button>
          </span>
        </span>

        <ul className=" mt-5 flex flex-col items-start justify-center rounded-md divide-y divide-black/20 ul-shadow *:py-3">
          {todos.map((todo) => {
            return (
              <TodoItems
                key={todo.id}
                todo={todo}
                setEditToggle={setEditToggle}
                setEditedTitle={setEditedTitle}
                editToggle={editToggle}
                handleSave={handleSave}
              />
            );
          })}
        </ul>

        <TotalCompletedTodo />
      </div>
    </>
  );
};

export default TodoList;
