import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import {
  deleteTodo,
  markAsDone,
  markAsUnDone,
} from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  const handleMarkAsUnDone = (id) => {
    dispatch(markAsUnDone(id));
  };

  return (
    <>
      <h1>Todo List App</h1>
      <AddForm />
      {todos.length === 0 ? <p>No todos available. Add a new task!</p> : ""}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
              marginBottom: "15px",
            }}
          >
            {todo.task} &nbsp;
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
            <button
              style={{ backgroundColor: "blue" }}
              onClick={() =>
                todo.isDone
                  ? handleMarkAsUnDone(todo.id)
                  : handleMarkAsDone(todo.id)
              }
            >
              {todo.isDone ? "Undo" : "Mark As Done"}
            </button>
          </li>
        ))}
      </ul>
      <hr style={{ margin: "20px auto" }} />
    </>
  );
}
