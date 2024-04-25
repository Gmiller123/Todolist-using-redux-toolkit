import PropTypes from "prop-types";
import { deleteTodo, toggleComplete } from "../redux/slices/Todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoItems = ({ todo }) => {
  const { id, title, completed } = todo;

  const dispatch = useDispatch();

  const deleteTodoList = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  const toggleCompleted = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  return (
    <>
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
            onChange={toggleCompleted}
          />
          <span className="flex-wrap flex w-full">{title}</span>
        </span>

        <span className=" flex items-center gap-1">
          {/* <button
            onClick={() => handleEdit(id)}
            className=" bg-blue-600  min-h-full ml-3 py-1  rounded-sm text-white font-medium px-3"
          >
            Edit
          </button> */}

          <button
            onClick={deleteTodoList}
            className=" min-h-full py-1 bg-red-600 rounded-sm text-white font-medium px-3"
          >
            Delete
          </button>
        </span>
      </label>
    </>
  );
};

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired,
  setEditToggle: PropTypes.func.isRequired,
  setEditedTitle: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  editToggle: PropTypes.bool.isRequired,
};

export default TodoItems;
