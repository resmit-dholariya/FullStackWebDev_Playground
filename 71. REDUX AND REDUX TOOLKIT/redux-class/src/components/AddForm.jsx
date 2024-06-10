import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState("");
  let dispatch = useDispatch();

  let handleSubmit = (event) => {
    event.preventDefault();
    setTask("");
    if (task !== "") {
      dispatch(addTodo(task));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write Your Tasks here"
          style={{ height: "22px" }}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
        <hr style={{ margin: "20px auto" }} />
      </form>
    </>
  );
}
