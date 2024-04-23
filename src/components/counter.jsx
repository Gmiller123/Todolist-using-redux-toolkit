import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counter/counterSlice";

export function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <button
          style={{
            padding: "10px",

            fontSize: "20px",
          }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ fontSize: "40px" }}>{counter}</span>
        <button
          style={{
            padding: "10px",

            fontSize: "20px",
          }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <h1 style={{ textTransform: "uppercase", fontSize: "60px" }}>APple</h1>
      </div>
    </div>
  );
}
